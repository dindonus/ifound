import React, { Component } from 'react';
import Model from './Model';
import ModelsGroup from './ModelsGroup';
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
    const image =
      'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/select/iphone7-select-2016?wid=222&hei=305&fmt=png-alpha&qlt=95&.v=1471892660314';
    return (
      <div className="Series">
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-8', 'iphone-8-plus'])}
          image={image}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-7', 'iphone-7-plus'])}
          image={image}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-6s', 'iphone-6s-plus'])}
          image={image}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-6', 'iphone-6-plus'])}
          image={image}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-se'])}
          image={image}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs([
            'iphone-5s',
            'iphone-5',
            'iphone-5c'
          ])}
          image={image}
        />
      </div>
    );
  }

  getModelsFromSlugs(slugs) {
    return slugs.map(slug =>
      this.state.models.find(model => model.slug === slug)
    );
  }
}

export default Series;
