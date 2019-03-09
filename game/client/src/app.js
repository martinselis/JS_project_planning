const MasterView = require('./views/master_view.js')
const DataLoad = require('./model/data_load.js')

document.addEventListener('DOMContentLoaded', () => {
  const masterDiv = document.querySelector('#master_grid');
  const masterView = new MasterView(masterDiv);
  masterView.bindEvents();

  const dataLoad = new DataLoad();
  dataLoad.publishData();

})
