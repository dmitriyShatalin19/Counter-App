let button = document.querySelector('.js-buttonPlus');
let buttonReset = document.querySelector('.js-buttonReset');
let buttonMinus = document.querySelector('.js-buttonMinus');
let counterText = document.querySelector('.counter');
let counter = 0;

const minCounter = 0;
const maxCounter = 50;

button.addEventListener('click', function() {
  if (counter < maxCounter) {
    counter++;
    counterText.innerText = counter;
  } else if (counter === maxCounter) {
    alert('Это предел!')
  }
});

buttonMinus.addEventListener('click', function() {
  if (counter > minCounter) {
    counter--;
    counterText.innerText = counter;
  }
});

buttonReset.addEventListener('click', function() {
  counter = 0;
  counterText.innerText = counter;
});