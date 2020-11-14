const app = require('./app.js')

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on port ${port}`);
  }

})