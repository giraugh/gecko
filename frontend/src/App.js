import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';

import {
  Onboarding,
} from 'pages';

import theme from 'theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={theme => ({
          html: {
            scrollBehaviour: 'smooth',
          },
          body: {
            margin: 0,
            fontFamily: 'sans-serif',
          },
        })} />

        <Switch>
          <Route path="/" component={Onboarding} exact />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
