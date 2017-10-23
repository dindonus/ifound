import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Filters from './Filters';
import Offers from './Offers';
import { fetchByModel } from '../../services/offers';
import { findBySlug } from '../../services/models';
import debounce from 'lodash/debounce';

class Content extends Component {
  constructor(props) {
    super(props);
    this.onFiltersChange = this.onFiltersChange.bind(this);
    this.refetchOffers = debounce(this.refetchOffers.bind(this), 300);
    this.state = {
      loading: true,
      model: null,
      offers: [],
      filters: { price: 2000, capacity: 32, location: '' }
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.model;
    Promise.all([findBySlug(slug), fetchByModel(slug)]).then(values => {
      const [model, offers] = values;
      this.setState((previousState, props) => {
        const state = { ...previousState };
        state.loading = false;
        state.model = model;
        state.offers = offers;
        return state;
      });
    });
  }

  onFiltersChange(name, value) {
    console.log(`filters changed ${name}=${value}`);
    this.setState((previousState, props) => {
      const state = { ...previousState };
      state.filters[name] = value;
      return state;
    });
    if (name === 'location') {
      this.refetchOffers();
    }
  }

  refetchOffers() {
    this.setState((previousState, props) => {
      const state = { ...previousState };
      state.loading = true;
      state.offers = [];
      return state;
    });
    fetchByModel(this.state.model.slug, this.state.filters).then(offers => {
      this.setState((previousState, props) => {
        const state = { ...previousState };
        state.loading = false;
        state.offers = offers;
        return state;
      });
    });
  }

  render() {
    const offers = this.getFilteredOffers();
    return (
      <div>
        <Filters
          onChange={this.onFiltersChange}
          activeFilters={this.state.filters}
        />
        <hr />
        <Offers loading={this.state.loading} offers={offers} />
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
