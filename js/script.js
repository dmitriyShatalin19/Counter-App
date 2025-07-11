let button = document.querySelector('.js-buttonPlus'); // позволяте вытаскиывать элемент из index.html в script.js
let buttonReset = document.querySelector('.js-buttonReset');
let buttonMinus = document.querySelector('.js-buttonMinus')
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function() {
    counter ++;
    counterText.innerText = counter;
});

buttonMinus.addEventListener('click', function() {
    if (counter > 0) {
        counter --;
        counterText.innerText = counter;
    }
})

buttonReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});


