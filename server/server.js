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

app.post('/postevents', async function (req, res) {

  
  const files = req.files;

  const filePaths = [];
    
    for (const file in files) {
      const fileData = files[file];
      const originalFileName = fileData.name;
      const fileExtension = originalFileName.split('.').pop();
      const newFileName = `event-${Date.now()}.${fileExtension}`;
      const path = __dirname + "/images/" + newFileName;
      await fileData.mv(path);
      filePaths.push(`/images/${newFileName}`);
    }

  let title = req.body.title;
  let content = req.body.paragraph;
  let image1 = filePaths[0];
  let image2 = filePaths[1];
  let image3 = filePaths[2];
  let image4 = filePaths[3];
    
  await db("events").insert({ title, 
                              content, 
                              image1, 
                              image2, 
                              image3, 
                              image4 })

    res.send('Files uploaded successfully!');
  });


  // app.get('/events', (req, res) => {

  // })




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



