let button = document.querySelector('.button'); // позволяте вытаскиывать элемент из index.html в script.js
let buttonReset = document.querySelector('.buttonReset');
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function() {
    counter ++;
    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});
