import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for Material UI - untill new verison of react.
injectTapEventPlugin();

import App from './ReactApp.js';
ReactDOM.render(<App />, document.getElementById('ReactApp'));