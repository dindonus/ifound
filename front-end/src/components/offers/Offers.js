import React from 'react';
import Offer from './Offer';
import OfferLoading from './OfferLoading';

const loadings = [...Array(5)].map((_, index) => <OfferLoading key={index} />);

const Offers = ({ loading, offers }) => (
  <div className="Offers">
    {loading
      ? loadings
      : offers.map((offer, index) => <Offer key={index} data={offer} />)}
  </div>
);

export default Offers;
