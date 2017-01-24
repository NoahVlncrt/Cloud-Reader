Series = new Mongo.Collection("series");

const Schemas = {}

Schemas.series = new SimpleSchema({
  "name": {
    type: String,
    label: "Collection Name"
  },
  "issues": {
    type: [ String ],
    label: "all the issues that belong to this series",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
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