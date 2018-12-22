const router = require("express").Router();
const userRoutes = require("./user");

// User route
router.use("/user", userRoutes);
// Post route
router.use("/post", userRoutes);

module.exports = router;
