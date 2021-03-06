import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';

import {
  Onboarding,
  Home,
  CreateTask,
  TaskDetails,
  Whoa,
  Approve,
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
          <Route path="/whoa" component={Whoa} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/new" component={CreateTask} exact />
          <Route path="/goal/:id" component={TaskDetails} exact />
          <Route path="/goal/:id/approve" component={Approve} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
