const express = require('express');
const Bookdata = require('./src/model/Bookdata');
const Authordata = require('./src/model/Authordata');
const Credentialdata = require('./src/model/Credentialdata');
const Education = require('./src/model/Education');
const Certificate = require('./src/model/Certificate');
const Experience = require('./src/model/Experience');
const Interest = require('./src/model/Interest');
const Language = require('./src/model/Language');
const Projects = require('./src/model/Projects');
const Skills = require('./src/model/Skills');
const UserDetails = require('./src/model/UserDetails');
//const User = require('./src/model/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
username='admin';
password='Admin123';

//const authorRouter = require('./src/routes/authorRoute');
//app.use("/author", authorRouter);





function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }


//     app.post('/insert',verifyToken,function(req,res){
//     console.log(req.body);
       
//     var item=

//     {
//              title:req.body.book.title,
//              author:req.body.book.author,
//              genre:req.body.book.genre,
//              description:req.body.book.description,
//              image:req.body.book.image

//      }

//  var book=Bookdata(item);
//  book.save()
// });
// app.get('/booklist',function(req,res){
    
//     Bookdata.find()
//                 .then(function(books){
//                     console.log(books);
//                     res.send(books);
//                 });
// });
// app.delete('/remove/:title',(req,res)=>{
   
//     title = req.params.title;
//     Bookdata.findOneAndDelete({"title":title})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })


// app.get('/bookdetails/:title',  (req, res) => {
//     const title = req.params.title;
//     Bookdata.findOne({"title":title})
//     .then((book)=>{
//         res.send(book);
//     });
// })


function checkuser(req,res, next){
  console.log(req.body)
useremail=req.body.username;
userpassword=req.body.password;
console.log(useremail)
console.log(userpassword)
Credentialdata.findOne({username:useremail})
.then(function(data){
  console.log(data)
if(username == useremail && password == userpassword){
  console.log("You are in Admin");
  next()
} else if (useremail==data?.username && userpassword == data?.password){
  console.log("you are in user")
  next()}else{
  res.status(401).send('Invalid Login Attempt')
}})}    
app.post('/login',checkuser, (req, res) => {
useremail=req.body.username;
userpassword=req.body.password;
if(useremail==username && userpassword==password){
    let payload = {subject: username+password}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})
}else{
let payload = {subject: userpassword+useremail}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})}})

//signup

//adding userdata in server





//     app.put('/update/:oldtitle',(req,res)=>{
//       console.log("Hello inside put"+req.body.title +"   o"+req.params.oldtitle)
//       const update = {
//       title:req.body.title,
//       author:req.body.author,
//       genre:req.body.genre,
//       description:req.body.description,
//       image:req.body.image
//       };
//      Bookdata.findOneAndUpdate({"title":req.params.oldtitle},update)
//      .then(function(){
//         res.send();
//     });
//     });    
 
    
      
   
   
// app.delete('/remove/:title',(req,res)=>{
   
//      title = req.params.title;
//      Bookdata.findByIdAndDelete({"title":title})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })

// //    -------------------Author--------------------------
// app.post('/author/insert',verifyToken,function(req,res){
//     console.log(req.body);
       
//     var item=

//     {
//              author:req.body.author.author,
//              country:req.body.author.country,
//              famousbooks:req.body.author.famousbooks,
//              genre:req.body.author.genre,
//              description:req.body.author.description,
//              image:req.body.author.image

//      }

//  var author=Authordata(item);
//  author.save()
// });
// app.get('/author/authorlist',function(req,res){
    
//     console.log("Author get value");
//     Authordata.find()
//                 .then(function(authors){
//                     console.log(authors);
//                     res.send(authors);
//                 });
// });
// app.delete('/author/remove/:author',(req,res)=>{
   
//     author = req.params.author;
//     Authordata.findOneAndDelete({"author":author})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })


// app.get('/author/authordetails/:author',  (req, res) => {
//     const author = req.params.author;
//     Authordata.findOne({"author":author})
//     .then((author)=>{
//         res.send(author);
//     });
// })

//     app.put('/author/update/:oldauthor',(req,res)=>{
//       console.log("Hello inside put"+req.body.author +"   o"+req.params.oldauthor)
//       const update = {
//       author:req.body.author,
//       author:req.body.author,
//       genre:req.body.genre,
//       description:req.body.description,
//       image:req.body.image
//       };
//      Authordata.findOneAndUpdate({"author":req.params.oldauthor},update)
//      .then(function(){
//         res.send();
//     });
// })
      
 
    
      
   
   
// app.delete('/author/remove/:author',(req,res)=>{
   
//      author = req.params.author;
//      authordata.findByIdAndDelete({"author":author})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      });
//    })
// ----------------------Credentials--------------------------------------
app.post('/signup', function (req, res) {
  console.log("post");
   
  //  console.log(credentials.has({username:req.body.userName,password:req.body.password}));
  Credentialdata.find({"username":req.body.username})
      .then(function (credential) {
          console.log("--------Credential-----"+credential);
          if (credential.length != 0 || req.body.username==="admin") {
            console.log("User already exist");
              res.send({ message: 'Username already exist...' });
          }
          else {
              var item =

              {
                  name: req.body.fname,
                  email: req.body.email,
                  username: req.body.username,
                  password: req.body.password


              }

              var user = Credentialdata(item);
              user.save()
                  .then(() => {
                      console.log("Sucessfully Saved");
                      res.send();

                  })
                  .catch(()=>{

                      res.send({message:"User already exist"});
                  })


          }


      });

  
 
  });


     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

