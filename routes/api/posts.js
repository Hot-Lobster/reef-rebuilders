const router = require("express").Router();
const postController = require("../../controllers/postController");

// // Route for retrieving all Posts from the db
// app.get("/posts", function(req, res) {
//   // Find all Posts
//   db.Post.find({})
//     .then(function(dbPost) {
//       // If all Posts are successfully found, send them back to the client
//       res.json(dbPost);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error back to the client
//       res.json(err);
//     });
// });

// // Route for saving a new Post to the db and associating it with a User
// app.post("/submit", function(req, res) {
//   // Create a new Post in the db
//   db.Post.create(req.body)
//     .then(function(dbPost) {
//       // If a Post was created successfully, find one User (there's only one) and push the new Post's _id to the User's `posts` array
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.User.findOneAndUpdate({}, { $push: { posts: dbPost._id } }, { new: true });
//     })
//     .then(function(dbUser) {
//       // If the User was updated successfully, send it back to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

module.exports = router;