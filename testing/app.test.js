const app = require('../server/app.js');
const request = require('supertest');
const mongoose = require('mongoose');



describe("Test the root path", () => {

  beforeAll(() => {
      mongoose.connect('mongodb://localhost/listingReviews');
  });

  afterAll((done) => {
      mongoose.disconnect(done);
  });

  test("It should response the GET method", () => {
    return request(app)
      .get("/api/homes/100/reviews")
      .then(response => {
        console.log('response', response.body)
        expect(response.statusCode).toBe(200);
        expect(response.body[0].listing_id).toBe(100);
        expect(response.body.length).toBe(1);
      });
  });
});