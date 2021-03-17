'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replacePhoto from './modules/replacePhoto';
import validForm from './modules/validForm';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import sendForm2 from './modules/sendForm2';
import sendForm3 from './modules/sendForm3';

    //Time
    countTimer('04 july 2021');
    //меню
    toggleMenu();
    //popup
    togglePopUp();
    //табы
    tabs();
    //слайдер
    slider();
    //замена картинки
    replacePhoto();

    //валидация формы
    //ввод только цифр в калькулятор
    validForm();
    //калькулятор
    calc(100);

    //send-ajax-form
    // метод Fetch
    sendForm();
    
    sendForm2();
    
    sendForm3();