demo = new Mongo.Collection("demo");

const Schemas = {}

Schemas.demo = new SimpleSchema({
  "name": {
    type: String,
    label: "Collection Name"
  },
  "createdAt": {
    type: Date,
    label: "Date Created At",
    autoValue: function(){
      if(this.isInsert){
        return new Date
      }
    }
  },
  "createdBy": {
    type: String,
    label: "Owner",
    autoValue: function(){
      if(this.isInsert){
        return this.userId
      }
    }
  }
})

demo.attachSchema(Schemas.demo)

export default demo