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

// add event to database
app.post('/events', async function (req, res) {
  
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

  // fetch event from db and sent to client
  // app.get("/events", async (req, res) => {
  //   const events = await db("events").orderBy("id", "desc");
  
  //   const q = req.query;
  
  //   console.log(q);
  //   res.json(events);
  // });


















  
  // app.delete("/events", async (req, res) => {
  //   console.log("delete requested")
    
  //   const eventId = await db("events").max("id as id");

  //   const event = await getImagePaths(eventId);

  //   if (event) {
  //     // Download and delete each image
  //     const image1Url = `${baseUrl}/images/${event.image1}`;
  //     await deleteImage(image1Url);
    
  //     const image2Url = `${baseUrl}/images/${event.image2}`;
  //     await deleteImage(image2Url);
    
  //     const image3Url = `${baseUrl}/images/${event.image3}`;
  //     await deleteImage(image3Url);
    
  //     const image4Url = `${baseUrl}/images/${event.image4}`;
  //     await deleteImage(image4Url);
  //   }
  //   await db("events").del().where({ id: eventId[0].id });
    
  //   res.json({ message: "event deleted successfully" }).status(204);
  // });
  
  // app.get('/events', (req, res) => {

  // })

  // async function getImagePaths(eventId) {
  //   console.log("hi")
  //   const event = await db('events')
  //     .where({ id: eventId })
  //     .select('image1', 'image2', 'image3', 'image4')
  //     .limit(1); // Add .first() to retrieve only the first row
  
  //   console.log(event)
  //   console.log("hi")
  
  //   if (event) {
  //     return {
  //       image1: event.image1,
  //       image2: event.image2,
  //       image3: event.image3,
  //       image4: event.image4
  //     };
  //   } else {
  //     return null; // Handle the case where the event is not found
  //   }
  // }
    // Assuming deleteImage is defined elsewhere
    // async function deleteImage(imageUrl) {
    //   // Implement your image deletion logic here (e.g., using fetch or axios)
    //   try {
    //     const response = await fetch(imageUrl, {
    //       method: 'DELETE',
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Error deleting image');
    //     }
  
    //     console.log('Image deleted successfully');
    //   } catch (error) {
    //     console.error('Error deleting image:', error);
    //   }
    // }
  





























































































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



