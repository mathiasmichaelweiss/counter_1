'use strict';

const number = document.querySelector('.num'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus');

function counter() {
    let x = 0;


    plus.addEventListener('click', () => {
        number.textContent = ++x;
    });
    minus.addEventListener('click', () => {
        if (x >= 1) {
            number.textContent = --x;
        }
    });

}

counter();