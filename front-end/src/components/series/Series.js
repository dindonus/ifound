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
        <div>
          {this.showModelBySlug('iphone-8')}
          <hr />
          {this.showModelBySlug('iphone-8-plus')}
        </div>
        <div>
          {this.showModelBySlug('iphone-7')}
          <hr />
          {this.showModelBySlug('iphone-7-plus')}
        </div>
        <div>
          {this.showModelBySlug('iphone-6s')}
          <hr />
          {this.showModelBySlug('iphone-6s-plus')}
          <hr />
          {this.showModelBySlug('iphone-6')}
          <hr />
          {this.showModelBySlug('iphone-6-plus')}
        </div>
        <div>{this.showModelBySlug('iphone-se')}</div>
        <div>
          {this.showModelBySlug('iphone-5s')}
          <hr />
          {this.showModelBySlug('iphone-5')}
          <hr />
          {this.showModelBySlug('iphone-5c')}
        </div>
      </div>
    );
  }

  showModelBySlug(slug) {
    const model = this.state.models.find(model => model.slug === slug);
    return model ? <Model model={model} /> : <div>...</div>;
  }
}

export default Series;
