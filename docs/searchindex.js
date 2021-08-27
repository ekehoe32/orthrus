Search.setIndex({docnames:["index","rst/add_new_attributes_using_queries","rst/classify_data","rst/create_dataset","rst/feature_selection","rst/feature_set_size_reduction","rst/getting_started","rst/modules","rst/normalization_and_imputation","rst/orthrus","rst/orthrus.core","rst/orthrus.decomposition","rst/orthrus.manifold","rst/orthrus.model_selection","rst/orthrus.preprocessing","rst/orthrus.solvers","rst/orthrus.sparse","rst/orthrus.sparse.classifiers","rst/orthrus.sparse.feature_selection","rst/visualize_data","rst/what_is_the_dataset"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["index.rst","rst/add_new_attributes_using_queries.rst","rst/classify_data.rst","rst/create_dataset.rst","rst/feature_selection.rst","rst/feature_set_size_reduction.rst","rst/getting_started.rst","rst/modules.rst","rst/normalization_and_imputation.rst","rst/orthrus.rst","rst/orthrus.core.rst","rst/orthrus.decomposition.rst","rst/orthrus.manifold.rst","rst/orthrus.model_selection.rst","rst/orthrus.preprocessing.rst","rst/orthrus.solvers.rst","rst/orthrus.sparse.rst","rst/orthrus.sparse.classifiers.rst","rst/orthrus.sparse.feature_selection.rst","rst/visualize_data.rst","rst/what_is_the_dataset.rst"],objects:{"orthrus.core":{dataset:[10,0,0,"-"],helper:[10,0,0,"-"],pipeline:[10,0,0,"-"],scratch:[10,0,0,"-"]},"orthrus.core.dataset":{DataSet:[10,1,1,""],from_ccd:[10,4,1,""],load_dataset:[10,4,1,""]},"orthrus.core.dataset.DataSet":{autosummarize:[10,2,1,""],classify:[10,2,1,""],data:[10,3,1,""],description:[10,3,1,""],dissimilarity_matrix:[10,3,1,""],experiments:[10,3,1,""],feature_select:[10,2,1,""],generate_attr_from_queries:[10,2,1,""],imputation_method:[10,3,1,""],impute:[10,2,1,""],metadata:[10,3,1,""],n_features:[10,2,1,"id0"],n_samples:[10,2,1,"id1"],name:[10,3,1,""],normalization_method:[10,3,1,""],normalize:[10,2,1,""],path:[10,3,1,""],print_description:[10,2,1,""],reformat_metadata:[10,2,1,""],save:[10,2,1,""],slice_dataset:[10,2,1,""],vardata:[10,3,1,""],visualize:[10,2,1,""]},"orthrus.core.helper":{batch_jobs_:[10,4,1,""],default_val:[10,4,1,""],generate_experiment:[10,4,1,""],generate_project:[10,4,1,""],generate_save_path:[10,4,1,""],get_close_matches_icase:[10,4,1,""],load_object:[10,4,1,""],method_exists:[10,4,1,""],module_from_path:[10,4,1,""],plot_scores:[10,4,1,""],pop_first_element:[10,4,1,""],save_object:[10,4,1,""],scatter_plotly:[10,4,1,""],scatter_pyplot:[10,4,1,""]},"orthrus.core.pipeline":{Classify:[10,1,1,""],FeatureSelect:[10,1,1,""],Fit:[10,1,1,""],Partition:[10,1,1,""],Pipeline:[10,1,1,""],Process:[10,1,1,""],Score:[10,1,1,""],Transform:[10,1,1,""],compose:[10,4,1,""]},"orthrus.core.pipeline.Classify":{run_:[10,2,1,""]},"orthrus.core.pipeline.FeatureSelect":{run_:[10,2,1,""],transform:[10,2,1,""]},"orthrus.core.pipeline.Partition":{run:[10,2,1,""],run_:[10,2,1,""]},"orthrus.core.pipeline.Pipeline":{checkpoint_path:[10,2,1,""],process_name:[10,2,1,""],run:[10,2,1,""],run_:[10,2,1,""],stop_before:[10,2,1,""]},"orthrus.core.pipeline.Process":{collapse_results:[10,2,1,""],extract_result:[10,2,1,""],parallel:[10,3,1,""],process:[10,3,1,""],process_name:[10,2,1,""],results_:[10,3,1,""],run:[10,2,1,""],run_:[10,2,1,""],run_status_:[10,3,1,""],save:[10,2,1,""],save_results:[10,2,1,""],verbosity:[10,3,1,""]},"orthrus.core.pipeline.Score":{run:[10,2,1,""],run_:[10,2,1,""]},"orthrus.core.pipeline.Transform":{run_:[10,2,1,""],transform:[10,2,1,""]},"orthrus.decomposition":{general:[11,0,0,"-"]},"orthrus.decomposition.general":{OrthTransform:[11,1,1,""],align_embedding:[11,4,1,""]},"orthrus.decomposition.general.OrthTransform":{coordinates:[11,3,1,""],fit:[11,2,1,""],fit_transform:[11,2,1,""]},"orthrus.manifold":{mds:[12,0,0,"-"]},"orthrus.manifold.mds":{MDS:[12,1,1,""]},"orthrus.manifold.mds.MDS":{eigenvalues_:[12,3,1,""],eigenvectors_:[12,3,1,""],embedding_:[12,3,1,""],fit:[12,2,1,""],fit_transform:[12,2,1,""]},"orthrus.model_selection":{partitioning:[13,0,0,"-"]},"orthrus.model_selection.partitioning":{TrainPartitioner:[13,1,1,""],TrainTestPartitioner:[13,1,1,""]},"orthrus.model_selection.partitioning.TrainPartitioner":{split:[13,2,1,""]},"orthrus.model_selection.partitioning.TrainTestPartitioner":{split:[13,2,1,""]},"orthrus.preprocessing":{batch_corrections:[14,0,0,"-"],normalizations:[14,0,0,"-"]},"orthrus.preprocessing.batch_corrections":{Harmony:[14,1,1,""],Limma:[14,1,1,""]},"orthrus.preprocessing.batch_corrections.Harmony":{fit_transform:[14,2,1,""]},"orthrus.preprocessing.batch_corrections.Limma":{fit_transform:[14,2,1,""]},"orthrus.preprocessing.normalizations":{LogNormalizer:[14,1,1,""],MedianFoldChangeNormalizer:[14,1,1,""]},"orthrus.preprocessing.normalizations.LogNormalizer":{fit:[14,2,1,""],fit_transform:[14,2,1,""],transform:[14,2,1,""]},"orthrus.preprocessing.normalizations.MedianFoldChangeNormalizer":{fit_transform:[14,2,1,""]},"orthrus.solvers":{linear:[15,0,0,"-"]},"orthrus.solvers.linear":{LPNewton:[15,1,1,""]},"orthrus.solvers.linear.LPNewton":{convert_type:[15,2,1,""],solve:[15,2,1,""],step:[15,2,1,""]},"orthrus.sparse.classifiers":{svm:[17,0,0,"-"]},"orthrus.sparse.classifiers.svm":{L1SVM:[17,1,1,""],SSVMClassifier:[17,1,1,""]},"orthrus.sparse.classifiers.svm.L1SVM":{convert_type:[17,2,1,""],fit:[17,2,1,""],predict:[17,2,1,""]},"orthrus.sparse.classifiers.svm.SSVMClassifier":{bias_:[17,3,1,""],classes_:[17,3,1,""],decision_function:[17,2,1,""],fit:[17,2,1,""],pred_labels_:[17,3,1,""],predict:[17,2,1,""],weights_:[17,3,1,""]},"orthrus.sparse.feature_selection":{IterativeFeatureRemoval:[18,0,0,"-"],helper:[18,0,0,"-"],kffs:[18,0,0,"-"],kfold_loso_ifr:[18,0,0,"-"],kfold_shuffle_ifr:[18,0,0,"-"],pathway_selection:[18,0,0,"-"],pca_snr_selection:[18,0,0,"-"],sabs:[18,0,0,"-"]},"orthrus.sparse.feature_selection.IterativeFeatureRemoval":{IFR:[18,1,1,""]},"orthrus.sparse.feature_selection.IterativeFeatureRemoval.IFR":{diagnostic_information_:[18,3,1,""],fit:[18,2,1,""],plot_basic_diagnostic_stats:[18,2,1,""],select_features_for_data_partition:[18,3,1,""]},"orthrus.sparse.feature_selection.helper":{get_batch_correction_matric_for_ranked_features:[18,4,1,""],get_top_95_features:[18,4,1,""],rank_features_by_attribute:[18,4,1,""],rank_features_by_mean_attribute_value:[18,4,1,""],rank_features_within_attribute_class:[18,4,1,""],reduce_feature_set_size:[18,4,1,""],sliding_window_classification_on_ranked_features:[18,4,1,""]},"orthrus.sparse.feature_selection.kffs":{KFFS:[18,1,1,""]},"orthrus.sparse.feature_selection.kffs.KFFS":{classifiers_:[18,3,1,""],fit:[18,2,1,""],ranks_:[18,3,1,""],results_:[18,3,1,""],transform:[18,2,1,""]},"orthrus.sparse.feature_selection.kfold_loso_ifr":{KFLIFR:[18,1,1,""]},"orthrus.sparse.feature_selection.kfold_loso_ifr.KFLIFR":{fit:[18,2,1,""],results_:[18,3,1,""]},"orthrus.sparse.feature_selection.kfold_shuffle_ifr":{KFSIFR:[18,1,1,""]},"orthrus.sparse.feature_selection.kfold_shuffle_ifr.KFSIFR":{fit:[18,2,1,""],results_:[18,3,1,""]},"orthrus.sparse.feature_selection.pathway_selection":{PathwayScore:[18,1,1,""]},"orthrus.sparse.feature_selection.pathway_selection.PathwayScore":{convert_type:[18,2,1,""],fit:[18,2,1,""],transform:[18,2,1,""]},"orthrus.sparse.feature_selection.pca_snr_selection":{PCASNR:[18,1,1,""]},"orthrus.sparse.feature_selection.pca_snr_selection.PCASNR":{fit:[18,2,1,""],plot_snrs:[18,2,1,""],snr:[18,2,1,""]},"orthrus.sparse.feature_selection.sabs":{SABS:[18,1,1,""]},"orthrus.sparse.feature_selection.sabs.SABS":{fit:[18,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"001":[15,17,18],"029557":2,"100":[2,10,18,20],"1000":20,"10000":20,"10000_at":20,"10001":20,"10001_at":20,"1000_at":20,"100_at":20,"104920":2,"10_at":20,"10e":18,"1122":3,"116":1,"118":3,"12023":20,"125":3,"127":19,"132":3,"142":3,"145":20,"146":20,"147":20,"150":20,"166":3,"1764":3,"200":10,"20000":20,"2021":17,"213456":2,"272":1,"277":5,"2886":3,"3_at":20,"403911":2,"408352":2,"413565":2,"457171":2,"500":18,"5000":[5,19],"5_at":20,"60_train_40_test":2,"800":10,"8000":5,"80train_20test":2,"831287":2,"8787":10,"900":10,"abstract":10,"boolean":10,"break":18,"case":[3,4,8,10,19],"class":[1,4,6,8,10,11,12,13,14,15,17,18,19,20],"default":[4,10,11,17,18,19],"export":[10,19,20],"final":[1,4,18],"float":[10,15,17,18,19],"function":[5,10,11,14,17,18,19],"import":[1,2,3,4,5,8,10,18,19,20],"int":[3,10,12,15,17,18],"new":[0,3,4,5,6,10,12,17],"return":[2,4,10,11,12,13,14,18],"short":10,"throw":3,"true":[1,2,3,4,5,10,11,17,18,19,20],"try":3,"while":[1,10,19],AND:5,Adding:[0,6],Axes:[10,19],But:3,For:[1,2,4,5,10,17,18,19,20],Its:10,MDS:[1,10,12,19,20],Not:17,One:[18,19],THE:5,The:[1,2,3,4,5,8,10,11,12,13,17,18,19,20],Their:14,Then:[2,5],There:[1,3,14],These:[5,8,13,18,20],Use:[3,18,19],Using:[2,6,20],__init__:[3,10],__str__:10,_build:19,_collapse_tvt_label:10,_id:10,_slice:10,abc:10,abl:[10,17],about:[4,5],abov:[1,2,10,14,17,18,20],abs:10,absolut:18,accent:10,accept:[10,18],access:[4,19,20],accord:[2,10],accordingli:18,accuraci:[10,18],acetyltran:20,acetyltransferas:20,across:[2,10,18,20],action:10,adapt:[10,17],add:[1,3],adding:4,addit:[8,19],addition:10,adenosin:20,adjust:[2,10],advanc:10,affect:18,affin:[10,11,17],affx:20,after:[4,8,10,14,17,18],again:5,against:10,age:20,aim:5,akt:20,algebra:17,algo:14,algorithm:[5,12,14,17,18,20],align:11,align_embed:11,all:[1,4,10,18,19],allow:19,along:[10,14],alpha:[18,19],alreadi:10,also:[2,4,6,10,18,19],altern:[4,18,19],although:4,analysi:20,ani:[3,4,10,14,19],ann:20,anoth:[3,10],api:10,app:[10,19],appear:10,append:10,append_label:10,append_to_meta:[10,18],appli:[3,4,10,14,18,20],approach:[14,18],appropri:[14,19],approxim:[17,20],arang:10,area:20,aren:14,arg:[5,10,18],argument:[2,4,5,10,11,18,19],argumunt:10,around:5,arrai:[3,4,10,11,12,14,18,20],arrang:10,artifici:20,arylamin:20,asc:18,ascend:[5,18],assign:10,associ:[10,20],assum:[14,17],assumpt:14,astyp:[3,19],attempt:[10,11],attr:[1,2,4,5,10,18,19,20],attr_exist_mod:[1,4,10],attribut:[0,2,3,4,6,8,10,18,19],attribute_nam:10,attrnam:[10,18],auto:10,autom:20,automat:[3,10],autosummar:10,avaibl:18,avail:[1,3,8,10,18,20],averag:[10,17],axes3d:[10,19],axes:[10,19],axi:10,backend:[10,19],bacteria:20,balanc:[2,10],balanced_accuracy_scor:[2,5,10,18],balanced_subsampl:2,bar:10,base:[2,4,10,11,12,13,14,15,17,18],baseestim:[11,12,17,18],basic:[6,10],batch:[8,10,13,14,18,20],batch_0:10,batch_0_0:10,batch_0_1:10,batch_0_2:[],batch_1:10,batch_arg:10,batch_correct:[4,7,8,9],batch_correction_metric_arg:18,batch_correction_metric_handl:18,batch_jobs_:10,batchid:8,becaus:[3,18],been:[1,3,10],befor:[3,10,11],begin:8,behavior:3,being:18,below:[3,4,5,10,18,19,20],benefit:2,between:[2,3,4,10,12,18],bia:17,bias_:17,bin:10,binari:[10,17],blank:10,blob:14,block:10,boiler:[10,20],bool:[3,10,11,12,17,18],both:[1,10,18],brentp:14,briefli:5,bright:19,bsr:[2,10,18],c_rang:10,cadherin:20,calcom:[2,4,10,14,18],call:[1,10],callabl:10,can:[1,2,3,4,5,8,10,18,19],capabl:14,capit:10,care:[4,10,20],categor:10,ccd:[3,10],ccd_file:10,ccd_path:3,ccdataset:[3,10],cdc:12,cdot:10,center:12,certain:18,chang:[1,3,18],charact:10,check:[1,3,4,5,8,10,18],checkpoint:10,checkpoint_path:10,chepushtanova:17,chichau:14,chichaumiau:14,choic:[10,18],chosen:[10,18],chromosom:20,circ:10,circl:[10,19],class_attr:[4,10],class_label:10,class_weight:2,classes_:[10,17],classes_handl:10,classif:[0,4,5,6,10,17,18,20],classifci:1,classifi:[1,2,4,9,10,16,18],classification_attr:18,classification_result:2,classifier_factory_method:18,classifier_nam:[2,10],classifiermixin:17,classifiers_:18,cleanli:14,click:19,clinic:20,close:[10,17],cluster:10,code:[2,4,10,14,17,18,20],coef_:2,coeffici:18,cohort:10,collaps:10,collapse_dict_dict_panda:[],collapse_result:10,collapse_result_label:10,collect:[10,18],color:[10,19],column:[2,3,4,5,10,11,12,18,20],com:14,combat:14,combin:[4,5,11,18],come:14,common:10,compar:18,compat:[8,18,20],compil:[],complement:11,complet:[10,18],complex:[19,20],compon:[10,11,12,20],compos:[10,20],composit:10,comput:[11,12],concaten:11,condit:18,configur:[10,19],confus:2,confusion_mat:2,confusion_matrix:2,consid:[1,10],consider:[10,11],consol:[10,18],constant:18,constraint:17,construct:20,contain:[2,4,5,8,10,11,12,15,18,19,20],content:[0,10],continu:[10,11,12,19],control:[1,4,5,10,14,18],control_vs_shedd:[4,5],controls_queri:[1,4],convert:3,convert_dtyp:[3,10],convert_typ:[15,17,18],convini:8,coordin:[10,11],coordinates_:11,copi:10,core:[1,2,3,4,5,7,8,9,18,19,20],correct:[8,20],correspond:[10,12,14,17,18],count:[3,10],covariance_matrix:14,cover:10,covid:10,covid_healthi:10,covid_vs_healthy_ssvm_5:10,covid_vs_healthy_ssvm_kff:10,cpu:[10,18],creat:[0,1,4,6,10,18,20],create_dataset:1,cross:[6,10,18],cross_attr:[10,19],csu:[17,20],csv:3,ctrl:19,cuda:12,current:18,custom:[6,8,10,20],cutoff:[4,18],cutoff_fract:18,dash:[6,10,20],dashboard:10,data4:20,data:[0,1,2,3,4,6,10,11,12,14,17,18,20],data_df:3,data_matrix:3,datafram:[1,3,4,10,18,20],dataset:[0,1,2,4,5,6,7,8,9,18,19],datatyp:[3,4,10],deafult:10,deal:19,deaminas:20,debug:[10,17,19],decision_funct:17,decomposit:[7,9,10,20],decor:11,decript:20,def:10,defaul:18,default_v:10,defin:[1,2,4,5,10,13,17,18,20],delta:[15,17],demonstr:19,demostr:19,denot:[18,19],depend:[10,14],deploy:19,depth:[4,19,20],deriv:10,desc:[5,18],descend:[5,12,18],describ:[8,17,18,20],descript:[3,10,18,20],design:[4,20],detail:[3,4,8,10,18,19],determin:[10,18],dev:10,develop:19,devic:[15,17,18],diagnostic_information_:18,diagon:12,dict:[2,10,11,17,18],dictionari:[1,2,4,10,11,18],differ:[4,18,19],difflib:10,dim:[10,19],dimens:[10,11,12],dimension:[11,19,20],dir:[3,4,5],direct:1,directli:10,directori:[10,19,20],discoveri:18,discret:[10,14],discuss:5,disk:[1,4,5,10],dissimilar:10,dissimilarity_matrix:10,distanc:12,distguish:2,distinct:10,distinguish:[2,4],docoment:5,docsrc:19,docstr:17,document:[4,8,10,19],doe:[1,4,10,14,18],doesn:10,don:[14,18],done:10,doubl:[10,12],download:20,drive:20,drop:18,ds_setosa:10,dst:[3,4,5],dtype:[1,3],dual:[5,18],dure:18,each:[4,5,10,13,17,18,20],easi:4,easili:19,edit:11,effect:14,eigenvalu:12,eigenvalues_:12,eigenvector:12,eigenvectors_:12,either:[2,3,10],element:[3,4,8,10,14,18],emb:19,embed:[1,10,11,12,19,20],embedding_:12,empti:[10,11],encod:10,encount:[6,20],end:[5,10,18],enough:19,ensembl:2,ensur:3,entri:12,environ:[2,10,19,20],eps:17,equal:18,equival:[10,13,18],eric:17,err:10,error:[10,17],errortrac:17,essenti:5,etc:[10,18],euclidean:12,evalu:[2,5,18],everi:[10,18],exampl:[1,2,3,4,5,8,10,13,14,18,19,20],except:10,exception_in_model_fit:18,execut:[10,18],exist:10,exit_reason:18,experi:[2,10,13,18],experiment:10,experiment_nam:10,exposur:2,express:[10,20],extens:[10,19],extract:[2,4,5,10,18],extract_result:10,f_1:10,f_n:10,f_ranks_handl:10,f_result:[4,5,18],f_results_handl:[4,10,18],f_rnk_func:[10,18],f_weight:[2,10],f_weights_handl:[2,10,18],fact:19,factor:14,fals:[3,5,10,11,12,17,18],far:[4,10],featur:[2,10,11,18,19,20],feature_class_attribut:18,feature_help:5,feature_id:[5,10,18,19],feature_import:2,feature_importances_:2,feature_select:[4,5,9,10,16],feature_selection_result:[4,5],feature_selection_results_handl:4,feature_selector:4,feature_subset:18,features_datafram:18,features_df:18,featureselect:10,few:[2,5,18,19],fhelper:18,fig:10,figsiz:10,figur:[10,19],file:[1,3,10,19],file_path:[2,3,10,18,19],fill:10,filter:[1,3,10],find:[3,4],finer:19,finish:10,first:[1,2,3,4,5,10,18,19,20],first_dataset:3,fit:[4,10,11,12,14,17,18],fit_arg:10,fit_handl:[4,10],fit_transform:[10,11,12,14],fit_transform_handl:10,fix:1,flag:[10,12,17],flask:19,flower:2,flu:4,fly:10,fold:[6,10,13,18],folder:20,follow:[1,4,12,14,18,20],forest:[2,20],form:17,format:10,formul:17,found:[10,14,17],four:4,frac:12,fraction:[10,18],frame:[10,12],frequenc:[4,5,10,18],from:[1,2,3,4,5,8,10,12,14,18,19,20],from_ccd:[3,10],full:[18,20],func:10,function_handl:10,further:[4,10,18,19],futur:10,gamma:18,gap:18,gene1:[10,18],gene3:[10,18],gene:20,gene_id_ref:20,gener:[7,9,10,12,18,19,20],generate_attr_from_queri:[1,4,10],generate_dataset:20,generate_experi:10,generate_partit:18,generate_project:10,generate_save_path:10,geq:18,get:[0,10],get_batch_correction_matric_for_ranked_featur:18,get_close_match:10,get_close_matches_icas:10,get_top_95_featur:18,ghosh:17,github:14,give:10,given:[10,11,12,18,20],goal:20,going:[4,5],good:18,googl:20,gpu:[4,6,10,12,17,18],grab:[18,20],great:19,greater:[5,18],greatest:[10,18],grid:[5,18],group:[2,18],grp_color:10,grp_mrkr:10,gse161731_ssvm_result:10,gse161731_tmm_log2:10,gse7302:6,gse73072:[1,2,4,5,19,20],gse73072_dee2:4,gse73072_dee3:4,gse73072_dee4:4,gse73072_dee5:4,gse73072_mds_dim3:19,gse730732:[1,4],gse73073_mds_viz_example_4:19,gse_730732:[1,3,18],gsm1881744:3,gsm1881745:3,gsm1881746:3,gsm1881747:3,gsm1881748:3,gsm1884625:3,gsm1884626:3,gsm1884627:3,gsm1884628:3,gsm1884629:3,guid:20,h1n1:19,h3n2:19,had:3,halt:18,handl:[4,10,14,18],happen:[3,10,18],hard:[17,20],harmoni:[8,14],harmonypi:14,has:[1,3,10],have:[1,2,4,5,10,11,13,14,18],healthi:10,heavili:[17,18],height:10,held:10,help:10,helper:[2,4,5,7,9,16,19],here:[2,3,4,10,19],higher:[5,10],highest:18,histogram:10,hold:[10,18],homolog:20,host:[10,19],hour:[1,2,4,19],how:[2,4,5,8,17,18,19],howev:5,hrv:2,hrv_first_24:2,html:[10,19],http:[14,19],human1:[10,18],human3:[10,18],human:10,hyper:10,hyperplan:17,id_ref:20,ideal:[18,19],identif:10,identifi:18,ids:[2,4,10,18],ifr:[5,10,18],ignor:[11,12,17,18],imax:[15,17],implement:[12,14,17,18],implicitli:2,implment:14,impur:2,imput:[0,6,10,18,20],imputation_method:[10,19],impute_nam:[8,10],inbuild:3,includ:[10,11,14,17,19,20],incorrect:3,independ:18,index:[0,2,4,10,18,20],index_col:10,indic:[3,10,12,17,18],individu:2,infect:2,infer:[1,3,10],infer_class_labels_on_output:10,infer_dtyp:10,infin:14,influenza:4,inform:[4,8,17,18],inherit:10,init:10,initi:[10,14],inner:18,inner_kei:[],inplac:[10,18],input:[8,10,17,18],insensit:10,instanc:[1,3,4,10,11,12,18,20],instead:[18,19],int32:3,int64:[1,3],integ:[10,18],inter:[18,19],interact:[10,19],interest:4,interior:17,intern:10,iri:[2,3,10,20],iris_species_pca:20,isin:[1,2,4,10,19],issu:[1,3,4],item:10,iter:[4,10,18],iterativefeatureremov:[4,9,16],its:[4,10,11],itself:[5,10],job:[4,10],job_handl:10,join:[2,3,10,19,20],jump:18,jump_fail:18,jump_ratio:18,jumpratio:[4,18],just:[5,10,19],katrina:20,keep:18,keho:[17,20],kei:[1,10,18],kernel_arg:17,keyword:[2,10,19],kff:[9,10,16],kflifr:18,kfold:[2,5,10,13,18],kfold_loso_ifr:[9,16],kfold_shuffle_ifr:[9,16],kfsifr:18,kirbi:17,knn:[8,10],knnimput:[8,10],know:[2,4],knowledg:19,known:17,kvi:[],kwarg:[10,18],l1svm:17,label:[1,2,8,10,14,17,18,20],lambda:12,larg:5,larger:10,largest:[2,12,18],last:[5,10],later:[2,14],lazi:19,ldot:10,learn:[2,10,12,14,20],learnt:[4,5],least:[10,18],leav:18,left:2,len:17,length:[3,10,11,17,18],let:[1,2,3,4,5,8,12,18],level:[10,17],librari:[10,11],like:[8,10,11,12,18,19],limit:[18,20],limma:[4,8,14],limma_chichau:14,limma_obj:4,line:10,line_width:10,linear:[6,7,9,14,17],linearsvc:[2,5,18],link:[10,14],linux:10,list:[10,13,17,18],list_of_arg:10,list_of_argu:10,liver:10,load:[1,2,3,4,5,10,19,20],load_dataset:[1,2,4,8,10,18,19,20],load_object:[5,10],local_mod:10,localhost:19,locat:[10,20],locu:20,log:[3,8,10,14],log_norm:8,lognorm:[8,14],look:[4,8],loop:18,loso:18,lpnewton:15,lpprimaldualpi:[2,4,10,18],m_at:20,machin:[2,10,14,17,20],made:11,magma:[10,19],magnitud:[11,18],mai:[1,2,5,6,8,10,14,18,20],main:[10,20],make:[1,4,8,10,14,20],manag:10,mandatori:18,mani:18,manifold:[1,7,9,10,19,20],manual:3,margin:17,mark:10,marker:[10,19],master:14,match:4,math:11,matlab:17,matplotlib:[10,19],matrix:[2,3,8,10,11,12,14,20],max:[2,18],max_feature_threshold:18,max_features_per_iter_breach:18,max_features_per_iter_ratio:[4,18],max_it:[4,18],maxim:17,maximum:[10,18],mds:[1,7,9,19],meadian:18,mean:[10,17,18],meant:10,measur:[2,10,18,20],median:[10,18],medianfoldchangenorm:[8,14],mediat:20,member:18,merg:18,metabolit:20,metadata:[0,2,3,4,6,8,10,18,19,20],metadata_df:3,method:[1,2,3,4,5,8,10,11,13,17,18,19,20],method_exist:10,metric:[2,5,10,18],michael:17,mimic:10,min:[2,17],mind:10,minim:17,minimum:10,minmax:10,miss:[8,10],missing_valu:[8,10],mix:10,mode:[10,19],model:[2,4,5,11,12,14,17,18],model_select:[2,5,7,9,10,18],modifi:[10,14],modul:[0,5,7,9,16],modular:[4,20],module_from_path:10,module_nam:10,module_path:10,more:[3,8,10,17,18,20],most:10,mpl_toolkit:[10,19],mplot3d:[10,19],mrkr_list:[10,19],mrkr_size:10,multi:[6,19,20],multidimension:12,multipl:[10,20],multipli:11,murin:20,must:[2,8,10,11,13,18,20],n_class:17,n_compon:[1,10,11,12,19,20],n_featur:[10,11,12,17,18],n_job:2,n_neighbor:10,n_random_exp:18,n_sampl:[10,11,12,17,18],n_split:[2,5,10,18],n_splits_kfold:18,n_splits_shuffl:18,n_top_featur:18,name:[1,3,8,10,18,19],namespac:[0,7],nan:[2,10,20],ndarrai:[10,11,12,14,17,18],necessari:3,need:[1,4,5,10,18],neg:[12,14],network:20,neural:20,neuron:20,new_attribute_nam:[1,4],new_feature_attribute_nam:18,next:[1,3,4,5,8],nfold:[4,18],no_ax:10,non:[2,12,19],none:[10,11,12,13,14,17,18],norm_nam:[4,8,10],normal:[0,3,4,6,7,9,10,11,17,18,20],normalization_1:10,normalization_2:10,normalization_method:[8,10,19],normalization_n:10,normalize_1d_subspac:11,normalize_arg:10,normliz:8,note:[2,10,14,20],now:[1,2,3,4,17],num:3,num_cpus_per_work:[5,10,18],num_gpus_per_work:[4,5,10,18],num_partit:18,num_sampl:18,num_window:18,number:[1,3,4,5,10,11,12,14,18],numer:[5,10,18],numpi:[4,10,11,14,18],object:[0,1,2,3,4,5,6,10,11,13,14,15,17,18],observ:[14,18,20],obtain:[2,17,18],occur:18,odot:12,off:19,often:5,omic:18,onc:18,oncogen:20,one:[3,5,10,11,13,18,19],ones:12,onli:[1,4,10,14,17,18,19],onto:11,oper:[8,17,18],optim:[2,4,17],optimal_n_result:18,option:[3,10,12,14,18],order:[2,5,12,18,19,20],orient:12,origin:[10,14,17],orthogon:11,orthru:[1,2,3,4,5,8,19,20],orthrus_path:[2,10,19,20],orthtransform:11,other:[10,14,20],otherwis:[10,18],our:[2,4,5,8,14,19],out:[4,5,18],output:[10,17,18,19],outsid:11,over:[2,10,11,18,19],overfit:18,overlap:19,overwrit:[1,4,10],overwritten:10,packag:[2,8,10,14,18,19,20],page:0,pair:18,pairwis:10,palett:[10,19],panda:[1,3,4,10,18,20],parallel:[10,18],param:[10,18],param_list:10,paramet:[2,4,8,10,11,12,14,17,18,19],parenthes:10,part:20,partatit:18,particip:20,particular:[1,2,10,18],partit:[2,5,7,9,10,18],partition:[2,5,10,13,18],partition_method:18,partitioner_nam:[2,10],pass:[2,10,11,17,19,20],path:[1,2,3,4,5,8,10,18,19,20],path_to_data:3,path_to_metadata:3,path_to_vardata:3,pathwai:18,pathway_select:[9,16],pathwayscor:18,patition:18,patsi:14,pca:[10,18,20],pca_snr_select:[9,16],pcasnr:18,peak:20,penal:17,per:[10,18],perform:[2,4,8,10,17,18],perman:1,perp:11,pertain:10,perviou:10,petal:[3,10],petal_length:[2,20],petal_width:[2,20],phenotyp:14,pickl:[2,4,5,10],pipelin:[7,9,14],pipeline_nam:10,place:10,plate:[10,20],pleas:[4,5,8],plot:[6,10,20],plot_basic_diagnostic_stat:18,plot_scor:10,plot_snr:18,plotli:[6,10,20],png:10,point:[10,11,12,17,18,19,20],pop:10,pop_first_el:10,popular:10,port:[10,19],pos:17,posit:[12,18],possibl:10,post:[10,11],pre:[10,20],pred_attr:10,pred_labels_:17,pred_typ:10,predict:[10,11,17,18],predict_arg:10,predict_handl:10,prediction_result:10,prefix:[],prepend:10,preprocess:[4,7,8,9,10],prescrib:10,present:10,presev:10,press:19,prev_embed:[11,12],prevent:18,previou:[5,10,11],previous:3,primal:17,primari:10,primarili:20,princip:20,print:[1,2,3,8,10,17,18,20],print_descript:10,prob:17,problem:[2,4,6,17,20],process:[5,10,18,20],process_nam:10,process_ref:10,produc:[11,12,18],product:[12,19],program:[15,17],progress:[10,18],proj_dir:10,project:[10,11,20],promot:20,proper:3,properti:10,proport:18,provid:[2,4,5,8,10,18,19],prune:18,pure:14,purpos:[4,10],pydat:[3,10],pydataset:[3,10],pyplot:[10,19],python:[10,17],q_re:10,q_tol:10,queri:[1,2,5,10],question:10,quick:10,quit:[5,19],r_i:18,racecar:20,rai:[5,10,18],rais:10,ran:18,randint:10,random:[2,10,18,20],random_forest:2,random_st:[2,5,10,18],random_state_kfold:18,random_state_shuffl:18,randomforestclassifi:2,rang:10,rank:[2,5,10,18],rank_features_by_attribut:[5,18],rank_features_by_mean_attribute_valu:18,rank_features_within_attribute_class:18,ranked_feature_id:18,ranking_method:5,ranking_method_arg:[5,18],ranking_method_handl:18,ranks_:18,rate:[2,10,18],rather:[10,19,20],ratio:18,reach:18,read:3,read_csv:3,readabl:10,readi:[4,5],realli:4,reason:18,recal:1,record:2,rectangular:20,reduc:[4,5,11,18],reduce_feature_set_s:[5,18],reduced_feature_id:18,reduced_feature_result:[5,18],reduct:18,refer:10,refernc:1,reflect:2,reformat:[3,10],reformat_metadata:[3,10],rel:18,relat:[10,11,20],relev:10,rememb:1,remot:10,remote_funct:18,remotefunct:18,remov:[4,10,14,18],removebatcheffect:14,repetit:[4,18],replac:[3,10,18],repositori:20,repres:[2,8,11,12,19,20],reproduc:[2,18],requir:[1,3,10,18],resid:2,resist:10,resolv:[3,4,11],resourc:[10,18],resp:10,respect:[2,3,10,12,17],respons:[1,4,10,11],response_1:10,response_2:10,response_new:10,respres:[11,20],restrict:[1,4,5,8,10,18,19],restricted_features_id:5,result:[2,4,5,10,14,18],result_label:10,results_:[10,18],results_list:10,retain_f_id:10,retent:20,right:[4,17],rna:20,roughli:20,row:[2,10,11,20],rst:1,run:[2,4,10,18,19,20],run_:10,run_serv:[10,19],run_status_:10,s_rnk_func:10,s_weight:10,s_weights_handl:[2,10],sab:[9,16],sai:[8,10],same:[1,3,10,18],sampl:[1,2,4,5,10,11,12,13,18,19,20],sample_id:[1,2,4,5,10,18,19],sample_ids_train:18,sample_weight_attr:10,save:[1,2,3,4,5,6,10,20],save_nam:[10,19,20],save_object:[2,4,10],save_path:[3,10],save_result:10,scalar:17,scale:[11,12,19,20],scatter:[10,19],scatter_plotli:10,scatter_pyplot:10,scheme:5,scienc:20,scikit:10,score:[2,5,10,18,20],score_arg:10,score_typ:18,scorer:[2,5,10,18],scorer_arg:[2,10],scorer_nam:[2,10],scratch:[7,9],script:[10,20],seaborn:[10,19],search:[0,5,18],second:[3,4,10,18],secondari:10,see:[2,3,5,6,8,10,13,14,18,19],seed:18,select:[2,5,10,18,20],select_features_for_data_partit:18,selection_iter:[4,18],selector:[4,10],selector_nam:[4,10,18],self:10,sens:17,sepal:[3,10],sepal_length:[2,20],sepal_width:[2,20],separ:17,seq:20,sequenc:10,sequenti:12,seri:[3,10,18],serial:10,serv:19,server:[10,19],set:[2,4,10,14,18,19],setosa:[2,10,20],setosa_versicolor:2,setup:[2,10],shape:[1,10,11,12,14,17,18],share:10,shed:[1,2,3,4,20],shedder:[1,3,4],shedders_queri:[1,4],shift:[11,17],should:[3,10,12,18],show:[4,10],shown:[3,4],shuffl:[5,10,18],shufflesplit:2,shutdown:10,sign:17,signfi:10,similar:8,similarli:19,simpl:2,sinc:8,singl:[10,18],situat:1,size:[4,10,18],sklearn:[1,2,5,8,10,11,12,13,17,18,20],slack:17,slice:10,slice_dataset:10,slide:18,sliding_window_classification_on_ranked_featur:18,sliding_window_result:18,slightli:2,slowkow:14,small:18,small_weight_at_jump:18,smallest:18,snippet:4,snr:18,sofya:17,solut:[6,20],solv:[15,17],solver:[2,4,7,9,10,17,18],some:[6,19,20],sometim:3,sort:18,sort_freq_class:18,sorted_abs_weight:18,space:[10,11,12],span:11,spars:[2,4,5,7,9,10],sparsiti:17,speci:[2,3,10,20],species_60_train_40_test_random_forest_f_rank_0:2,species_60_train_40_test_random_forest_f_weights_0:2,species_80train_20test_svm_f_rank_0:2,species_80train_20test_svm_f_weights_0:2,specif:[4,10,18,20],specifi:[2,10,17,18,19],split:[5,6,10,13,18],split_arg:10,split_attr:10,split_group:10,split_handl:10,squar:12,ssvm:[6,10,17],ssvmclassifi:[2,4,10,17,18],stage:[4,14],standard:[10,11],standardscal:10,standardscalar:10,start:[0,2,5,18,19],state:18,statist:[10,20],statment:18,std:10,step:[4,5,15,17,18],stop:18,stop_befor:10,store:[1,10,11,12,17,18],store_upd:18,str:[3,10,18],stratified_k:18,stratifiedkfold:2,stratifiedshufflesplit:2,stride:18,string:[3,10,14,18],strip:10,structur:[6,10],studi:[4,20],studyid:4,sub:[2,10],subject:18,subjectid:4,submodul:[7,9,16],subpackag:7,subspac:11,subspace_dimens:11,subtitl:[10,19,20],subtract:11,subunit:20,success:[2,10],successfulli:18,suffici:19,suffix:[],sum:[3,17],summar:20,summari:[2,10],supervis:[8,10],supervised_attr:[4,8,10],support:[2,3,17,20],suppos:8,sure:4,svm:[4,5,6,9,10,11,16,18,20],symmetr:[10,12],take:[8,10,11,18,20],talk:5,task:[10,20],team:20,templat:10,tensor:12,test:[6,10,13,17,18],test_data:[2,10,19,20],test_idx:13,test_sample_id:18,test_siz:2,text:[10,12,17],than:[5,10,18,19,20],thei:20,them:[3,5,8,18,20],thi:[1,2,3,4,5,8,10,11,12,13,14,15,17,18,19,20],thing:3,third:4,those:10,thought:[10,18],thread:2,three:[4,5,20],threshold:18,through:[4,10],thrx:20,thymoma:20,tild:12,time:[1,11,12,18,19,20],time_id:[1,3,4],time_point_hr:[2,19],tissu:10,titl:[10,20],tol:[15,17],tol_vs_res_liver_ifr:10,toler:[10,17],tomojit:17,too:18,tool:14,top:[5,12,18],total:18,track:18,train:[5,6,10,13,17,18],train_idx:13,train_prop_shuffl:18,train_scor:18,train_siz:2,train_test_part:2,train_test_split:18,training_id:18,training_transform:10,trainpartition:13,traintestpartition:13,transform:[10,11,14,18],transform_arg:10,transform_handl:10,transformer_arg:11,transpar:19,tree:2,trpnx:20,true_feature_count:18,truth:[10,18],tune:17,tupl:10,tutori:[2,4,5,19,20],tvt_label:10,two:[1,4,10,18,19],type:[1,2,10,11,12,14,17,18,19,20],typeerror:3,umap:[10,20],underscor:10,understand:[2,4,14,18],unfortun:3,uniform:20,union:10,uniqu:[3,10,18],unit:[10,11],unsupervis:8,until:18,upcom:5,updat:[3,8,10,19],usag:6,use:[1,2,4,5,8,10,12,17,18,19],use_cuda:[2,4,10,12,17,18],use_dash:[10,19],use_dissimilar:10,used:[1,4,5,8,10,12,14,18,19],useful:[10,11,12,18,19],user:[10,17,18,19,20],uses:[10,19],using:[1,2,5,8,10,17,18,19],util:[3,14,18,20],utitl:19,val:10,valid:[5,6,10,18],validation_scor:18,validation_score_cutoff:18,validation_score_iteration_idx:18,valu:[1,3,4,5,8,10,14,17,18,20],value_count:[1,3],vardata:[3,10,20],vardata_df:3,vari:10,variabl:[3,17,18,19],variat:10,varibl:4,varieti:[4,8],variou:[1,8,13,18],vector:[2,11,12,14,17,18,20],verbos:[4,10,15,17,18],verbose_frequ:[10,18],verbose_limit:18,versicolor:2,version:[10,14],via:[10,11,12,17,18,19,20],view:[2,10,19],violat:17,viral:20,virginica:[2,20],viru:[2,19,20],visit:20,visual:[0,1,6,10,11,20],viz_nam:[10,19],want:[1,4,8,10,12,18,20],warn:19,weak:14,weight:[2,4,10,17,18],weight_ratio:18,weights_:[2,4,10,17,18],weights_handl:[4,18],well:10,were:[10,18],wether:[],what:[0,2,6,14,19],when:[10,18,19],where:[1,2,3,10,11,12,17,18,19],whether:[10,12,17,18],which:[1,2,4,5,8,10,11,13,14,17,18,19,20],white:10,whiten:20,whose:[10,11,12],why:18,width:[3,10],window:18,window_s:18,wise:[3,8,12,14],wish:20,within:[10,18],without:[10,19],word:10,work:[4,8],worker:[10,18],workspac:20,would:20,wrap:[10,20],wrapper:14,write:8,wsgi:19,x_0:11,x_j:17,xi_j:17,xlabel:10,y_j:17,yet:[1,5],ylabel:10,ylim:10,you:[1,2,6,10,12,18,20],your:[10,20],ytick:10,zero:[8,14,17,18],zlabel:10},titles:["Welcome to orthrus\u2019s documentation!","Adding new attributes to metadata","Classification","Creating a DataSet","Feature Selection using IFR","Feature Set Size Reduction","Getting Started","orthrus","Data Normalization and Imputation","orthrus namespace","orthrus.core namespace","orthrus.decomposition namespace","orthrus.manifold namespace","orthrus.model_selection namespace","orthrus.preprocessing namespace","orthrus.solvers namespace","orthrus.sparse namespace","orthrus.sparse.classifiers namespace","orthrus.sparse.feature_selection namespace","Visualizing Data","What is the DataSet object?"],titleterms:{"class":2,"new":1,Adding:1,Using:19,also:20,attribut:1,basic:[19,20],batch_correct:14,classif:2,classifi:17,core:10,creat:3,cross:2,custom:19,dash:19,data:[8,19],dataset:[3,10,20],decomposit:11,document:0,encount:3,featur:[4,5],feature_select:18,fold:2,gener:11,get:6,gpu:2,gse7302:2,helper:[10,18],ifr:4,imput:8,indic:0,iterativefeatureremov:18,kff:18,kfold_loso_ifr:18,kfold_shuffle_ifr:18,linear:[2,15],mai:3,manifold:12,mds:12,metadata:1,model_select:13,modul:[10,11,12,13,14,15,17,18],multi:2,namespac:[9,10,11,12,13,14,15,16,17,18],normal:[8,14],object:20,orthru:[0,7,9,10,11,12,13,14,15,16,17,18],partit:13,pathway_select:18,pca_snr_select:18,pipelin:10,plot:19,plotli:19,preprocess:14,problem:3,reduct:5,sab:18,save:19,scratch:10,see:20,select:4,set:5,size:5,solut:3,solver:15,some:3,spars:[16,17,18],split:2,ssvm:2,start:6,structur:20,submodul:[10,11,12,13,14,15,17,18],subpackag:[9,16],svm:[2,17],tabl:0,test:2,train:2,usag:[19,20],using:4,valid:2,visual:19,welcom:0,what:20,you:3}})