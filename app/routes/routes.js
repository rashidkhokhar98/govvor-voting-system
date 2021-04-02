import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
import HomePage from '../containers/HomePage';
import SignupPage from '../containers/SignupPage';
import LoginPage from '../containers/LoginPage';
import AddBillPage from '../containers/AddBillPage';
import ElectionsPage from '../containers/ElectionsPage';
import GovernomentPage from '../containers/GovernomentPage';
import ConstitutionPage from '../containers/ConstitutionPage';
import PublicPage from '../containers/PublicPage';
import AboutPage from '../containers/AboutPage';
import Admin from '../containers/Admin';
import NotFoundPage from '../containers/NotFoundPage';

const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/bill" component={AddBillPage} />
      <Route exact path="/election" component={ElectionsPage} />
      <Route exact path="/government" component={GovernomentPage} />
      <Route exact path="/constitution" component={ConstitutionPage} />
      <Route exact path="/public" component={PublicPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/admin" component={Admin} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
