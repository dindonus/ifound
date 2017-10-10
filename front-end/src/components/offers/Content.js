import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Offer from './Offer';
import { fetchByModel } from '../../services/offers';
import { findBySlug } from '../../services/models';

class Content extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="Offers">
        {this.state.offers.map((offer, index) => (
          <Offer key={index} data={offer} />
        ))}
      </div>
    );
  }
}

export default withRouter(Content);
