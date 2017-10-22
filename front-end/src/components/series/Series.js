import React, { Component } from 'react';
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
    const images = [
      {
        slug: 'iphone-8',
        url:
          'https://images.apple.com/v/iphone-8/a/images/specs/finish_iphone8_medium.jpg'
      },
      {
        slug: 'iphone-7',
        url:
          'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/select/iphone7-select-2016?wid=222&hei=305&fmt=png-alpha&qlt=95&.v=1471892660314'
      },
      {
        slug: 'iphone-6',
        url:
          'https://images.apple.com/v/iphone-6s/d/images/specs/iphone6_finish_medium.jpg'
      },
      {
        slug: 'iphone-se',
        url:
          'https://images.apple.com/v/iphone-se/d/images/specs/iphone_se_silver_medium.jpg'
      },
      {
        slug: 'iphone-5',
        url:
          'http://a1wcom.com/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_5_black.jpg'
      }
    ];

    return (
      <div className="Series">
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-8', 'iphone-8-plus'])}
          image={images.find(image => image.slug === 'iphone-8').url}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-7', 'iphone-7-plus'])}
          image={images.find(image => image.slug === 'iphone-7').url}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-6s', 'iphone-6s-plus'])}
          image={images.find(image => image.slug === 'iphone-6').url}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-6', 'iphone-6-plus'])}
          image={images.find(image => image.slug === 'iphone-6').url}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs(['iphone-se'])}
          image={images.find(image => image.slug === 'iphone-se').url}
        />
        <ModelsGroup
          models={this.getModelsFromSlugs([
            'iphone-5s',
            'iphone-5',
            'iphone-5c'
          ])}
          image={images.find(image => image.slug === 'iphone-5').url}
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
