// document.addEventListener('DOMContentLoaded', clicking)

// function clicking() {

// }

const buttonCss = document.querySelector('.button-css')
const buttonJs = document.querySelector('.button-js')
const buttonCssJs = document.querySelector('.button-css-js')

buttonCss.addEventListener('click', buttonCssClick)
buttonJs.addEventListener('click', buttonJsClick)
buttonCssJs.addEventListener('click', buttonCssJsClick)

function buttonCssClick() {
  const square = document.querySelector('.black-square')
  const squares = document.querySelectorAll('.black-square')

  // square.style.display = square.style.display == 'none' ? 'block' : 'none'

  squares.forEach((el) => {
    el.style.display = el.style.display == 'none' ? 'block' : 'none'
  })
}

function buttonJsClick() {
  const square = document.querySelector('.black-square')
  const squares = document.querySelectorAll('.black-square')

  //   if (square) {
  //     document.querySelector('.black-square').remove()
  //   } else {
  //     const squareCreate = document.createElement('div')
  //     const container = document.querySelector('.container')
  //     container.insertBefore(squareCreate, container.children[0])
  //     squareCreate.className = 'black-square'
  //   }

  let squaresCounter = 0
  const squareCreate = document.createElement('div')
  const containerSquares = document.querySelector('.squares')

  if (squares.length >= 5) {
    console.log('squares' + squares.length)
    squares.forEach((el) => {
      el.remove()
    })
  } else {
    console.log('< 5 squares')
    for (let index = 0; index < 5; index++) {
        console.log(index)
      containerSquares.insertBefore(squareCreate, containerSquares.children[0])
      squareCreate.className = 'black-square'
    }
  }
}

function buttonCssJsClick() {
  const hidden = document.querySelector('.vis-hidden')
  const hiddens = document.querySelectorAll('.vis-hidden')

  hidden
    ? document.querySelector('.black-square').classList.remove('vis-hidden')
    : document.querySelector('.black-square').classList.add('vis-hidden')
}
