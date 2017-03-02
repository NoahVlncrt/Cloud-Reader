import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import SeriesPage from '/imports/ui/pages/series.jsx';

import Issue from '/imports/api/collections/Issue.js';
import Series from '/imports/api/collections/Series.js';

export default RackPageContainer = createContainer(({params}) => {

    return {
        AllSeries: Issue.find({parentSeries: params.id}).fetch(),
        SeriesName: Series.findOne({_id: params.id})
    }
}, SeriesPage)