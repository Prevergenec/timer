'use strict';

window.addEventListener('DOMContentLoaded', () => {

let timerCount = document.querySelector('.timer_count'),
    i = 0;

function timer() {
	setTimeout(function() {
        i = ++i;
        timerCount.innerText = i;
		//console.log(++i);
		
		timer(); 
	}, 1000);
}
timer();

// OR

// setInterval(() => console.log(++i), 1000);

});