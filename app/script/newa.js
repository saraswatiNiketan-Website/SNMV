const slides = document.querySelector('.slides');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slidesArray = slides.children;
    if (index >= slidesArray.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = 'none';
    }
    slidesArray[currentSlide].style.display = 'block';
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}
startSlideShow(); // Start the slideshow when the script loads