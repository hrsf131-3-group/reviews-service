// const express = require('express');
const app = require('./app.js')
// const bodyParser = require('body-parser');
// const path = require('path');
// const db = require('../db/connection.js');
// const app = express();
const port = 3000;

// const pathName = path.join(__dirname, '../client/dist')
// app.use(express.static(pathName))
// app.use(bodyParser.json());

// app.get('/api/homes/:id/reviews', (req, res) => {

//   db.find(req.params.id, (err, data) => {
//     if (err) {
//       console.log(err)
//       res.sendStatus(404);
//     } else {
//       res.send(data)
//     }
//   })
// })

// app.post('/api/homes/:id/reviews', (req, res) => {
//   console.log('hello')
//   console.log(req.body)
//   db.addReview(req.body, (err) => {
//     if (err) {
//       console.log(err)
//       res.sendStatus(404);
//     } else {
//       console.log('success')
//       res.sendStatus(200);
//     }
//   })
// })

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on port ${port}`);
  }

})