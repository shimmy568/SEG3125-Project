/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Router } from 'react-router-dom';

import MainPage from 'containers/MainPage/';
import SingleView from 'containers/SingleView/';
import NotFoundPage from 'containers/NotFoundPage/';
import MultiView from 'containers/MultiView/';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet
        defaultTitle="StatsHub"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/single" component={SingleView} />
        <Route path="/multi" component={MultiView} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
