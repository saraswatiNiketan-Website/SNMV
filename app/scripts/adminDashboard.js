// const { json } = require("body-parser");

function submitContent() {

    console.log("submitContent");

    sendDataAndFile(document.getElementById("title").value,
        document.getElementById("paragraph").value,
        // document.getElementById("paragraph").value,
        document.getElementById("image1").files[0],
        document.getElementById("image2").files[0],
        document.getElementById("image3").files[0],
        document.getElementById("image4").files[0]);

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
    // console.log(title, paragraph);

    let a=10
    let b = 20
    try {
        const response = await fetch('http://localhost:3001/postevents', {
            method: 'POST',
            headers: {
                // contentType: 'multipart/form-data',
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(formData)
            // body: JSON.stringify({ a,b })
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