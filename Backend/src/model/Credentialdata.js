const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Credential"));

const Schema = mongoose.Schema;
const CredentialSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
  createdTime: Date,
});

var Credentialdata = mongoose.model("credentialdata", CredentialSchema);
module.exports = Credentialdata;
