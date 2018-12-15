var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  posts: [
      {
        _id: { type: String, required: true },
        coralType: { type: String, required: true },        
        numFrags: { type: String, required: true },
        image: { type: String, required: true },                
        description: { type: String, required: true }        
      }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;