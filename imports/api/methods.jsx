import {Meteor} from 'meteor/meteor';
import {PopulateIssues} from '/imports/api/filescanner.js';

export default Meteor.methods({
  createNewUser: function(userData){
    Accounts.createUser(userData)
  },
  grabSeries: function(allcomics,seriesname) {
    PopulateIssues(allcomics,seriesname);
  }
})