const PubSub = require('../helpers/pub_sub.js')

const DataLoad = function() {

  this.images = [
    {id: 1, value: 1, url:"images/1.jpeg"},
    {id: 2, value: 2, url:"images/2.jpeg"},
    {id: 3, value: 3, url:"images/3.jpg"},
    {id: 4, value: 4, url:"images/4.png"},
    {id: 5, value: 5, url:"images/5.jpg"},
    {id: 6, value: 6, url:"images/6.jpeg"},
    {id: 7, value: 7, url:"images/7.png"},
    {id: 8, value: 8, url:"images/8.jpeg"}
  ]
}

DataLoad.prototype.publishData = function () {
  this.sortData();
  PubSub.publish('DataLoad:images-ready', this.images)
};

DataLoad.prototype.sortData = function () {
  const allImages = this.images;
  const newArray = this.images.reduce((total, image) => {
    image.id = this.images.length + image.id + 1;
    total.push(image)
    return total;
  }, [])
  allImages.push(newArray);
  this.images = allImages.flat();
};

module.exports = DataLoad;
