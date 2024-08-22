const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const selectedEvent = document.querySelector(".selectedEvent");
const selectedDay = document.querySelector(".selectedDay");
const eventDate = document.querySelector(".eventDate");
const eventTitle = document.querySelector(".eventTitle");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = {
  "2024-6-26": "Memory Game(Jr)",
  "2024-5-3": "Wall magazine competition(Sr)",
  "2024-5-7": "Card making for MOther's day(All)",
  "2024-5-10": "Swimming(G) and Dance Activity",
  "2024-5-17": "Swimming(B)",
  "2024-5-24": "Speech competition(jr),Field Trip",
  "2024-5-31": "Drawing Competition",
  "2024-6-7": "Heritage Day",
  "2024-6-14": "Book Reading(jr)",
  "2024-6-21": "Speech competition(sr)",
  "2024-6-28": "Peer Knowledge Sharing(sr)",
  "2024-8-2": "Spelling Contest(sr:eng=nep)",
  "2024-8-9": "Story Writing and Narriting",
  "2024-8-16": "Quiz(jr)/Poem Recitation",
  "2024-8-23": "Essay writing(sr)",
  "2024-8-30": "Nepali Dabate",
  "2024-9-13": "Children's Day Celebration",
  "2024-9-20": "Heritage day",
  "2024-9-27": "Futsal (sr)",
  "2024-11-15": "Story telling competition(sr+ jr)",
  "2024-11-24": "Futsal (6,7)/Art competition",
  "2024-11-29": "Quiz contest(sr) ",
  "2024-12-06": "Field trip(sr)",
  "2024-12-13": "T.P meeting (1-2,3-4,5-6)/ Futsal(8-9) Art and craft ",
  "2024-12-16": "T.P meeting  7-8,9-10",
  "2024-12-29": "School picnic",
  "2025-1-3": "Second term result /Novel Engineering exhibition-II",
  "2025-1-31": "Sports day",
  "2025-2-7": "Heritage Day/Eng Debate (sr)",
  "2025-2-12": "Steam Exhibition (KMC)",
  "2025-2-14": "Field trip (all)/Language games",
  "2025-2-21": "Museum visit and Heritage walk",
  "2025-3-7": "Peer knowledge sharing ",
  "2025-3-9": "T.p Meeting (1-2,3-4)",
  "2025-3-10": "T.p Meeting (5-6,7-8)",
  "2025-3-11": "T.p Meeting(9-10)",
  "2025-3-27": "T.p Meting(11-12)",
  "2025-3-26": "Staff picnic"
};

