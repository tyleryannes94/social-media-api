const mongoose = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      trim: true // change this to "Must be between 1 and 280 characters "
    },
    createdAt: {
      type: Date,
      //Set default value to the current timestamp
     //Use a getter method to format the timestamp on query
    },
    username: [
      {
        type: String,
        required: true }
    ],
    reactions: [
      {
        type: Array,
        reactionId

        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
        // reactionBody
        
        // String
        // Required
        // 280 character maximum
        // username
        
        // String
        // Required
        // createdAt
        
        // Date
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
      }
    ]
  }, {
    toJSON: {
      virtuals: true
    },
    id: false
  });

  thoughtchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  

const User = mongoose.model('User', thoughtSchema);

module.exports = User;