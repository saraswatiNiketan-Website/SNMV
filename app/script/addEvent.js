const topicTitleInput = document.getElementById('topic-title');
const topicInput = document.getElementById('topic-input');
const imageInput = document.getElementById('image-input');
const imagePreviewContainer = document.getElementById('image-preview');
const submitBtn = document.getElementById('submit-btn');

const baseUrl = 'http://localhost:3001'

function submitContent(e) {

  // e.preventDefault(); // Prevent form from submitting normally

    console.log("submitContent");

    const imageInput = document.getElementById("image-input")
    sendDataAndFile(document.getElementById("topic-title").value,
        document.getElementById("topic-input").value,
        imageInput.files[0],
        imageInput.files[1],
        imageInput.files[2],
        imageInput.files[3],
    )

    // return false
}

async function sendDataAndFile(title, paragraph, image1, image2, image3, image4) {

    console.log("senddata");

    const formData = new FormData();
    formData.append('title', title);
    formData.append('paragraph', paragraph);
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('image3', image3);
    formData.append('image4', image4);

    console.log(formData);
    for (const entry of formData.entries()) {
        console.log(entry);
      }
    try {
        const response = await fetch('http://localhost:3001/events', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Handle the server's response
    } catch (error) {
        console.error('Error:', error);
    }
}






// const responseContainer = document.getElementById('response-container');

let uploadedImages = [];

imageInput.addEventListener('change', (e) => {
  const files = imageInput.files;
  if (files.length > 4) {
    alert('You can only upload up to 4 images.');
    return;
  }
  uploadedImages = [];
  imagePreviewContainer.innerHTML = '';
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target.result;
      imagePreviewContainer.appendChild(img);
      uploadedImages.push(file);
    };
    reader.readAsDataURL(file);
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const topicTitle = topicTitleInput.value.trim();
  const userInput = topicInput.value.trim();
  if (topicTitle !== '' && userInput !== '' && uploadedImages.length > 0) {
    // You can send the user input and uploaded images to your server or perform any other action here
    submitContent()
    window.location.href = './../index.html';

  } else {
    console.log("enter all fields")
    // responseContainer.innerHTML = 'Please enter topic title, description, and upload at least one image.';
  }
});


document.getElementById('delete-btn').addEventListener('click', async function () {
  console.log("delete request")
  
  try {
    const response = await fetch(`${baseUrl}/events`, {
      method: "DELETE",
    });
    const data = await response.json();
    window.location.replace("./../index.html");

    return data
  } catch (err) {
    console.log("Failed to connect server");
    console.error(err);
  }
}

)
