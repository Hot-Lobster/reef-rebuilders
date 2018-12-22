var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new PostSchema object
// This is similar to a Sequelize model
var PostSchema = new Schema({
  coralType: { type: String, required: true },        
  numFrags: { type: String, required: true },
  image: { type: String, required: true },                
  description: { type: String, required: true }
});

// This creates our model from the above schema, using mongoose's model method
var Post = mongoose.model("Post", PostSchema);

// Export the Post model
module.exports = Post;
