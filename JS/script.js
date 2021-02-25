

window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerDay = document.querySelector('#timer-day'),
            timerNumbers = document.querySelectorAll('.timer-numbers');

            function getTimeRemaining(){
                //получаем время в милисекундах
                let dateStop = new Date(deadline).getTime(),
                
                //разница в секундах
                dateNow = new Date().getTime(),
                timeRemainang = (dateStop - dateNow) / 1000,
                //секунды от целого времени - остаток от деления на 60
                seconds = Math.floor(timeRemainang % 60),
                minutes = Math.floor((timeRemainang / 60) % 60),
                hours = Math.floor(timeRemainang / 60 / 60) % 24,
                day = Math.floor(timeRemainang / 60 / 60 / 24);
               
                return {timeRemainang, day, hours, minutes, seconds};
            }
            
                //вывод таймера
            function updateClock(){
                let timer = getTimeRemaining();
                //вставляем значения
                if(timer.hours<10) {timerHours.textContent = '0' + timer.hours;}
                // else if (timer.hours===0) {timerHours.textContent = '00';}
                else {timerHours.textContent = timer.hours;}
                if(timer.minutes<10) {timerMinutes.textContent = '0' + timer.minutes;}
                // else if (timer.minutes===0) {timerMinutes.textContent = '00';}
                else{timerMinutes.textContent = timer.minutes;}
                if(timer.seconds<10) {timerSeconds.textContent = '0' + timer.seconds;}
                // else if (timer.seconds===0) {timerSeconds.textContent = '00';}
                else{timerSeconds.textContent = timer.seconds;}
                if(timer.day<10) {timerDay.textContent = '0' + timer.day;}
                // else if (timer.day===0) {timerDay.textContent = '00';}
                else{timerDay.textContent = timer.day;}
                if(timer.hours<=0 && timer.minutes<=0 && timer.seconds<=0 &&
                    timer.day<=0) {
                        timerHours.textContent = '00';
                        timerMinutes.textContent = '00';
                        timerSeconds.textContent = '00';
                        timerDay.textContent = '00';
                        timerNumbers.forEach(e => {
                            e.style.color = 'red';
                        });
                    }
                if(timer.timeRemainang > 0) {
                    setInterval(updateClock, 1000);
                }
            }
            updateClock();
            
    }
    countTimer('26 february 2021');
    // setInterval(countTimer, 1000, '01 april 2021')
});
