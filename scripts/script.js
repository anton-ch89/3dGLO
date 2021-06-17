window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

                if (hours < 0 && minutes < 0 && seconds < 0){
                    seconds = '00';
                    minutes = '00';
                    hours = '00';
                }
                
                if (hours < 10 || minutes < 10 ||  seconds < 10) {
                    seconds = ('0' + seconds).slice(-2);
                    minutes = ('0' + minutes).slice(-2);
                    hours = ('0' + hours).slice(-2);
                }
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            let timer = getTimeRemaining();
    
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;   
            }
        
       let interval = setInterval(updateClock, 1000);
      
    }
    countTimer('19 june 2021 02:26:00');
});