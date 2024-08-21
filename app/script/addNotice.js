const noticeForm = document.getElementById('notice-form');
    // const noticeList = document.getElementById('notice-list');
    
    noticeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = document.getElementById('subject').value.trim();
        const description = document.getElementById('description').value.trim();
        if (subject !== '' && description !== '') {
            // const noticeHTML = `
            //     <h2>${subject}</h2>
            //     <p>${description}</p>
            // `;
            // noticeList.innerHTML += noticeHTML;
            // noticeForm.reset();
        } else {
            alert('Please enter both subject and description');
        }
    });