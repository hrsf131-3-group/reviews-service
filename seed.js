const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/listingReviews');

const listingSchema = mongoose.Schema({
  listing_id: Number,
  reviews: [{
    image: String,
    name: String,
    review_year: Number,
    review_month: String,
    review_body: String
  }],
  ratings: {
    cleanliness: Number,
    communication: Number,
    checkIn: Number,
    accuracy: Number,
    location: Number,
    value: Number,
    average: Number
  }
});

var ReviewsModel = mongoose.model('Reviews', listingSchema);

/*** PLAN FOR REVIEWS AND RATINGS SEPARATED SORTED BY LISTING_ID ***/

for(var i = 0; i < 3; i++) {
  const newListing = new ReviewsModel;
  newListing.listing_id = i + 1;
  var numReviews = Math.floor(Math.random() * 10);
  var cleanliness = 0;
  var communication = 0;
  var checkIn = 0;
  var accuracy = 0;
  var location = 0;
  var value = 0;
  var average = 0;
  for (var j = 0; j < numReviews; j++) {
    var temp1 = Math.floor(Math.random() * (5 - 3) + 3);
    var temp2 = Math.floor(Math.random() * (5 - 3) + 3);
    var temp3 = Math.floor(Math.random() * (5 - 3) + 3);
    var temp4 = Math.floor(Math.random() * (5 - 3) + 3);
    var temp5 = Math.floor(Math.random() * (5 - 3) + 3);
    var temp6 = Math.floor(Math.random() * (5 - 3) + 3);

    cleanliness += temp1;
    communication += temp2;
    checkIn += temp3;
    accuracy += temp4;
    location += temp5;
    value += temp6;

    // var avg = Math.round(((temp1 + temp2 + temp3 + temp4 + temp5 + temp6) / 6) *10) / 10
    // console.log('avg', avg)
    average += Math.round(((temp1 + temp2 + temp3 + temp4 + temp5 + temp6) / 6) *10) / 10;
    newListing.reviews.push({
      image: faker.image.imageUrl(),
      name: faker.name.firstName(),
      review_month: faker.date.month(),
      review_year: Math.floor(Math.random() * (2020 - 2008) + 2008),
      review_body: faker.lorem.paragraph(),
    })
  }
  newListing.ratings = {
    cleanliness: Math.round((cleanliness / numReviews) * 10) / 10,
    communication: Math.round((communication / numReviews) * 10) / 10,
    checkIn: Math.round((checkIn / numReviews) * 10) / 10,
    accuracy: Math.round((accuracy / numReviews) * 10) / 10,
    location: Math.round((location / numReviews) * 10) / 10,
    value: Math.round((value / numReviews) * 10) / 10,
    average: Math.round((average / numReviews) * 10) / 10,
  }
  // console.log('clean', cleanliness)
  // console.log('commm', communication)
  // console.log('check', checkIn)
  // console.log('accuracy', accuracy)
  // console.log('location', location)
  // console.log('value', value)
  // console.log('listing', newListing)
  newListing.save((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Added')
    }
  })
}


/*** PLAN FOR REVIEWS SORTED BY LISTING_ID ***/

// for (var i = 0; i < 50; i++) {
//   const newListing = new ReviewsModel;
//   newListing.listing_id = i + 1;
//   var numReviews = Math.floor(Math.random() * 10);
//   for (var j = 0; j < numReviews; j++) {
//     var cleanliness = Math.floor(Math.random() * 5);
//     var communication = Math.floor(Math.random() * 5);
//     var checkIn = Math.floor(Math.random() * 5);
//     var accuracy = Math.floor(Math.random() * 5);
//     var location = Math.floor(Math.random() * 5);
//     var value = Math.floor(Math.random() * 5);
//     var average = Math.round(((cleanliness + communication + checkIn + accuracy + location + value) / 6) * 10) / 10;

//     newListing.reviews.push({
//       image: faker.image.imageUrl(),
//       name: faker.name.firstName(),
//       review_month: faker.date.month(),
//       review_year: Math.floor(Math.random() * (2020 - 2008) + 2008),
//       review_body: faker.lorem.paragraph(),
//       cleanliness: cleanliness,
//       communication: communication,
//       checkIn: checkIn,
//       accuracy: accuracy,
//       location: location,
//       value: value,
//       average: average
//     })
//     // newListing.average = Math.round(((newListing.cleanliness + newListing.communication + newListing.checkIn + newListing.accuracy + newListing.location + newListing.value) / 6) * 10) / 10;
//     // newListing.average = average;
//   }

//   console.log('newListing', newListing)
//   fs.readFile('./listing_data.txt', (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       fs.writeFile('./listing_data.txt', data + newListing, (err) => {
//         if (err) {
//           throw err;
//         } else {
//           console.log('success')
//         }
//       })
//     }
//   })

//   newListing.save((err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Added')
//     }
//   })
// }


/***  PLAN FOR ALL REVIEWS IN SEPARATE SPACE ***/

// for (var i = 0; i < 1; i++) {
//   var numReviews = Math.floor(Math.random() * 10);
//   console.log(faker.image.imageUrl())
//   for (var j = 0; j < numReviews; j++) {
//     console.log(i, j)
//     const newListing = new ReviewsModel({
//       listing_id: i + 1,
//       image: faker.image.imageUrl(),
//       name: faker.name.firstName(),
//       review_month: faker.date.month(),
//       review_year: Math.floor(Math.random() * (2020 - 2008) + 2008),
//       review_body: faker.lorem.paragraph(),
//       cleanliness: Math.floor(Math.random() * 5),
//       communication: Math.floor(Math.random() * 5),
//       checkIn: Math.floor(Math.random() * 5),
//       accuracy: Math.floor(Math.random() * 5),
//       location: Math.floor(Math.random() * 5),
//       value: Math.floor(Math.random() * 5)
//     })
//     newListing.average = Math.round(((newListing.cleanliness + newListing.communication + newListing.checkIn + newListing.accuracy + newListing.location + newListing.value) / 6) * 10) / 10;
//     // newListing.average = average;
//     // console.log('newListing', newListing)
//     fs.writeFile('./testing_data.txt', newListing + '\n', (err) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log('success')
//       }
//     })

//     newListing.save((err) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log('Added')
//       }
//     })
//   }
// }
// console.log(newListing)


// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// });



// var test1 = lorem.generateWords(1);
// var test2 = lorem.generateSentences(5);
// var test3 = lorem.generateParagraphs(1);

// fs.writeFile('./testing_data.txt', test3 + '/n', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('success')
//   }
// })
// console.log(test1)
// console.log(test2)
// console.log(test3)



