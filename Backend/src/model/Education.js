const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Education"));

const Schema = mongoose.Schema;
const EducationSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  qualification: String,
  institution: String,
  university: String,
  present: Boolean,
  startdate: Date,
  enddate: Date,
  yearofcompletion: Number,
  courses: String,
});

var EducationData = mongoose.model("educationdata", EducationSchema);
module.exports = EducationData;
