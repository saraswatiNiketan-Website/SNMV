const baseUrl = 'http://localhost:3001'


const eventBox = document.getElementById('event-box')

const getEvents = async () => {

    try {
        const response = await fetch(`${baseUrl}/events`);
        const data = await response.json();

        return data
    }
    catch (err) {
        console.log("Failed to connect server");
        console.error(err);
    }
}
window.onload = async (event) => {

    const events = await getEvents();

    console.log(events);

        events.forEach( function (event) {
            console.log(event);
            
            
            let newEvent = document.createElement("div");
            newEvent.classList.add("container");
            newEvent.innerHTML = `
            <img src="${baseUrl}/${event.image1}" alt="pic" style="height: 300px; width: 300px;">
            
            <h1 class="heading">
            ${event.title}
            </h1>
            <a href=""> READ MORE </a>
            
            `;
            eventBox.appendChild(newEvent);
        })

    console.log("page is fully loaded");
};
