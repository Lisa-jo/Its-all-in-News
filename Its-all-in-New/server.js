const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//mongoose.connect("mongodb://AllyMao:mp02h50k@ds223738.mlab.com:23738/heroku_mp02h50k");
// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://AllyMao:mp02h50k@ds223738.mlab.com:23738/heroku_mp02h50k";
// // Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
// Define API routes here
app.use("/api", apiRoutes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
