const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Define middleware here
app.use(logger("dev"));
// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Make public a static folder
app.use(express.static("/client/public"));

//Add routes, both API and view
app.use("/", routes);

// To stop the, "DeprecationWarning: collection.ensureIndex is deprecated"
mongoose.set('useCreateIndex', true);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ReefAppDB",
  { useNewUrlParser: true })
  .then(() => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
  );
;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
