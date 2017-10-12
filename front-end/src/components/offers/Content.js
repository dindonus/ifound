import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Filters from './Filters';
import Offer from './Offer';
import { fetchByModel } from '../../services/offers';
import { findBySlug } from '../../services/models';

class Content extends Component {
  constructor(props) {
    super(props);
    this.onFiltersChange = this.onFiltersChange.bind(this);
    this.state = {
      model: null,
      offers: [],
      filters: { price: 2000, capacity: 16, location: '' }
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.model;
    Promise.all([findBySlug(slug), fetchByModel(slug)]).then(values => {
      const [model, offers] = values;
      this.setState((previousState, props) => {
        const state = { ...previousState };
        state.model = model;
        state.offers = offers;
        return state;
      });
    });
  }

  onFiltersChange(name, value) {
    console.log(`filter ${name} changed to ${value}`);
    this.setState((previousState, props) => {
      const state = { ...previousState };
      state.filters[name] = value;
      return state;
    });
    if (name === 'location') {
      fetchByModel(this.state.model.slug, this.state.filters).then(offers => {
        this.setState((previousState, props) => {
          const state = { ...previousState };
          state.offers = offers;
          return state;
        });
      });
    }
  }

  render() {
    const offers = this.getFilteredOffers();
    const average = this.getAveragePrice(offers);
    return (
      <div>
        <Filters
          onChange={this.onFiltersChange}
          activeFilters={this.state.filters}
        />
        <p className="">
          Résultat :
          {offers.length} offres - prix moyen : {average.toFixed(0)} €
        </p>
        <div className="Offers">
          {offers.map((offer, index) => <Offer key={index} data={offer} />)}
        </div>
      </div>
    );
  }

  getFilteredOffers() {
    return this.state.offers
      .filter(offer => offer.price < this.state.filters.price)
      .filter(offer => offer.capacity >= this.state.filters.capacity);
  }

  getAveragePrice(offers) {
    const sum = offers.reduce((acc, offer) => offer.price + acc, 0);
    return sum / (offers.length || 1);
  }
}

export default withRouter(Content);
