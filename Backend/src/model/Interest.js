const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Interest"));

const Schema = mongoose.Schema;
const InterestSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  interest: String,
});

var InterestData = mongoose.model("interestdata", InterestSchema);
module.exports = InterestData;