// const vacations = {
//   "2024-7-13": "Summer Vacation",
//   "2024-7-14": "Summer Vacation",
//   "2024-7-15": "Summer Vacation",
//   "2024-7-16": "Summer Vacation",
//   "2024-7-17": "Summer Vacation",
//   "2024-7-18": "Summer Vacation",
//   "2024-7-19": "Summer Vacation",
//   "2024-7-20": "Summer Vacation",
//   "2024-10-3": "Dashain ,Tihar & Chhat",
//   "2024-10-4": "Dashain ,Tihar & Chhat",
//   "2024-10-5": "Dashain ,Tihar & Chhat",
//   "2024-10-6": "Dashain ,Tihar & Chhat",
//   "2024-10-7": "Dashain ,Tihar & Chhat",
//   "2024-10-8": "Dashain ,Tihar & Chhat",
//   "2024-10-9": "Dashain ,Tihar & Chhat",
//   "2024-10-10": "Dashain ,Tihar & Chhat",
//   "2024-10-11": "Dashain ,Tihar & Chhat",
//   "2024-10-12": "Dashain ,Tihar & Chhat",
//   "2024-10-13": "Dashain ,Tihar & Chhat",
//   "2024-10-14": "Dashain ,Tihar & Chhat",
//   "2024-10-15": "Dashain ,Tihar & Chhat",
//   "2024-10-16": "Dashain ,Tihar & Chhat",
//   "2024-10-17": "Dashain ,Tihar & Chhat",
//   "2024-10-18": "Dashain ,Tihar & Chhat",
//   "2024-10-19": "Dashain ,Tihar & Chhat",
//   "2024-10-20": "Dashain ,Tihar & Chhat",
//   "2024-10-21": "Dashain ,Tihar & Chhat",
//   "2024-10-22": "Dashain ,Tihar & Chhat",
//   "2024-10-23": "Dashain ,Tihar & Chhat",
//   "2024-10-24": "Dashain ,Tihar & Chhat",
//   "2024-10-25": "Dashain ,Tihar & Chhat",
//   "2024-10-26": "Dashain ,Tihar & Chhat",
//   "2024-10-27": "Dashain ,Tihar & Chhat",
//   "2024-10-28": "Dashain ,Tihar & Chhat",
//   "2024-10-29": "Dashain ,Tihar & Chhat",
//   "2024-10-30": "Dashain ,Tihar & Chhat",
//   "2024-10-31": "Dashain ,Tihar & Chhat",
//   "2024-10-1": "Dashain ,Tihar & Chhat",
//   "2024-10-2": "Dashain ,Tihar & Chhat",
//   "2024-11-3": "Dashain ,Tihar & Chhat",
//   "2024-11-4": "Dashain ,Tihar & Chhat",
//   "2024-11-5": "Dashain ,Tihar & Chhat",
//   "2024-11-6": "Dashain ,Tihar & Chhat",
//   "2024-11-7": "Dashain ,Tihar & Chhat",
//   "2024-11-8": "Dashain ,Tihar & Chhat",
//   "2024-11-9": "Dashain ,Tihar & Chhat",
//   "2025-1-5": "Winter Vacation",
//   "2025-1-6": "Winter Vacation",
//   "2025-1-7": "Winter Vacation",
//   "2025-1-8": "Winter Vacation",
//   "2025-1-9": "Winter Vacation",
//   "2025-1-10": "Winter Vacation",
//   "2025-1-11": "Winter Vacation",
//   "2025-1-12": "Winter Vacation",
//   "2025-1-13": "Winter Vacation",
//   "2025-1-14": "Winter Vacation",
//   "2025-1-15": "Winter Vacation",
//   "2025-1-16": "Winter Vacation",
//   "2025-1-17": "Winter Vacation",
//   "2025-1-18": "Winter Vacation",
//   "2025-1-19": "Winter Vacation",
//   "2025-1-20": "Winter Vacation",
//   "2025-1-21": "Winter Vacation",
//   "2025-1-22": "Winter Vacation",
//   "2025-1-23": "Winter Vacation",
//   "2025-1-24": "Winter Vacation",
//   "2025-1-25": "Winter Vacation"
// };

