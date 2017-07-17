// let's go!
import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import {BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';

import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <BrowserRouter>
      <Match exactly pattern="/" component={StorePicker} />
    </BrowserRouter>
  )
}

render(<App/>, document.querySelector('#main'));
