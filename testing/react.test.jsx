import React from 'react';
import {mount, shallow} from 'enzyme';
import ListingRating from '../client/src/components/listingRating.jsx';
import Ratings from '../client/src/components/ratings.jsx';


describe('<Ratings />', () => {
  it('Checks if average ratings are rendered', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.containsAnyMatchingElements([
      <span>Cleanliness</span>,
      <span>Accuracy</span>,
      <span>Communication</span>,
      <span>Location</span>,
      <span>Check-in</span>,
      <span>Value</span>
    ])).toEqual(true);
  });
});