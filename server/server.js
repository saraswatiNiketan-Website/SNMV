const express = require('express');
const cors = require('cors');
const app = express();

const {db} = require('./database');

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



















app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
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



