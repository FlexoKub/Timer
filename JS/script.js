

window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Timer
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
    countTimer('04 july 2020');
    // setInterval(countTimer, 1000, '01 april 2021')
    //меню
    const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        wrapMenu = document.querySelector('wrap'),
        menu = document.querySelector('menu');
        // closeBtn = document.querySelector('.close-btn'),
        //список меню
        // menuItem = menu.querySelectorAll('ul>li');
        //ф-я открытия и закрытия меню
    const handlerMenu = () => {
        //при помощи CSS
        wrapMenu.classList.toggle('wrap-menu');
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);
    // menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));

    wrapMenu.addEventListener('click', (event)=>{
        let target = event.target;
        //закрытие на крестик, вне меню, на пункт меню
        if(target.classList.contains('close-btn')){
            handlerMenu();
        } else if(target.classList.contains('wrap-menu')){
            handlerMenu();}
        else {
            target = target.closest('a');
            if(target) {
                handlerMenu();
            }
        }
        });
        
    };
    toggleMenu();

    //popup

    const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');
        // popupClose = document.querySelector('.popup-close');
       

        
        popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            
            popup.style.display = 'block';
            popup.style.opacity = 0;
            requestAnimationFrame(function() {
            popup.style.transition = 'opacity 3s ease 0.5s';
            popup.style.opacity = 1;
            });
        });
    });
    // popupClose.addEventListener('click', () => {
    //     // popup.style.opacity = 1;
    //     requestAnimationFrame(function() {
    //         popup.style.transition = 'opacity 3s ease 1s';
    //         popup.style.opacity = 0;
    //         popup.style.display = 'none';
    //     });
    // });
    //клик на подложку и закрытие окна
    popup.addEventListener('click', (event)=>{
        let target = event.target;
        //закрытие на крестик
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target) {
                popup.style.display = 'none';
            }
        }

        });
    };
    togglePopUp();

    //табы

    const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

        //ф-я меняет контент
        const toggleTabContent = (index) => {
            for(let i=0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            //элемент на котором произошло событие
            let target =event.target;
            //новый способ
            //проверяем селектор если нет поднимаемся выше к родителю
            target = target.closest('.service-header-tab');
            //поверка
            if(target){
                //проверяем на какой tab кликнули
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
                
            }
             //старый способ
            /*while(target !== tabHeader) {
                console.log('target: ', target);

                //поверка
                if(target.classList.contains('service-header-tab')){
                    //проверяем на какой tab кликнули
                    tab.forEach((item, i) => {
                        if(item === target) {
                            toggleTabContent(i);
                        }
                    });
                    return;
                }
                //присваиваем событию родителя
                target = target.parentNode;
            }*/
        } );
    };
    tabs();

    //слайдер

    const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        // dot = document.querySelectorAll('.dot'),
        slider = document.querySelector('.portfolio-content'),
        ul = document.querySelector('.portfolio-dots');

        
        
        const newDot = () => {
            for (let i=0; i<=slide.length; i++){
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                ul.append(newDot);
            }
        };
        newDot();
        const dot = document.querySelectorAll('.dot');

    //номер слайда
    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };


    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide,currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    startSlide(4000);
    //кнопки next & prev
    slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    //ограничение входа по классам
    if(!target.matches('.portfolio-btn, .dot')){
        return;
    }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
    //цель события
    if(target.matches('#arrow-right')){
        currentSlide++;
    } else if(target.matches('#arrow-left')){
        currentSlide--;
    } else if (target.matches('.dot')){
        dot.forEach((elem, index) => {
            if(elem === target){
                currentSlide = index;
            }
        });
    }
    //условия продолжения
    if(currentSlide >= slide.length){
        currentSlide = 0;
    }
    if(currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide,currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    //наведение на стрелки или точки
    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    };
    slider();

    //замена картинки

    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach((elem) => {
        elem.addEventListener('mouseenter', (event) => {
                event.target.src = event.target.dataset.img;
            });
    });

    commandPhoto.forEach((elem) => {
        elem.addEventListener('mouseout', (event) => {
                const attr = elem.getAttribute('src');
                event.target.src = attr.replace(/a(?=\.)/, '');
            });
    });
    
    //ввод только цифр в калькулятор
    const calcItem = document.querySelectorAll('.calc-item');
    calcItem.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g, '');
        });
    });

    //валидация формы

        const funcName = function(event) {
            const target = event.target;
            target.value = target.value.replace(/\w|[!@#$%^&*()+=|";:?`~№,.-]/g, '');
        };
        const funcNameBlur = function(event) {
            const target = event.target;
            //замена больше двух пробелов на один
            target.value = target.value.replace(/ {2,}/g, ' ');
            //все буквы маленькие
            target.value = target.value.replace(/[А-Я]*/gi, (match) => match.toLowerCase());
            //первая буква в строке большая
            target.value = target.value.replace(/^./gi, (match) => match.toUpperCase());
            //большая буква перед пробелом
            target.value = target.value.replace(/.(?<= )./gi, (match) => match.toUpperCase());
        };
        const funcEmail = function(event) {
            const target = event.target;
            target.value = target.value.replace(/[^A-Za-z@-_.]/g, '');
        };
        const funcPhone = function(event) {
            const target = event.target;
            target.value = target.value.replace(/[^+0-9]/, '');
        };

    const form1Name = document.getElementById('form1-name'),
        form1Email = document.getElementById('form1-email'),
        form1Phone = document.getElementById('form1-phone');

        form1Name.addEventListener('input', funcName);
        form1Name.addEventListener('blur', funcNameBlur);
        form1Email.addEventListener('input', funcEmail);
        form1Phone.addEventListener('input', funcPhone);
        
    const form2Name = document.getElementById('form2-name'),
        form2Email = document.getElementById('form2-email'),
        form2Phone = document.getElementById('form2-phone'),
        form2Message = document.getElementById('form2-message');
    
    form2Name.addEventListener('input', funcName);
    form2Name.addEventListener('blur', funcNameBlur);
    form2Email.addEventListener('input', funcEmail);
    form2Phone.addEventListener('input', funcPhone);
    
    form2Message.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^А-Яа-яЁё_!-@#$%^&**()+=|`~ ]/g, '');
        });
    form2Message.addEventListener('blur', (event) => {
            const target = event.target;
            target.value = target.value.replace(/ {2,}/g, ' ');
            target.value = target.value.replace(/^-*/, '');
            target.value = target.value.replace(/-*$/, '');
            target.value = target.value.replace(/-{2,}/g, '-');
            target.value = target.value.replace(/[А-Я]*/gi, (match) => match.toLowerCase());
            target.value = target.value.replace(/^./gi, (match) => match.toUpperCase());
            // elem.value = elem.value.match(/\+?[78]([-()]*\d){10}/g);
        });

    const form3Name = document.getElementById('form3-name'),
        form3Phone = document.getElementById('form3-phone'),
        form3Email = document.getElementById('form3-email');

    form3Name.addEventListener('input', funcName);
    form3Name.addEventListener('blur', funcNameBlur);
    form3Email.addEventListener('input', funcEmail);
    form3Phone.addEventListener('input', funcPhone);


    //калькулятор

    const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

                if(calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }

                if(calcDay.value && calcDay.value < 5){
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10){
                    dayValue *= 1.5;
                }

                if(typeValue && squareValue){
                    total = price * typeValue * squareValue * countValue * dayValue;
                }
                totalValue.textContent = total;
            

        };

        calcBlock.addEventListener('change', (event) => {
        
        const target = event.target;

        // if(target.matches('.calc-type') || target.matches('.calc-square') || 
        // target.matches('.calc-day') || target.matches('.calc-count')){
        //     console.log(1);
        // }
        // if(target === calcType || target === calcSquare ||
        //     target === calcDay || target ===calcCount){
        //         console.log(1);
            // }
        if(target.matches('select') || target.matches('input')){
            countSum();
        }
    });
    };
    calc(100);

    //send-ajax-form
    /*
    const sendForm = () => {
        //добавляем сообщения 
        //но вместо них можно сделать анимацию или всплывающее окно
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо мы скоро с вами свяжемся!';
        const form = document.getElementById('form1');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';

        const postData = (formData) => {

            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                //добавляем событие при смене статуса пишем сообщения пользователю
                request.addEventListener('readystatechange', () => {
                    
                    //дожидаемся статуса
                    if(request.readyState !== 4) {
                        return;
                    }
                    if(request.status === 200) {
                        resolve();
                        
                    } else {
                        reject(request.status);
                        //ошибка
                    }
                });
    
                //метод отправки и URL
                request.open('POST', './server.php');
                //настройка заголовка - Имя'Content-Type' - Значение 'multipart/form-data'
                request.setRequestHeader('Content-Type', 'multipart/form-data');
                //настройка заголовка JSON формата
                // request.setRequestHeader('Content-Type', 'application/json');
    
                //получение данных формы с ОБЯЗАТЕЛЬНЫМ аттриб name
                
                // console.log(body);
                //отправка на сервер formData
                request.send(formData);
                //отправка на сервер JSON
                // request.send(JSON.stringify(body));

            });

        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            //если сервер не понимает формат formData то переводим в JSON
            let body = {};
            //достаем значения из formData
            // for(let val of formData.entries()){
            //     // console.log(val);
            //     //записываем в body
            //     body[val[0]] = val[1];
            // }
            //через forEach
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(formData)
                .then(() => {
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 2rem; color: red';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                }); 
            
            form1Name.value = '';
            form1Email.value = '';
            form1Phone.value = '';
        });

        
    };
    sendForm();
    */

       //на промисах
    /*
    const sendForm = () => {
        //добавляем сообщения 
        //но вместо них можно сделать анимацию или всплывающее окно
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо мы скоро с вами свяжемся!';
        const form = document.getElementById('form1');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';



        const postData = (formData) => {
            
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                //добавляем событие при смене статуса пишем сообщения пользователю
                request.addEventListener('readystatechange', () => {
                    
                    //дожидаемся статуса
                    if(request.readyState !== 4) {
                        return;
                    }
                    if(request.status === 200) {
                        resolve();
                        
                    } else {
                        reject(request.status);
                        //ошибка
                    }
                });
    
                //метод отправки и URL
                request.open('POST', './server.php');
                //настройка заголовка - Имя'Content-Type' - Значение 'multipart/form-data'
                request.setRequestHeader('Content-Type', 'multipart/form-data');
                //настройка заголовка JSON формата
                // request.setRequestHeader('Content-Type', 'application/json');
    
                //получение данных формы с ОБЯЗАТЕЛЬНЫМ аттриб name
                
                // console.log(body);
                //отправка на сервер formData
                request.send(formData);
                //отправка на сервер JSON
                // request.send(JSON.stringify(body));

            });

        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            //если сервер не понимает формат formData то переводим в JSON
            let body = {};
            //достаем значения из formData
            // for(let val of formData.entries()){
            //     // console.log(val);
            //     //записываем в body
            //     body[val[0]] = val[1];
            // }
            //через forEach
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(formData)
                .then(() => {
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 2rem; color: red';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                }); 
            
            form1Name.value = '';
            form1Email.value = '';
            form1Phone.value = '';
        });

        
    };
    sendForm();
    */
    
    // метод Fetch
    const sendForm = () => {
        //добавляем сообщения 
        //но вместо них можно сделать анимацию или всплывающее окно
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо мы скоро с вами свяжемся!';
        const form = document.getElementById('form1');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';



        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });

        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            //если сервер не понимает формат formData то переводим в JSON
            let body = {};
            //достаем значения из formData
            // for(let val of formData.entries()){
            //     // console.log(val);
            //     //записываем в body
            //     body[val[0]] = val[1];
            // }
            //через forEach
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(formData)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 2rem; color: red';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                }); 
            statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
            form1Name.value = '';
            form1Email.value = '';
            form1Phone.value = '';
        });

        
    };
    sendForm();

    const sendForm2 = () => {
        //добавляем сообщения 
        //но вместо них можно сделать анимацию или всплывающее окно
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо мы скоро с вами свяжемся!';
        const form = document.getElementById('form2');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            //если сервер не понимает формат formData то переводим в JSON
            let body = {};
            //достаем значения из formData
            // for(let val of formData.entries()){
            //     // console.log(val);
            //     //записываем в body
            //     body[val[0]] = val[1];
            // }
            //через forEach
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
                .catch((error) => {
                statusMessage.style.cssText = 'font-size: 2rem; color: red';
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
            form2Name.value = '';
            form2Email.value = '';
            form2Phone.value = '';
            form2Message.value = '';
        });
    };
    sendForm2();
    
    const sendForm3 = () => {
        //добавляем сообщения 
        //но вместо них можно сделать анимацию или всплывающее окно
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо мы скоро с вами свяжемся!';
        const form = document.getElementById('form3');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
        
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            //если сервер не понимает формат formData то переводим в JSON
            let body = {};
            //достаем значения из formData
            // for(let val of formData.entries()){
            //     // console.log(val);
            //     //записываем в body
            //     body[val[0]] = val[1];
            // }
            //через forEach
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body) 
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 2rem; color: red';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
            });
            statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
            form3Name.value = '';
            form3Email.value = '';
            form3Phone.value = '';
        });

        
        
    };
    sendForm3();

});