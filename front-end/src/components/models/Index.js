import React from 'react';
import ContentPresenter from '../layouts/ContentPresenter';
import Header from './Header';
import Content from './Content';
import { findBySlug } from '../../services/models';

class ModelsIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      model: null
    };
  }

  render() {
    const model = this.state.model;
    if (model) {
      const HeaderWithParams = () => <Header model={model} />;
      const ContentWithParams = () => <Content model={model} />;
      return (
        <div>
          <ContentPresenter
            header={HeaderWithParams}
            body={ContentWithParams}
          />
        </div>
      );
    } else {
      return <div>Loading model information...</div>;
    }
  }

  componentDidMount() {
    findBySlug(this.props.match.params.model).then(model =>
      this.setState({ model })
    );
  }
}

export default ModelsIndex;
