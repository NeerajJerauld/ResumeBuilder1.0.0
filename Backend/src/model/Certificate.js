const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>UserDetails"));

const Schema = mongoose.Schema;
const CertificateSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  title: String,
  year: String,
});

var CertificateData = mongoose.model("certificatedata", CertificateSchema);
module.exports = CertificateData;
