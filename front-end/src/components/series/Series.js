import React, { Component } from 'react';
import Model from './Model';
import { fetchAll } from '../../services/models';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = { models: [] };
  }

  componentDidMount() {
    fetchAll().then(models => this.setState({ models }));
  }

  render() {
    return (
      <div className="Series">
        {this.showModelBySlug('iphone-8')}
        {this.showModelBySlug('iphone-8-plus')}
        <hr />
        {this.showModelBySlug('iphone-7')}
        {this.showModelBySlug('iphone-7-plus')}
        <hr />
        {this.showModelBySlug('iphone-6s')}
        {this.showModelBySlug('iphone-6s-plus')}
        {this.showModelBySlug('iphone-6')}
        {this.showModelBySlug('iphone-6-plus')}
        <hr />
        {this.showModelBySlug('iphone-se')}
        <hr />
        {this.showModelBySlug('iphone-5s')}
        {this.showModelBySlug('iphone-5')}
        {this.showModelBySlug('iphone-5c')}
      </div>
    );
  }

  showModelBySlug(slug) {
    const model = this.state.models.find(model => model.slug === slug);
    return model ? <Model model={model} /> : <div>...</div>;
  }
}

export default Series;
