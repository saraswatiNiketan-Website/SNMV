const noticeForm = document.getElementById('notice-form');
// const subjectElement = document.getElementById('subject');
// const descriptionElement = document.getElementById('description');
    // const noticeList = document.getElementById('notice-list');
    
    noticeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const subject = document.getElementById('subject').value.trim();
        const description = document.getElementById('description').value.trim();
        if (subject === '' || description === '') {
            alert('Please enter both subject and description');
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