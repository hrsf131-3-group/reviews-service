const express = require('express');
const db = require('../db/connection.js');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.json());

app.get('/api/homes/:id/reviews', (req, res) => {
  db.findAll((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      res.send(data)
    }
  })
})


app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on port ${port}`);
  }

})