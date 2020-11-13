const mongoose = require('mongoose');
const faker = require('faker');
const Reviews = require('./db/connection.js');

mongoose.connect('mongodb://localhost/listingReviews');

/*** PLAN FOR REVIEWS AND RATINGS SEPARATED SORTED BY LISTING_ID ***/

const generateListings = (numListings) => {
  for(var i = 1; i <= numListings; i++) {
    const newListing = {};
    newListing.listing_id = i;
    var numReviews = Math.floor(Math.random() * 10);
    if (numReviews === 0) {
      Reviews.insertOne(newListing, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Added');
        }
      })
      continue;
    }

    newListing.reviews = [];

    generateReviews(newListing, numReviews);
    generateRatings(newListing, numReviews);

    Reviews.insertOne(newListing, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Added');
      }
    })
  }
}

const generateReviews = (listing, numReviews) => {
  for (var i = 0; i < numReviews; i++) {
    listing.reviews.push({
      image: faker.image.imageUrl(),
      name: faker.name.firstName(),
      review_month: faker.date.month(),
      review_year: Math.floor(Math.random() * (2020 - 2008) + 2008),
      review_body: faker.lorem.paragraph(),
    })
  }
}

const generateRatings = (listing, numReviews) => {
  var cleanliness = 0;
  var communication = 0;
  var checkIn = 0;
  var accuracy = 0;
  var location = 0;
  var value = 0;
  var average = 0;

  for (var i = 0; i < numReviews; i++) {
    var cleanTemp = Math.floor(Math.random() * (5 - 3) + 3);
    var commTemp = Math.floor(Math.random() * (5 - 3) + 3);
    var checkTemp = Math.floor(Math.random() * (5 - 3) + 3);
    var accTemp = Math.floor(Math.random() * (5 - 3) + 3);
    var locTemp = Math.floor(Math.random() * (5 - 3) + 3);
    var valTemp = Math.floor(Math.random() * (5 - 3) + 3);

    cleanliness += cleanTemp;
    communication += commTemp;
    checkIn += checkTemp;
    accuracy += accTemp;
    location += locTemp;
    value += valTemp;

    average += Math.round(((cleanTemp + commTemp + checkTemp + accTemp + locTemp + valTemp) / 6) *10) / 10;
  }
  listing.ratings = {
    cleanliness: Math.round((cleanliness / numReviews) * 10) / 10,
    communication: Math.round((communication / numReviews) * 10) / 10,
    checkIn: Math.round((checkIn / numReviews) * 10) / 10,
    accuracy: Math.round((accuracy / numReviews) * 10) / 10,
    location: Math.round((location / numReviews) * 10) / 10,
    value: Math.round((value / numReviews) * 10) / 10,
    average: Math.round((average / numReviews) * 10) / 10,
  }
}

generateListings(100);