Series = new Mongo.Collection("series");

const Schemas = {}

Schemas.series = new SimpleSchema({
  "name": {
    type: String,
    label: "Collection Name"
  },
  "summary": {
    type: String,
    label: "Brief summary of the series"
  },
  "description": {
    type: String,
    label: "Not to be confused with the summary because those are defidentaly different things?"
  },
  "comicvineid": {
    type: String,
    label: "The id from the comic vine db"
  },
  "image": {
    type: String,
    label: "link to the image stored in the file system"
  },
  "publisher": {
    type: String,
    label: "there are more than just Marvel and DC you know!"
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

Series.attachSchema(Schemas.series)

export default Series