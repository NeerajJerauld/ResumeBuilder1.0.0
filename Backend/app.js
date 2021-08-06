const express = require('express');
const Credentialdata = require('./src/model/Credentialdata');
const multer=require("multer");
const path=require("path");
const UserData = require('./src/model/UserDetails');
//const User = require('./src/model/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
username='admin';
password='Admin123';

//const authorRouter = require('./src/routes/authorRoute');
//app.use("/author", authorRouter);

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/images',
  filename: function(req, file, cb){
    cb(null,file.image + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage
}).single("image");





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


  app.post('/userinsert',upload,function(req,res){
    console.log(req.body);
  
    var item=

    {
  name:req.body.UserDetails.name, 
  image:req.body.UserDetails.image,
  summary:req.body.UserDetails.summary,
  address:  req.body.UserDetails.address, 
  phonenumber:req.body.UserDetails.phoneNumber, 
  pincode:req.body.UserDetails.pincode,
  city:req.body.UserDetails.city,
  email:req.body.UserDetails.email, 

  qualification: req.body.UserDetails.Qualification,
  institution: req.body.UserDetails.Institute,
  coursestartdate:req.body.UserDetails.CourseStartDate, 
  courseenddate: req.body.UserDetails.CourseEndDate,
  yearofcompletion:req.body.UserDetails.year,
  course: req.body.UserDetails.Course,
 
  title:req.body.UserDetails.Title,
  companyname: req.body.UserDetails.CompanyName,
  companyaddress: req.body.UserDetails.CompanyAddress,
  startdate:req.body.UserDetails.StartDate,
  enddate:req.body.UserDetails.EndDate,
  keyresponsibilities:req.body.UserDetails.Key,
  achivements: req.body.UserDetails.Achivements,
  references: req.body.UserDetails.Reference,

  interest: req.body.UserDetails.interest,
  languagename:req.body.UserDetails.language,
  proficiency: req.body.UserDetails.proficiency,
  projectname: req.body.UserDetails.project,
  projectdescription:req.body.UserDetails.description, 
  skill: req.body.UserDetails.skills,
  Certificatetitle:req.body.UserDetails.certificate,
  Certificateyear: req.body.UserDetails.certificateyear,
  fieldname:req.body.UserDetails.fieldname,
  fieldinput:req.body.UserDetails.fieldinput

     }
   

 var Data=UserData(item);
 Data.save();
 console.log('user data successfully uploaded')
});

// app.delete('/remove/:title',(req,res)=>{
   
//     title = req.params.title;
//     Bookdata.findOneAndDelete({"title":title})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })


app.get('/getuser/:email',  (req, res) => {
    const email = req.params.email;
    UserData.find({"email":email}).sort({$natural:-1}).limit(1)
    .then((Data)=>{
      console.log(Data);
        res.send(Data);
    });

})

// app.get('/user/:id',  (req, res) => {
//   const id = req.params.id;
//   UserData.find({"_id":id})
//   .then((Data)=>{
//     console.log(Data);
//       res.send(Data);
//   });

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
  if(data == null){
    res.status(403).send({message:"User doesnot exist"});
  }
else if(username == useremail && password == userpassword){
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
    res.status(200).send({token})}

})

// ----------------------Credentials--------------------------------------
app.post('/signup', function (req, res) {
  console.log("post");
   
  
  Credentialdata.find({"username":req.body.username})
      .then(function (credential) {
          console.log("--------Credential-----"+credential);
          if (credential.length != 0 || req.body.username==="admin") {
            console.log("User already exist");
              res.status(409).send({ message: 'Username already exist...' });
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
                      res.status(200).send({message:"Sucessfully Saved"});

                  })
                  .catch(()=>{

                    res.status(409).send({ message: 'Username already exist...' });
                  })


          }


      });

  
 
  });

//adding userdata in server



app.put('/update',(req,res)=>{
  console.log(req.body)

 id=req.body.user;
 console.log(id)
 Name=req.body.name, 
  image=req.body.image,
  summary=req.body.summary,
  address=  req.body.address, 
  phonenumber=req.body.phoneNumber, 
  pincode=req.body.pincode,
  city=req.body.city,
  email=req.body.email, 

  qualification= req.body.Qualification,
  institution= req.body.Institute,
  coursestartdate=req.body.CourseStartDate, 
  courseenddate= req.body.CourseEndDate,
  yearofcompletion=req.body.year,
  course= req.body.Course,
 
  title=req.body.Title,
  companyname= req.body.CompanyName,
  companyaddress= req.body.CompanyAddress,
  startdate=req.body.StartDate,
  enddate=req.body.EndDate,
  keyresponsibilities=req.body.Key,
  achivements= req.body.Achivements,
  references= req.body.Reference,

  interest= req.body.interest,
  languagename=req.body.language,
  proficiency= req.body.proficiency,
  projectname= req.body.project,
  projectdescription=req.body.description, 
  skill= req.body.skills,
  Certificatetitle=req.body.certificate,
  Certificateyear= req.body.certificateyear,
  fieldname=req.body.fieldname,
  fieldinput=req.body.fieldinput;
 
 UserData.findByIdAndUpdate({"_id":id},
                              {$set:{
                               "name":Name, 
                                "image":image,
                                "summary":summary,
                                "address":address, 
                                "phonenumber":phonenumber, 
                                "pincode":pincode,
                                "city":city,
                                "email":email, 
                              
                                "qualification": qualification,
                                "institution": institution,
                                "coursestartdate":coursestartdate, 
                                "courseenddate": courseenddate,
                               " yearofcompletion":yearofcompletion,
                                "course": course,
                               
                                "title":title,
                                "companyname":companyname,
                                "companyaddress": companyaddress,
                                "startdate":startdate,
                                "enddate":enddate,
                                "keyresponsibilities":keyresponsibilities,
                                "achivements": achivements,
                                "references": references,
                              
                                "interest": interest,
                                "languagename":languagename,
                                "proficiency": proficiency,
                                "projectname": projectname,
                                "projectdescription":projectdescription, 
                                "skill": skill,
                                "Certificatetitle":Certificatetitle,
                                "Certificateyear": Certificateyear,
                                "fieldname":fieldname,
                                "fieldinput":fieldinput
                            }})
 .then(function(){
     res.send();
 })
})

 
    
      
   
   
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



     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

