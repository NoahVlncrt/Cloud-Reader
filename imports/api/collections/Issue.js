Issue = new Mongo.Collection("issue");

const Schemas = {}

Schemas.issue = new SimpleSchema({
  "name": {
    type: String,
    label: "Name of issue"
  },
  "filepath":{
    type: String,
    label: "where is this issue located?"
  },
  "number": {
    type: Number,
    label: "Release number of this issue, Invincible Iron Man #2 etc. . ."
  },
  "createdAt": {
    type: Date,
    label: "Date Created At",
    autoValue: function(){
      if(this.isInsert){
        return new Date
      }
    }
  }
})

Issue.attachSchema(Schemas.issue)

export default Issue