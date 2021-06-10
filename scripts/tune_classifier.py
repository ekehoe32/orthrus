"""
Generic script for tuning a classifier with ray.
"""

if __name__ == '__main__':
    # imports for arguments
    import argparse
    import os

    # command line arguments
    parser = argparse.ArgumentParser("generic-classifier-tuner")

    parser.add_argument('--exp_params',
                        type=str,
                        default=os.path.join(os.environ['DATASCI_PATH'], 'test_data', 'Iris', 'Experiments',
                                             'setosa_versicolor_classify_species_svm',
                                             'setosa_versicolor_classify_species_svm_params.py'),
                        help='File path of containing the experimental parameters. Default is the Iris experiment.')


    parser.add_argument('--logdir',
                        type=str,
                        default='~/logs/tune_classifier',
                        help='Directory of where to store the log of the tuning procedure.')

    parser.add_argument('--score',
                        type=str,
                        default='bsr',
                        choices=['bsr', 'accuracy'],
                        help='Score reported by the classifier.')

    args = parser.parse_args()

    # imports
    import shutil
    from datasci.core.helper import module_from_path
    from datasci.core.helper import default_val
    from ray import tune

    # set experiment parameters
    exp_params = module_from_path('exp_params', args.exp_params)
    script_args = exp_params.TUNE_CLASSIFIER_ARGS
    results_dir = script_args.get('RESULTS_DIR', exp_params.RESULTS_DIR)
    exp_name = script_args.get('EXP_NAME', exp_params.EXP_NAME)
    class_attr = script_args.get('CLASS_ATTR', exp_params.CLASS_ATTR)
    ds = script_args.get('DATASET', exp_params.DATASET)
    sample_ids = script_args.get('SAMPLE_IDS', exp_params.SAMPLE_IDS)
    feature_ids = script_args.get('FEATURE_IDS', exp_params.FEATURE_IDS)
    partitioner = script_args.get('PARTITIONER', exp_params.PARTITIONER)
    partitioner_name = script_args.get('PARTITIONER_NAME', default_val(exp_params, 'PARTITIONER_NAME'))
    classifier = script_args.get('CLASSIFIER', exp_params.CLASSIFIER)
    classifier_name = script_args.get('CLASSIFIER_NAME', default_val(exp_params, 'CLASSIFIER_NAME'))
    classifier_fweights_handle = script_args.get('CLASSIFIER_FWEIGHTS_HANDLE', default_val(exp_params, 'CLASSIFIER_FWEIGHTS_HANDLE'))
    classifier_sweights_handle = script_args.get('CLASSIFIER_SWEIGHTS_HANDLE', default_val(exp_params, 'CLASSIFIER_SWEIGHTS_HANDLE'))
    classifier_tuning_params = script_args.get('CLASSIFIER_TUNING_PARAMS')

    # set scorer
    if args.score == 'bsr':
        from sklearn.metrics import balanced_accuracy_score
        scorer = balanced_accuracy_score
    elif args.score == 'accuracy':
        from sklearn.metrics import accuracy_score
        scorer = accuracy_score

    # set log directory
    log_dir, log_name = os.path.split(os.path.abspath(args.logdir))

    def objective_function(**kwargs):

        # generate new classifier with args
        new_classifier = classifier.__class__(**kwargs)


        classification_results = ds.classify(classifier=new_classifier,
                                             classifier_name=classifier_name,
                                             attr=class_attr,
                                             sample_ids=sample_ids,
                                             feature_ids=feature_ids,
                                             partitioner=partitioner,
                                             partitioner_name=partitioner_name,
                                             scorer=scorer,
                                             scorer_name=args.score,
                                             f_weights_handle=classifier_fweights_handle,
                                             s_weights_handle=classifier_sweights_handle)

        train_score_dict = classification_results['scores'].loc['Train'].to_dict()
        test_score_dict = classification_results['scores'].loc['Test'].to_dict()
        train_score_dict = {k+'_Train': v for k, v in train_score_dict.items()}
        test_score_dict = {k+'_Test': v for k, v in test_score_dict.items()}

        return {**train_score_dict, **test_score_dict}



    def trainable(config):
        scores = objective_function(**config)
        [tune.report(**scores)]

    # remove contents of original log directory
    shutil.rmtree(os.path.join(log_dir, log_name))

    tune.run(trainable,
             config=classifier_tuning_params,
             local_dir=os.path.abspath(log_dir),
             name=log_name)
