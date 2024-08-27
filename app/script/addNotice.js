const baseUrl = 'http://localhost:3001'


const noticeForm = document.getElementById('notice-form');
// const subjectElement = document.getElementById('subject');
// const descriptionElement = document.getElementById('description');
    // const noticeList = document.getElementById('notice-list');
    
    document.getElementById('submit-btn').addEventListener('click', async (e) => {
        e.preventDefault();
        const subject = document.getElementById('subject').value.trim();
        const description = document.getElementById('description').value.trim();
        if (subject === '' || description === '') {
            alert('Please enter both subject and description');
            return
        }

// console.log(subject, description);
        try {
            const response = await fetch('http://localhost:3001/notices', {
                method: 'POST',
                body: JSON.stringify({subject, description}),
                headers: {
                    "Content-Type": "application/json",
                  },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data); // Handle the server's response
        } catch (error) {
            console.error('Error:', error);
        }










            // const noticeHTML = `
            //     <h2>${subject}</h2>
            //     <p>${description}</p>
            // `;
            // noticeList.innerHTML += noticeHTML;
            // noticeForm.reset();
        
            // try {
            //     const response = await fetch('/api/notices', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             subject,
            //             description
            //         })
            //     });
            //     if (!response.ok) {
            //         throw new Error('Server error');
            //     }
            //     alert('Notice added successfully');
            //     noticeForm.reset();
            // } catch (error) {
                
            // }
    });


    document.getElementById('delete-button').addEventListener('click', async function (e) {
        e.preventDefault();

        console.log("delete requested")
        
        try {
          const response = await fetch(`${baseUrl}/notices`, {
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