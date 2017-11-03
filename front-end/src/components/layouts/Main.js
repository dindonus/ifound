import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isSmall: false };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (!this.state.isSmall && top > 30) {
      this.setState({ isSmall: true });
    }
    if (this.state.isSmall && top < 25) {
      this.setState({ isSmall: false });
    }
  }

  render() {
    return (
      <div className="Main-container">
        <div className="Main-top">
          <div className={`Main-navbar ${this.state.isSmall ? 'small' : ''}`}>
            <Link to="/">
              <i className="fa fa-apple" aria-hidden="true" /> iFound
            </Link>
          </div>
          <div className="Main-content">{this.props.children}</div>
        </div>
        <div className="Main-footer">FOOTER</div>
      </div>
    );
  }
}

export default Main;
