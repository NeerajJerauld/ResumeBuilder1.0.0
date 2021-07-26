const mongoose = require("mongoose");
mongoose
  .connect(
    'mongodb+srv://Rahulk:rahulk2308@cluster0.k8mnb.mongodb.net/Project?retryWrites=true&w=majority'
  )
  .then(() => console.log("MongoDB connected.>UserDetails"));

const Schema = mongoose.Schema;
const UserDetailsSchema = new Schema({
  name:String,
  image: String,
  address: String,
  phonenumber: Number,
  email:String,
  pincode:Number,
  city:String,
  Certificatetitle: String,
  Certificateyear: String,
  qualification: String,
  institution: String,
  coursestartdate: Date,
  courseenddate: String,
  yearofcompletion: String,
  course: String,
  title: String,
  companyname: String,
  companyaddress: String,
  startdate: Date,
  enddate: String,
  keyresponsibilities: String,
  achivements: String,
  references: String,
  interest: String,
  languagename: String,
  proficiency: String,
  projectname: String,
  projectdescription: String,
  skill: String,
});

var UserDetailsData = mongoose.model("userdetailsdata", UserDetailsSchema);
module.exports = UserDetailsData;
