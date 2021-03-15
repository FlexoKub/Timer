'use strict';
function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        timerDay = document.querySelector('#timer-day'),
        timerMonth = document.querySelector('#timer-month'),
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
            day = Math.floor(timeRemainang / 60 / 60 / 24) % 30,
            month = Math.floor(timeRemainang / 60 / 60 / 24 / 30);
           
            return {timeRemainang, month, day, hours, minutes, seconds};
        }
        
            //вывод таймера
        function updateClock(){
            let timer = getTimeRemaining();
            let idInterval = setInterval(updateClock, 1000);
            //вставляем значения

            if(timer.month<10) {timerDay.textContent = '0' + timer.month;}
            // else if (timer.day===0) {timerDay.textContent = '00';}
            else{timerMonth.textContent = timer.month;}
            if(timer.day<10) {timerDay.textContent = '0' + timer.day;}
            // else if (timer.day===0) {timerDay.textContent = '00';}
            else{timerDay.textContent = timer.day;}
            if(timer.hours<10) {timerHours.textContent = '0' + timer.hours;}
            // else if (timer.hours===0) {timerHours.textContent = '00';}
            else {timerHours.textContent = timer.hours;}
            if(timer.minutes<10) {timerMinutes.textContent = '0' + timer.minutes;}
            // else if (timer.minutes===0) {timerMinutes.textContent = '00';}
            else{timerMinutes.textContent = timer.minutes;}
            if(timer.seconds<10) {timerSeconds.textContent = '0' + timer.seconds;}
            // else if (timer.seconds===0) {timerSeconds.textContent = '00';}
            else{timerSeconds.textContent = timer.seconds;}
            if(timer.timeRemainang > 0) {
                
                setInterval(updateClock, 1000);
            }
            if(timer.hours<=0 && timer.minutes<=0 && timer.seconds<=0 &&
                timer.day<=0) {
                    clearInterval(idInterval);
                    timerMonth.textContent = '00';
                    timerDay.textContent = '00';
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                    timerNumbers.forEach(e => {
                        e.style.color = 'red';
                    });
                }
        }
        updateClock();
        
}

export default countTimer;