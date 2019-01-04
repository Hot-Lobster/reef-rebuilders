const path = require("path");
const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");

// Post route
router.use("/posts", postRoutes);

// User route
router.use("/user", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
