const mongoose = require("mongoose");
mongoose
  .connect(
    'mongodb+srv://Rahulk:rahulk2308@cluster0.k8mnb.mongodb.net/Project?retryWrites=true&w=majority'
  )
  .then(() => console.log("MongoDB connected.>Credential"));

const Schema = mongoose.Schema;
const CredentialSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
 
});

var Credentialdata = mongoose.model("credentialdata", CredentialSchema);
module.exports = Credentialdata;
