import React from 'react';
import Header from 'components/Header/Header';
import Results from 'components/Results/Results';
import Aside from 'components/Aside/Aside';
import Footer from 'components/Footer/Footer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <section className="hundred">
        <Header />
        <Results />
        <Aside />
        <Footer />
      </section>
      </MuiThemeProvider>
    );
  }
}
