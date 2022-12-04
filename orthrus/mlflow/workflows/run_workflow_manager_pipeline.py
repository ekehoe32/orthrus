# imports
from urllib.parse import urlparse
import mlflow
import mlflow
from pathlib import Path
import sys
from mlflow.entities import experiment_tag
from orthrus.core.helper import module_from_path
import os
import orthrus.mlflow.modules.utils as utils



if __name__ == '__main__':

        # process command line arguments
        parser = utils.get_workflow_parser()
        args = vars(utils.process_args(parser))

        # setup logger, mlflow and ray runs
        logger = utils.setup_workflow_execution(**args)
        
        # generate module
        experiment_name = Path(args['experiment_module_path']).stem
        experiment_module = module_from_path(experiment_name, args['experiment_module_path'])

        #get pipeline of workflows
        pipeline = experiment_module.generate_pipeline_of_workflows(**args)

        # log mlflow run ids and experiment module path of each workflow in the main experiment
        # also create soflinks of workflow experiment directories in the main or default experiment's artifacts directory
        params = {}
        process_list = []
        
        artifact_dir_for_default_process = urlparse(mlflow.active_run()._info.artifact_uri).path
        for process in pipeline.processes:
                params[f'Run id - {process.process_name}'] = process.mlflow_run_id
                params[f'Experiment module path - {process.process_name}'] = process.experiment_module_path
                
                process_list.append(f'{process.process_name}')

                #add softlinks of the  WorkflowManagerProcess(s) to the 'default' process
                try:    
                        from pathlib import Path
                        experiment_dir_path_for_process = urlparse(mlflow.get_experiment_by_name(process.process_name).artifact_location).path
                        run_dir_path_for_process = os.path.join(experiment_dir_path_for_process, process.mlflow_run_id)
                        dst  = os.path.join(artifact_dir_for_default_process, process.process_name)
                        if not os.path.exists(os.path.join(artifact_dir_for_default_process, process.process_name)):
                                os.symlink(src = run_dir_path_for_process, dst = dst, target_is_directory=True)
                        # os.link(src = run_dir_path_for_process, dst = os.path.join(artifact_dir_for_default_process, process.process_name))
                except AttributeError as e:
                        logger.error(e, exc_info=True)

        # log mlflow parameters
        mlflow.log_param('Sequence of workflows', '\n------>\n'.join(process_list))
        mlflow.log_params(params)

        #run pipeline
        pipeline.run(None, checkpoint=True, batch_args={'batch':args})
        
        logger.info(f'Finishing execution of the run_workflow_manager_pipeline workflow for the module located at path {args["experiment_module_path"]}.') 
        logger.info(f'The mlflow run_id for the run was: {mlflow.active_run().info.run_id}')

