const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
const database = {
 users: [
   {
     id: '123',
     firstname: 'John',
     lastname:'Cena',
     email: 'john@gmail.com',
     password: 'cookies'

   },
   {
     id: '124',
     name: 'Sally',
     email: 'sally@gmail.com',
     password: 'bananas',
     entries: 0,
     joined: new Date()
   }
 ]
}
app.use(cors());

app.get('/', (req, res) => {
   res.send(database.users);
 })

app.post('/logIn', (req, res) => {

  //this functions are used to campare hash agains the password log will be displayed on terminal.
  //if the first hash equals apples it will return true.
  bcrypt.compare("apples", "$2a$10$fcdTs2CtPrvw7zmBXA0SWuciTv9w/D4nfzkI2Ge.MDrspFbFU.azy", function(err, res) {
     console.log("first guess", res);
  });
  //but if the second guess dosent equal veggies retuns false
  //ofcourse to check certain password against hash change parameters.
  bcrypt.compare("veggies", "$2a$10$fcdTs2CtPrvw7zmBXA0SWuciTv9w/D4nfzkI2Ge.MDrspFbFU.azy", function(err, res) {
      console.log("second guess", res);
  });
  if(req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password){
       res.json('success');
  } else {
   res.status(400).json('error logging in');
 }
})

app.post('/register', (req, res) => {
const { firstname, lastname,  email, password } = req.body;
//this function is for hashing password because if just push without functions
//It will be logged in local host
  bcrypt.hash(password , null, null, function(err, hash) {
    console.log(hash);
  });
  database.users.push({
    id: 135,
    firstname: firstname,
    lastname: lastname,
    email: email
  })
 res.json(database.users[database.users.length - 1]);
})


app.listen(8080, () =>{
   console.log('Example app listening on port 8080!');
 })
