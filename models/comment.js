const mongoose = require("mongoose");
​const Joi  = require ('joi');
​
//! ENDPOINTS:
​
//! POST COMMENTS
//! REPLY TO COMMENTS (POST)
//! LIKES AND DISLIKES FOR COMMENTS (PUT)
//! GET comments for a video
​
// COMMENTS
// REPLY
​
const replySchema = mongoose.Schema({
  text: { type: String, required: true, minlength: 5, maxlength: 1000 },
  dateAdded: { type: Date, default: Date.now },
});
​
const commentSchema = mongoose.Schema({
  text: { type: String, required: true, minlength: 5, maxlength: 1000 },
  dateAdded: { type: Date, default: Date.now },
  likes: { type: Number, required: true, default: 0 },
  dislikes: { type: Number, required: true, default: 0 },
  reply: [{ type: replySchema }],
  videoId: { type: String, required: true, minlength: 4, maxlength: 50 },
});
​
const Reply = mongoose.model("Reply", replySchema);
const Comment = mongoose.model("Comment", commentSchema); 

function validateComment(comment){
  const schema  = Joi.object({
    text: Joi.string().min(5).max(1000).required(),
  });
  return schema.validate(comment);
}
​
exports.validate = validateComment;
module.exports = {
  Reply: Reply,
  Comment: Comment,
};