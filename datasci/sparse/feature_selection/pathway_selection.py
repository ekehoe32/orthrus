"""
Module containing classes for pathway discovery in -omics data.
"""

from sklearn.base import BaseEstimator
from sklearn.utils.validation import check_X_y, check_array, check_is_fitted
from sklearn.utils.multiclass import unique_labels
import ray
import numpy as np
import torch as tc

class PathwayScore(BaseEstimator):

    def __init__(self,
                 device: int = -1,
                 use_ray: bool = True):

        # parameters
        self.device = device
        self.use_ray = use_ray

        # attributes
        self.X_ = None
        self.pathways_ = None
        self.classes_ = None
        self.subspaces_ = None
        self.scores_ = None

    def fit(self, X, y, pathways):

        # Check that X and y have correct shape
        X, y = check_X_y(X, y)

        # Store the classes seen during fit
        self.classes_ = unique_labels(y)

        # store data, labels, and pathways
        self.X_ = np.array(X)
        self.y_ = np.array(y)
        self.pathways_ = pathways

        # generate subspaces
        print("Generating subspaces...")
        if self.use_ray:
            # initialize ray cluster
            ray.init()

            # define generate_subspace function
            @ray.remote
            def generate_subspace(X, sample_ids, feature_ids):

                # restrict the data
                Z = X[:, feature_ids]
                Z = Z[sample_ids, :]
                Z = self.convert_type(Z)

                # perform SVD to extract subspace
                _, _, V = tc.svd(Z)

                # check if there are more samples than features
                if len(sample_ids) >= len(feature_ids):
                    Z = V[:, :-1].transpose(0, 1)  # use best n-1 singular vectors for basis
                else:
                    Z = V.transpose(0, 1)

                    return Z.detach().cpu().numpy()

            # find pathway subspaces
            futures = []
            for cls in self.classes_:
                for pathway in pathways:
                    sample_ids = np.where(self.y_ == cls)[0]
                    futures.append(generate_subspace.remote(self.X_, sample_ids, pathway))

            # get futures
            self.subspaces_ = ray.get(futures)

            # reshape the list of subspaces
            self.subspaces_ = np.array(self.subspaces_).reshape(len(self.classes_), -1)
        else:
            pass


    def transform(self, X, y=None):

        # convert data to numpy
        X = np.array(X)

        # divide by norms to obtain unit vectors
        X = np.linalg.norm(X, axis=1, keepdims=True)

        # compute angles
        if self.use_ray:

            # define angle function
            @ray.remote
            def angle(X, Y):

                # convert types
                Z = self.convert_type(X)
                W = self.convert_type(Y)

                # compute product
                angles = tc.matmul(W, Z.transpose(0, 1))
                angles = tc.linalg.norm(angles, axis=1, keepdim=True)
                angles = tc.arccos(angles)

                return angles.detach().cpu().numpy().tolist()

            # find angles between incoming samples and pathway subspaces
            futures = []
            for i, cls in enumerate(self.classes_):
                for j, pathway in enumerate(self.pathways_):
                    sample_ids = np.where(self.y_ == cls)[0]
                    futures.append(angle.remote(self.subspaces_[i, j], X))

            # get futures
            self.scores_ = ray.get(futures)
            self.scores_ = np.array(self.scores_).reshape(len(self.classes_), len(self.pathways_), X.shape[0])

        else:
            pass

    def convert_type(self, x):

        if self.device == -1:
            if isinstance(x, tc.Tensor):
                return x.detach().cpu().type(tc.float64)
            else:
                return tc.tensor(data=x, dtype=tc.float64)
        elif self.device == 'any':
            if isinstance(x, tc.Tensor):
                return x.detach().type(tc.float64).cuda()
            else:
                return tc.tensor(data=x, dtype=tc.float64).cuda()
        else:
            cuda = tc.device('cuda:' + str(self.device))
            if isinstance(x, tc.Tensor):
                return x.detach().type(tc.float64).to(cuda)
            else:
                return tc.tensor(data=x, device=cuda, dtype=tc.float64)