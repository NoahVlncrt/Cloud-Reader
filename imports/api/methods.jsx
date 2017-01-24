import {Meteor} from 'meteor/meteor';

export default Meteor.methods({
  createNewUser: function(userData){
    Accounts.createUser(userData)
  }
})