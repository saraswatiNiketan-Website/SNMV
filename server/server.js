const baseUrl = 'http://localhost:3001'

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload'); 


const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('images/'))

const {db} = require('./database');


app.post('/postevents', async function (req, res){

const a =  req.files;

for (const file in req.files) {
    const fileData = req.files[file]
    const path = __dirname + "/images/" + fileData.name 

    await fileData.mv(path)
}


    // console.log(req)
    // for (const entry of a) {
    //     console.log(entry);
    //     console.log("hi")
    //   }

//     const request = await req.body;
// console.log(request)

// const q = req.query;
// console.log(q)

}
);






// const loggedInUsers = [{
//     id: "9"
// }]

// app.get('api/is-logged-in', (req, res) => {

//     const {userId} = req.query;

//     loggedInUsers.map(({id}) => id).includes(userId)

//     res.json(
//         {
//             isLoggedIn: true
//         }
//     )

//     }
// )



















app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
})



















// const bcrypt = require('bcrypt');

// async function hashPassword(password) {
//   const salt = await bcrypt.genSalt(10);
  
//   console.log(password)
//   let secPass = await bcrypt.hash(password, salt);
//   console.log(secPass); // Now you can use secPass
//   console.log(await bcrypt.compare("p",secPass))
// }

// hashPassword("p");



