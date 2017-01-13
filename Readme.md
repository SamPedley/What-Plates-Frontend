WhatPlates.com
==============

[![Build Status](https://travis-ci.org/SamPedley/What-Plates-Frontend.svg?branch=master)](https://travis-ci.org/SamPedley/What-Plates-Frontend)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/SamPedley/What-Plates-Frontend/badges/gpa.svg)](https://codeclimate.com/github/SamPedley/What-Plates-Frontend)

---
### Using:

* [Standard.js](http://standardjs.com/)
* [Jest](https://facebook.github.io/jest/) & [Enzyme](http://airbnb.io/enzyme/)
* [React](https://facebook.github.io/react/) & [React Router](https://github.com/ReactTraining/react-router)
* [Redux](http://redux.js.org/)
* [Material-ui](http://www.material-ui.com/)
* [PostCSS](http://postcss.org/)
* [Webpack 2](https://webpack.js.org/)
---

``` JavaScript
{
  user: {
    name: STRING,
    email: STRING
  },

  userSettings: {
    usingLbs: BOOLEAN,
    showConversion: BOOLEAN,
    roundUp: BOOLEAN,
  },

  sets: [
    { total: FLOAT }
  ],

  plates: [
    { isLbs: BOOLEAN, weight: BOOLEAN }
  ],

  bars: [
    { name: STRING, inLbs: FLOAT, inKg: FLOAT }
  ],

  ui: {
    menuOpen: BOOLEAN,
    helpModalOpen: BOOLEAN,
  }

}
```
