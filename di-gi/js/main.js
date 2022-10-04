const arrowForward = document.querySelector('.arrow-forward')

if (arrowForward) {
  arrowForward.addEventListener('click', carouselForward)
} else {
  console.log('arrowForward is null')
}

const backForward = document.querySelector('.arrow-back')

if (backForward) {
  backForward.addEventListener('click', carouselBack)
} else {
  console.log('backForward is null')
}

function carouselForward() {
  alert('carouselForward')
  const activeElement = document.querySelector('.active-opacity-carousel')
  const firstElement = document.querySelector('.opacity-carousel-1')
  const nextElement = activeElement.nextElementSibling

  activeElement.classList.remove('active-opacity-carousel')
  if (nextElement != null) {
    nextElement.classList.add('active-opacity-carousel')
  } else {
    firstElement.classList.add('active-opacity-carousel')
  }
}

function carouselBack() {
  const activeElement = document.querySelector('.active-opacity-carousel')
  const lastElement = document.querySelector('.opacity-carousel-3')
  const prevElement = activeElement.previousElementSibling

  activeElement.classList.remove('active-opacity-carousel')
  if (prevElement != null) {
    prevElement.classList.add('active-opacity-carousel')
  } else {
    lastElement.classList.add('active-opacity-carousel')
  }
}
