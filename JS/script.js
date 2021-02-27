

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
                let idInterval = setInterval(updateClock, 1000);
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
                if(timer.timeRemainang > 0) {
                    
                    setInterval(updateClock, 1000);
                }
                if(timer.hours<=0 && timer.minutes<=0 && timer.seconds<=0 &&
                    timer.day<=0) {
                        clearInterval(idInterval);
                        timerHours.textContent = '00';
                        timerMinutes.textContent = '00';
                        timerSeconds.textContent = '00';
                        timerDay.textContent = '00';
                        timerNumbers.forEach(e => {
                            e.style.color = 'red';
                        });
                    }
            }
            updateClock();
            
    }
    countTimer('27 february 2021');
    // setInterval(countTimer, 1000, '01 april 2021')
//меню
const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        //список меню
        menuItem = menu.querySelectorAll('ul>li');
        //ф-я открытия и закрытия меню
    const handlerMenu = () => {
        //при помощи CSS
        menu.classList.toggle('active-menu');
        //     //если true при клике на меню
        //     if(!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        //     menu.style.transform = `translate(0)`;
        // } else {
        //     //закрываем меню
        //     menu.style.transform = `translate(-100%)`;
        // }
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    //цикл клик по пунктам меню
    // for(let i=0; i<menuItem.length; i++){
    //     menuItem[i].addEventListener('click', handlerMenu);
    // }
    menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));
};
toggleMenu();

//popup

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');
       

        
        popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            
            popup.style.display = 'block';
            popup.style.opacity = 0;
            requestAnimationFrame(function() {
    popup.style.transition = 'opacity 3s ease 0.5s';
    popup.style.opacity = 1;
       
    });
        });
        popupClose.addEventListener('click', () => {
            // popup.style.opacity = 1;
            requestAnimationFrame(function() {
                popup.style.display = 'none';
                popup.style.transition = 'opacity 3s ease 1s';
                popup.style.opacity = 0;
            });
        });
    });
};
togglePopUp();



});