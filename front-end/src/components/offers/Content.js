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
    this.state = { model: null, offers: [] };
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
  }

  render() {
    return (
      <div>
        <Filters onChange={this.onFiltersChange} />
        <div className="Offers">
          {this.state.offers.map((offer, index) => (
            <Offer key={index} data={offer} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
