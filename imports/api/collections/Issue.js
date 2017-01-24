Issue = new Mongo.Collection("issue");

const Schemas = {}

Schemas.issue = new SimpleSchema({
  "name": {
    type: String,
    label: "Name of issue"
  },
  "series": {
    type: String,
    label: "Parent series mongoID"
  },
  "number": {
    type: Number,
    label: "the number inside of the series"
  },
  "comicvineid": {
    type: String,
    label: "Random string assigned by the api used by the scanner"
  },
  "description": {
    type: String,
    label: "Here is a description"
  },
  "characters": {
    type: String,
    label: "a list of characters appearing in this issue"
  },
  "image": {
    type: String,
    label: "link to the image file used as the cover"
  },
  "credits": {
    type: String,
    label: "Creators deserve credit too, seriously let them have it!"
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

export default issue