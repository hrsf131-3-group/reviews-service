const mongoose = require('mongoose');

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

function find(id, callback) {
  ReviewsModel.find({listing_id: id}, callback);
}

function insertOne(listing, callback) {
  ReviewsModel.create(listing, callback);
}


exports.insertOne = insertOne;
exports.find = find;