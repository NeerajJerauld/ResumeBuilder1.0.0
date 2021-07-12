const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Experience"));

const Schema = mongoose.Schema;
const ExperienceSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  title: String,
  companyname: String,
  companyaddress: String,
  startdate: Date,
  enddate: Date,
  present: Boolean,
  keyresponsibilities: String,
  achivements: String,
  references: String,
});

var ExperienceData = mongoose.model("experiencedata", ExperienceSchema);
module.exports = ExperienceData;
