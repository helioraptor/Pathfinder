# ProjectPathfinder

[#CamHack17](http://casim.org.uk/hackathon/) [#ProjectPathfinder](http://casim.org.uk/hackathon/) Lightweight, in-browser app for discovering publicly available datasets in relation to biological pathways. Angular2.
Angular2 (TypeScript)

list of datasets retrived by search API: 
https://wwwdev.ebi.ac.uk/Tools/omicsdi/ws/dataset/search?query=${searchString}&start=0&size=100&faceCount=20;
*TODO: retrieve more then one page of data*

molecular IDs can be found in Dataset crossReferences field:
http://www.omicsdi.org/ws/dataset/pride/PXD006482.json
http://www.omicsdi.org/ws/dataset/metabolomics_workbench/ST000465.json
etc..

example molecule ID: P07355
*TODO: regex validation for IDs*

list of IDs in CSV format submitted ot Reactome API (POST) 
https://reactome.org/AnalysisService/identifiers/?interactors=false&pageSize=20&page=1&sortBy=ENTITIES_PVALUE&order=ASC&resource=TOTAL;
*TODO: retrieve more then one page of data*

Demo App:
https://pathfinder-72b30.firebaseapp.com/

Slide for F1000 hackaton chanel [CamHack17.pdf](CamHack17.pdf)
