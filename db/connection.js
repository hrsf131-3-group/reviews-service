const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/listingReviews');

const listingSchema = mongoose.Schema({
  listing_id: Number,
  reviews: [{
    image: String,
    name: String,
    review_year: Number,
    review_month: String,
    review_body: String,
    cleanliness: Number,
    communication: Number,
    checkIn: Number,
    accuracy: Number,
    location: Number,
    value: Number
  }],
  ratings: {
    cleanliness: String,
    communication: String,
    checkIn: String,
    accuracy: String,
    location: String,
    value: String,
    average: String
  }
});

var ReviewsModel = mongoose.model('Reviews', listingSchema);

function removeAll(callback) {
  ReviewsModel.remove({}, callback);
}

function find(id, callback) {
  ReviewsModel.find({listing_id: id}, callback);
}

function create(listing, callback) {
  ReviewsModel.create(listing, callback);
}

function addReview(review, callback) {
  ReviewsModel.updateOne({listing_id: review.listing_id}, {$push: {reviews: review.review}}, callback);
}

function updateRating(id, callback) {
  ReviewsModel.findOne({listing_id: id}, (err, listing) => {
    if (err) {
      callback(err);
    }
    var cleanliness = 0;
    var communication = 0;
    var checkIn = 0;
    var accuracy = 0;
    var location = 0;
    var value = 0;
    var average = 0;
    for (var i = 0; i < listing.reviews.length; i++) {
      var currList = listing.reviews[i];

      cleanliness += currList.cleanliness;
      communication += currList.communication;
      checkIn += currList.checkIn;
      accuracy += currList.accuracy;
      location += currList.location;
      value += currList.value;
      average += Math.round(((currList.cleanliness + currList.communication + currList.checkIn + currList.accuracy + currList.location + currList.value) / 6) *10) / 10;
    }

    listing.ratings.cleanliness = (Math.round((cleanliness / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.communication = (Math.round((communication / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.checkIn = (Math.round((checkIn / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.accuracy = (Math.round((accuracy / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.location = (Math.round((location / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.value = (Math.round((value / listing.reviews.length) * 10) / 10).toFixed(1);
    listing.ratings.average = (Math.round((average / listing.reviews.length) * 10) / 10).toFixed(1);

    listing.save()
    .then(() => {
      console.log('Successfully updated');
      callback(null);
    })
    .catch((err) => {
      console.log('Error updating');
      callback(err);
    })
  })
}

exports.removeAll = removeAll;
exports.create = create;
exports.find = find;
exports.addReview = addReview;
exports.updateRating = updateRating;