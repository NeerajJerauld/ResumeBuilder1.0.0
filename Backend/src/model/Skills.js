const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Skills"));

const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  skill: String,
});

var SkillsData = mongoose.model("skillsdata", SkillsSchema);
module.exports = SkillsData;