const holidays = {
  "2024-4-13": "Nepali New Year",
  "2024-4-17": "Ram Nawami",
  "2024-5-1": "Labor Day",
  "2024-5-8": "Mother's Day",
  "2024-5-23": "Buddha jayanti",
  "2024-5-28": "Republic Day",
  "2024-6-12": "Sithi-Nakha",
  "2024-8-19": "Janai Purnima",
  "2024-8-20": "Gai Jatra",
  "2024-8-26": "Krishna Janmastami",
  "2024-9-2": "Father's Day",
  "2024-9-6": "Teej",
  "2024-9-8": "Rishi Panchami",
  "2024-9-14": "Children's Day",
  "2024-9-17": "Indra Jatra",
  "2024-9-19": "Constitution Day",
  "2024-12-15": "Yomari Punhi",
  "2024-12-25": "Christmas Day",
  "2024-12-30": "Tamu Lhosar",
  "2025-1-29": "Martyr Day",
  "2025-1-30": "Sonam Lhosar",
  "2025-2-3": "Saraswati Pooja",
  "2025-2-19": "Democracy Day",
  "2025-2-26": "Shivarati",
  "2025-2-28": "Gyalpo Lhosar",
  "2025-3-13": "Holi",
  "2025-3-14": "Terai Holi",
  "2025-3-28": " Panchare",

  "2024-7-13": "Summer Vacation",
  "2024-7-14": "Summer Vacation",
  "2024-7-15": "Summer Vacation",
  "2024-7-16": "Summer Vacation",
  "2024-7-17": "Summer Vacation",
  "2024-7-18": "Summer Vacation",
  "2024-7-19": "Summer Vacation",
  "2024-7-20": "Summer Vacation",
  "2024-10-3": "Dashain ,Tihar & Chhat",
  "2024-10-4": "Dashain ,Tihar & Chhat",
  "2024-10-5": "Dashain ,Tihar & Chhat",
  "2024-10-6": "Dashain ,Tihar & Chhat",
  "2024-10-7": "Dashain ,Tihar & Chhat",
  "2024-10-8": "Dashain ,Tihar & Chhat",
  "2024-10-9": "Dashain ,Tihar & Chhat",
  "2024-10-10": "Dashain ,Tihar & Chhat",
  "2024-10-11": "Dashain ,Tihar & Chhat",
  "2024-10-12": "Dashain ,Tihar & Chhat",
  "2024-10-13": "Dashain ,Tihar & Chhat",
  "2024-10-14": "Dashain ,Tihar & Chhat",
  "2024-10-15": "Dashain ,Tihar & Chhat",
  "2024-10-16": "Dashain ,Tihar & Chhat",
  "2024-10-17": "Dashain ,Tihar & Chhat",
  "2024-10-18": "Dashain ,Tihar & Chhat",
  "2024-10-19": "Dashain ,Tihar & Chhat",
  "2024-10-20": "Dashain ,Tihar & Chhat",
  "2024-10-21": "Dashain ,Tihar & Chhat",
  "2024-10-22": "Dashain ,Tihar & Chhat",
  "2024-10-23": "Dashain ,Tihar & Chhat",
  "2024-10-24": "Dashain ,Tihar & Chhat",
  "2024-10-25": "Dashain ,Tihar & Chhat",
  "2024-10-26": "Dashain ,Tihar & Chhat",
  "2024-10-27": "Dashain ,Tihar & Chhat",
  "2024-10-28": "Dashain ,Tihar & Chhat",
  "2024-10-29": "Dashain ,Tihar & Chhat",
  "2024-10-30": "Dashain ,Tihar & Chhat",
  "2024-10-31": "Dashain ,Tihar & Chhat",
  "2024-10-1": "Dashain ,Tihar & Chhat",
  "2024-10-2": "Dashain ,Tihar & Chhat",
  "2024-11-3": "Dashain ,Tihar & Chhat",
  "2024-11-4": "Dashain ,Tihar & Chhat",
  "2024-11-5": "Dashain ,Tihar & Chhat",
  "2024-11-6": "Dashain ,Tihar & Chhat",
  "2024-11-7": "Dashain ,Tihar & Chhat",
  "2024-11-8": "Dashain ,Tihar & Chhat",
  "2024-11-9": "Dashain ,Tihar & Chhat",
  "2025-1-5": "Winter Vacation",
  "2025-1-6": "Winter Vacation",
  "2025-1-7": "Winter Vacation",
  "2025-1-8": "Winter Vacation",
  "2025-1-9": "Winter Vacation",
  "2025-1-10": "Winter Vacation",
  "2025-1-11": "Winter Vacation",
  "2025-1-12": "Winter Vacation",
  "2025-1-13": "Winter Vacation",
  "2025-1-14": "Winter Vacation",
  "2025-1-15": "Winter Vacation",
  "2025-1-16": "Winter Vacation",
  "2025-1-17": "Winter Vacation",
  "2025-1-18": "Winter Vacation",
  "2025-1-19": "Winter Vacation",
  "2025-1-20": "Winter Vacation",
  "2025-1-21": "Winter Vacation",
  "2025-1-22": "Winter Vacation",
  "2025-1-23": "Winter Vacation",
  "2025-1-24": "Winter Vacation",
  "2025-1-25": "Winter Vacation"
};


// get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

// function to render days
function renderCalendar() {
  // get prev month current month and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;


  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its today then add today class
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today
      days += `<div class="day today" id="${currentYear}-${currentMonth + 1}-${i}">${i}</div>`;
    } else {
      //else dont add today
      days += `<div class="day " id="${currentYear}-${currentMonth + 1}-${i}" >${i}</div>`;
      // console.logs(i)
    }
  }

  // next MOnth days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;

  showEvents()
  showHoliday();
  // console.log(currentMonth + 1,"-",currentYear)
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // if month gets greater that 11 make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar
  renderCalendar();
});

// prev monyh btn
prevBtn.addEventListener("click", () => {
  // increase by one
  currentMonth--;
  // check if let than 0 then make it 11 and deacrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // rerender calendar
  renderCalendar();

});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

function showHoliday() {

  for (const date in holidays) {
   
    const holidayName = holidays[date];
    // console.log(holidayName)

    const element = document.getElementById(date);
    // console.log(element)

    if (element) {
      element.style.color = 'red'

      element.addEventListener('click', () => {
        displayEvent(element, date, holidayName)        
      })
      
    }
  }
}


function showEvents() {

  for (const date in events) {
   
    const holidayName = events[date];
    // console.log(holidayName)

    const element = document.getElementById(date);
    // console.log(element)

    if (element) {
      element.style.color = 'black';
      element.style.backgroundColor = '#8080805c';

      element.addEventListener('click', () => {
        displayEvent(element, date, holidayName)        
      })
      
    }
  }
}

function displayEvent(eventElement, dateOfEvent , eventName){
  selectedEvent.style.display = 'flex';
  
  selectedDay.textContent = eventElement.textContent;
  eventDate.textContent = dateOfEvent;
  eventTitle.textContent = eventName;
  
}