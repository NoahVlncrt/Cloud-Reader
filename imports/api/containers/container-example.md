import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import demosPage from 'file/path/to/component';

export default demosPageContainer = createContainer(({params}) => {

  return {
    demos: demos.find().fetch()
  }
}, demosPage)
