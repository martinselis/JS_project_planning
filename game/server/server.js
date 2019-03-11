const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('scoreboard');
    const entries = db.collection('entry')
    app.use('/api/scoreboard', createRouter(entries))
  })
  .catch((err) => {
    console.error('Failed to connect to DB');
    console.error(err);
  });

// app.get('/', (req, res) => {
//   res.sendFile('index.html')
// })


app.listen(3000, ()=> {
  console.log('Listening on port 3000')
});
