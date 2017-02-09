Series = new Mongo.Collection("series");

const Schemas = {}

Schemas.series = new SimpleSchema({
  "name": {
    type: String,
    label: "Collection Name"
  },
  "cover": {
    type: String,
    label: "path to cover img",
    optional: true
  },
  "tags": {
    type: [ String ],
    label: "All tags given to the series by the user (psssst that's you ;)",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "path": {
    type: String,
    label: "Path to series in file system"
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