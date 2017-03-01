Issue = new Mongo.Collection("issue");

const Schemas = {}

Schemas.issue = new SimpleSchema({
    "name": {
        type: String,
        label: "Name of issue"
    },
    "filepath": {
        type: String,
        label: "where is this issue located?"
    },
    "read": {
        type: Boolean,
        label: "did you read this?",
        autoValue: function() {
            if (this.isInsert) {
                return false;
            }
        }
    },
    "parentSeries": {
        type: String,
        label: "id to the series it belongs in"
    },
    "createdAt": {
        type: Date,
        label: "Date Created At",
        autoValue: function() {
            if (this.isInsert) {
                return new Date
            }
        }
    }
})

Issue.attachSchema(Schemas.issue)

export default Issue