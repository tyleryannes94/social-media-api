const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema ({
  reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
      type: String,
      required: true,
      maxlength: 280
  },
  username: {
      type: String,
      reuqired: true
  },
  createdAt: {
      type: Date,
      default: Date.now, 
      get: timestamp => timestamp.toISOString() 
    }
  },
  {
      timestamps: { createdAt: true, updatedAt: false },
      toJSON: { getters: true }
  })
  

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => timestamp.toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, {
  toJSON: {
    virtuals: true
  },
  id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;