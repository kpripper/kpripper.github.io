window.onload = function () {
  const backForward = document.querySelector('.arrow-back')
  const arrowForward = document.querySelector('.arrow-forward')

  arrowForward.addEventListener('click', carouselForward)
  backForward.addEventListener('click', carouselBack)

  // if (arrowForward) {
  //   arrowForward.addEventListener('click', carouselForward)
  //   console.log('arrowForward is')
  // } else {
  //   console.log('arrowForward is null')
  // }

  // if (backForward) {
  //   backForward.addEventListener('click', carouselBack)
  //   console.log('backForward is')
  // } else {
  //   console.log('backForward is null')
  // }
}

function carouselForward() {
  const activeElement = document.querySelector('.active-opacity-carousel')
  const activeCircle = document.querySelector('.white-circle-border')
  const firstElement = document.querySelector('.opacity-carousel-1')
  const firstCircle = document.querySelector('.white-circle-1')
  const nextElementSlider = activeElement.nextElementSibling
  const nextElementCircle = activeCircle.nextElementSibling

  activeElement.classList.remove('active-opacity-carousel')
  activeCircle.classList.remove('white-circle-border')
  if (nextElementSlider != null) {
    nextElementSlider.classList.add('active-opacity-carousel')
    nextElementCircle.classList.add('white-circle-border')
  } else {
    firstElement.classList.add('active-opacity-carousel')
    firstCircle.classList.add('white-circle-border')
  }
}

function carouselBack() {
  const activeElement = document.querySelector('.active-opacity-carousel')
  const activeCircle = document.querySelector('.white-circle-border')
  const lastElement = document.querySelector('.opacity-carousel-3')
  const lastElementCircle = document.querySelector('.white-circle-3')
  const prevElementSlider = activeElement.previousElementSibling
  const prevElementCircle = activeCircle.previousElementSibling

  activeElement.classList.remove('active-opacity-carousel')
  activeCircle.classList.remove('white-circle-border')  
  if (prevElementSlider != null) {
    prevElementSlider.classList.add('active-opacity-carousel')
    prevElementCircle.classList.add('white-circle-border')
  } else {
    lastElement.classList.add('active-opacity-carousel')
    lastElementCircle.classList.add('white-circle-border')
  }
}
