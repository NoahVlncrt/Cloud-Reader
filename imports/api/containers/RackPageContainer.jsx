import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import RackPage from '/imports/ui/pages/rack.jsx';

import Series from '/imports/api/collections/Series.js';

export default demosPageContainer = createContainer(({params}) => {

  return {
      AllSeries: Series.find().fetch()
  }
}, RackPage)