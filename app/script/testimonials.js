const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
  (slide,index)=>{
    slide.style.left = `${index * 100}vw`
  }
)

const goPrev =()=>{
  if(counter == 0){
    counter = 5 ;
    slideImage()
    return
  }
  counter--
  slideImage()
}

const goNext =()=>{
  if(counter == 5){
    counter = 0;
    slideImage()
    return
  }
  counter++
  slideImage()
}

const slideImage = ()=>{
  slides.forEach(
    (slide)=>{
      slide.style.transform =`translateX(-${counter *100}vw)`
    }
  )

}


setInterval(()=>{
  // counter +=1
  // slideImage()

  goNext()
},3000)