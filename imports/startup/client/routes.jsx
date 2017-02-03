import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import BlankLayout from '/imports/ui/layouts/BlankLayout.jsx';

import SignUpPage from '/imports/ui/pages/SignUp.jsx';
import LoginPage from '/imports/ui/pages/login.jsx';

import RackPageContainer from '/imports/api/containers/RackPageContainer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={RackPageContainer}/>
    </Route>
    <Route path="/signup" component={BlankLayout}>
      <IndexRoute component={SignUpPage}/>
    </Route>
    <Route path="/login" component={BlankLayout}>
      <IndexRoute component={LoginPage}/>
    </Route>
  </Router>
)

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-root'));
});