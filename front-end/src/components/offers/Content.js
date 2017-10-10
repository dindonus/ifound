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
      filters: { price: 2000, capacity: 16 }
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.model;
    findBySlug(slug).then(model => {
      this.setState((previousState, props) => {
        const state = { ...previousState };
        state.model = model;
        return state;
      });
      fetchByModel(slug).then(offers =>
        this.setState((previousState, props) => {
          const state = { ...previousState };
          state.offers = offers;
          return state;
        })
      );
    });
  }

  onFiltersChange(name, value) {
    console.log(`filter ${name} changed to ${value}`);
    this.setState((previousState, props) => {
      const state = { ...previousState };
      state.filters[name] = value;
      return state;
    });
  }

  render() {
    return (
      <div>
        <Filters
          onChange={this.onFiltersChange}
          activeFilters={this.state.filters}
        />
        <p className="">{this.getFilteredOffers().length}</p>
        <div className="Offers">
          {this.getFilteredOffers().map((offer, index) => (
            <Offer key={index} data={offer} />
          ))}
        </div>
      </div>
    );
  }

  getFilteredOffers() {
    return this.state.offers
      .filter(offer => offer.price < this.state.filters.price)
      .filter(offer => offer.capacity >= this.state.filters.capacity);
  }
}

export default withRouter(Content);
