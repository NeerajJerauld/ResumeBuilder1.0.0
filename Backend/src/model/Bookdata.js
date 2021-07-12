const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@njmongodbcluster.m9krg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.222')) 



const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:{type:String,unique: true},
    author:String,
    genre:String,
    description:String,
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;