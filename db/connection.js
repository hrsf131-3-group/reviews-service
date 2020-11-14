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
  // console.log('listing', review.listing_id);
  ReviewsModel.updateOne({listing_id: review.listing_id}, {$push: {reviews: review.review}}, callback);
}

function updateRating(id, callback) {
  console.log('iddddd', id)
  ReviewsModel.aggregate(
    [
      {
        $group:
        {
          listing_id: id,
          ratings: {
            cleanliness: { $avg: {
              reviews: cleanliness
            }}
          }
        }
      }
    ]
  )
  callback;
}



// ReviewsModel.find({listing_id: review.listing_id}, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('data here', data[0].reviews);
//     console.log(data[0])
//     var cleanliness = 0;
//     var communication = 0;
//     var checkIn = 0;
//     var accuracy = 0;
//     var location = 0;
//     var value = 0;
//     var average = 0;
//     for (var i = 0; i < data[0].reviews.length; i++) {
//       cleanliness += data[0].reviews[i].cleanliness;
//       communication += data[0].reviews[i].communication;
//       checkIn += data[0].reviews[i].checkIn;
//       accuracy += data[0].reviews[i].accuracy;
//       location += data[0].reviews[i].location;
//       value += data[0].reviews[i].value;
//       average += data[0].reviews[i].average;
//     }
//     console.log(cleanliness);
//     console.log(communication);
//     console.log(checkIn);
//     console.log(accuracy);
//     console.log(location);
//     console.log(value);
//     console.log(average);

//   }
// })

exports.removeAll = removeAll;
exports.create = create;
exports.find = find;
exports.addReview = addReview;
exports.updateRating = updateRating;