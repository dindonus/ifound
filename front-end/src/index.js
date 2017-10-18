import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

const renderApp = app => {
  ReactDOM.render(app, document.getElementById('root'));
};

renderApp(<App />);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(<NextApp />);
  });
}
