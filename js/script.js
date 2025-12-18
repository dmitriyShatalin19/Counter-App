let buttonPluse = document.querySelector('.pluse');
let buttonReset = document.querySelector('.reset');
let counterText = document.querySelector('.counter');

let counter = 0;

buttonPluse.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
})

// DOM - Document Object Model