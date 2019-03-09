const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser')

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(3000, ()=> {
  console.log('Listening on port 3000')
});
