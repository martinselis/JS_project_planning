const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {
  const router = express.Router();

  router.get('/', (req, res) => {
    collection
<<<<<<< HEAD
    .find()
    .toArray()
    .then((docs) =>res.json(docs))
    .catch((err) =>{
      console.error(err)
    res.status(500);
    res.json({status:500, error: console.error()});
    });
=======
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
>>>>>>> f398a7ee6046e1ad99b3d14ebfd915c4d36b3e4f
  });

  router.post('/', (req, res) =>{
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status:500, error: console.error()})
    })
  })
  return router
<<<<<<< HEAD
}
=======
};
>>>>>>> f398a7ee6046e1ad99b3d14ebfd915c4d36b3e4f

module.exports = createRouter
