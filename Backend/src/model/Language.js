const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected.>Language"));

const Schema = mongoose.Schema;
const LanguageSchema = new Schema({
  id: { type: String, unique: true },
  userid: String,
  languagename: String,
  proficiency: String,
});

var LanguageData = mongoose.model("languagedata", LanguageSchema);
module.exports = LanguageData;
