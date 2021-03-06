const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/connection.js');
const app = express();

const pathName = path.join(__dirname, '../client/dist')
app.use(express.static(pathName))
app.use(bodyParser.json());

app.get('/api/homes/:id/reviews', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      res.send(data)
    }
  })
})

app.post('/api/homes/:id/reviews', (req, res) => {
  db.addReview(req.body, (err) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      db.updateRating(req.body.listing_id, (err) => {
        if (err) {
          console.log(err)
          res.sendStatus(404);
        } else {
          console.log('got to update')
          res.sendStatus(200);
        }
      })
    }
  })
})

module.exports = app;