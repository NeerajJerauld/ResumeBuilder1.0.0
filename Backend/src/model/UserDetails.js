const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>UserDetails"));

const Schema = mongoose.Schema;
const UserDetailsSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  address: String,
  phonenumber: Number,
});

var UserDetailsData = mongoose.model("userdetailsdata", UserDetailsSchema);
module.exports = UserDetailsData;
