const baseUrl = 'http://localhost:3001'

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload'); 
const fs = require('fs');



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
      filePaths.push(`${newFileName}`);
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

    res.json({message:'Files uploaded successfully!'});
  });

  app.delete("/events", async (req, res) => {
    console.log("delete requested")
    
    const eventId = await db("events").max("id as id");
// console.log(eventId[0])
// eid = eventId[0]
// console.log(eid.id)

console.log(eventId[0].id)
    const event = await getImagePaths(eventId[0].id);

    if (event) {
      // Download and delete each image
      const image1Url = `./images/${event.image1}`;
      // await deleteImage(image1Url);
      fs.unlink(image1Url, function () {
        console.log("Image deleted successfully");
      });
    
      const image2Url = `./images/${event.image2}`;
      fs.unlink(image2Url, function () {
        console.log("Image deleted successfully");
      })
      // await deleteImage(image2Url);
    
      const image3Url = `./images/${event.image3}`;
      fs.unlink(image3Url, function () {
        console.log("Image deleted successfully");
      })
      // await deleteImage(image3Url);
    
      const image4Url = `./images/${event.image4}`;
      fs.unlink(image4Url, function () {
        console.log("Image deleted successfully");
      });
      // await deleteImage(image4Url);

      // return
    }
    await db("events").del().where({ id: eventId[0].id });
    
    res.json({ message: "event deleted successfully" }).status(204);
  });

  app.get("/events", async (req, res) => {
    try {
      const events = await db("events").orderBy("id", "desc");
      // console.log(events);
      // if (events && events.length > 0) {
        res.json(events);
      // } else {
        // res.status(404).json({ message: "No events found" });
      // }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  async function getImagePaths(eventId) {
    console.log("hi")
    const event = await db('events')
      .where({ id: eventId })
      .select('image1', 'image2', 'image3', 'image4')
      .first(); // Add .first() to retrieve only the first row
  
    console.log(event)
    console.log("hi")
  
    if (event) {
      return {
        image1: event.image1,
        image2: event.image2,
        image3: event.image3,
        image4: event.image4
      };
    } else {
      return null; // Handle the case where the event is not found
    }
  }

app.post('/admissions', async function (req, res) {
  console.log('requested admissions');

  const {
    studentName,
    dob,
    gender,
    bloodGroup,
    religion,
    nationality,
    otherInformation,
    admissionFor,
    previousSchool,
    fatherName,
    fatherContact,
    motherName,
    motherContact,
    guardianName,
    guardianContact,
    guardianRelation
} = req.body;
console.log(req.body);

  await db('newAdmission').insert({studentName,
    dob,
    gender,
    bloodGroup,
    religion,
    nationality,
    otherInformation,
    admissionFor,
    previousSchool,
    fatherName,
    fatherContact,
    motherName,
    motherContact,
    guardianName,
    guardianContact,
    guardianRelation})

  res.json({message:'Admission form submitted'});
});

app.get("/admissions", async (req, res) => {
  try {
    const admissions = await db("newAdmission").orderBy("id", "desc");
    // console.log(events);
    // if (events && events.length > 0) {
      res.json(admissions);
    // } else {
      // res.status(404).json({ message: "No events found" });
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




app.post('/notices',async function(req, res) {
  const {subject, description} = req.body;  

  await db('notices').insert({description,subject})

  res.json({message:'notices submitted'});
});

app.delete("/notices", async (req, res) => {
  console.log("delete requested")
  
  const noticeId = await db("notices").max("id as id");
 
  console.log(noticeId[0])
  await db("notices").del().where({ id: noticeId[0].id });
  
  res.json({ message: "notice deleted successfully" }).status(204);
});

app.get("/notices", async (req, res) => {
  try {
    const notices = await db("notices").orderBy("id", "desc");
    // console.log('notices hitted');
    // console.log(notices)
    // if (events && events.length > 0) {
      res.json(notices).status(200);
    // } else {
      // res.status(404).json({ message: "No events found" });
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post('/contact',async function(req, res) {
  const {name, email, message} = req.body;  

  await db('contact').insert({name, email, message})

  res.json({message:'message submitted'});
});

app.get("/contact", async (req, res) => {
  try {
    const contacts = await db("contact").orderBy("id", "desc");
    // console.log('notices hitted');
    // console.log(notices)
    // if (events && events.length > 0) {
      res.json(contacts).status(200);
    // } else {
      // res.status(404).json({ message: "No events found" });
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



















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



