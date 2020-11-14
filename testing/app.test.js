const app = require('../server/app.js');
const request = require('supertest');
const mongoose = require('mongoose');


beforeAll(() => {
    mongoose.connect('mongodb://localhost/listingReviews');
});

afterAll((done) => {
    mongoose.disconnect(done);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/api/homes/101/reviews")
      .then(response => {
        console.log('response', response.body)
        expect(response.statusCode).toBe(200);
      });
  });
});