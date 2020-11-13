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
    // cleanliness: Number,
    // communication: Number,
    // checkIn: Number,
    // accuracy: Number,
    // location: Number,
    // value: Number
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

function removeAll(callback) {
  ReviewsModel.remove({}, callback);
}

function find(id, callback) {
  ReviewsModel.find({listing_id: id}, callback);
}

function create(listing, callback) {
  ReviewsModel.create(listing, callback);
}

//able to add new review but not update ratings yet
function addReview(review, callback) {
  console.log('listing', review.listing_id);
  ReviewsModel.update({listing_id: review.listing_id}, {$push: {reviews: review.review}}, callback);
}


exports.removeAll = removeAll;
exports.create = create;
exports.find = find;
exports.addReview = addReview;