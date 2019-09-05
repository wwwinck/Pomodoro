import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import App from './components/App';

ReactDOM.render(React.createElement(App, { defaultBreakLength: '5', defaultSessionLength: '25' }), document.getElementById('main'));