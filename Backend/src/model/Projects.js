const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Projects"));

const Schema = mongoose.Schema;
const ProjectsSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  projectname: String,
  projectdescription: String,
});

var ProjectsData = mongoose.model("projectsdata", ProjectsSchema);
module.exports = ProjectsData;
