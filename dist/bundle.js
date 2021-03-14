/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_replacePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/replacePhoto */ \"./src/modules/replacePhoto.js\");\n/* harmony import */ var _modules_validForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validForm */ \"./src/modules/validForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_sendForm2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm2 */ \"./src/modules/sendForm2.js\");\n/* harmony import */ var _modules_sendForm3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm3 */ \"./src/modules/sendForm3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n //Time\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('04 july 2020'); //меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); //замена картинки\n\n(0,_modules_replacePhoto__WEBPACK_IMPORTED_MODULE_5__.default)(); //валидация формы\n//ввод только цифр в калькулятор\n\n(0,_modules_validForm__WEBPACK_IMPORTED_MODULE_6__.default)(); //калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)(100); //send-ajax-form\n// метод Fetch\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_sendForm2__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_modules_sendForm3__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://Timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target; // if(target.matches('.calc-type') || target.matches('.calc-square') || \n    // target.matches('.calc-day') || target.matches('.calc-count')){\n    //     console.log(1);\n    // }\n    // if(target === calcType || target === calcSquare ||\n    //     target === calcDay || target ===calcCount){\n    //         console.log(1);\n    // }\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://Timer/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      timerDay = document.querySelector('#timer-day'),\n      timerMonth = document.querySelector('#timer-month'),\n      timerNumbers = document.querySelectorAll('.timer-numbers');\n\n  function getTimeRemaining() {\n    //получаем время в милисекундах\n    var dateStop = new Date(deadline).getTime(),\n        //разница в секундах\n    dateNow = new Date().getTime(),\n        timeRemainang = (dateStop - dateNow) / 1000,\n        //секунды от целого времени - остаток от деления на 60\n    seconds = Math.floor(timeRemainang % 60),\n        minutes = Math.floor(timeRemainang / 60 % 60),\n        hours = Math.floor(timeRemainang / 60 / 60) % 24,\n        day = Math.floor(timeRemainang / 60 / 60 / 24) % 30,\n        month = Math.floor(timeRemainang / 60 / 60 / 24 / 30);\n    return {\n      timeRemainang: timeRemainang,\n      month: month,\n      day: day,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  } //вывод таймера\n\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    var idInterval = setInterval(updateClock, 1000); //вставляем значения\n\n    if (timer.month < 10) {\n      timerDay.textContent = '0' + timer.month;\n    } // else if (timer.day===0) {timerDay.textContent = '00';}\n    else {\n        timerMonth.textContent = timer.month;\n      }\n\n    if (timer.day < 10) {\n      timerDay.textContent = '0' + timer.day;\n    } // else if (timer.day===0) {timerDay.textContent = '00';}\n    else {\n        timerDay.textContent = timer.day;\n      }\n\n    if (timer.hours < 10) {\n      timerHours.textContent = '0' + timer.hours;\n    } // else if (timer.hours===0) {timerHours.textContent = '00';}\n    else {\n        timerHours.textContent = timer.hours;\n      }\n\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = '0' + timer.minutes;\n    } // else if (timer.minutes===0) {timerMinutes.textContent = '00';}\n    else {\n        timerMinutes.textContent = timer.minutes;\n      }\n\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = '0' + timer.seconds;\n    } // else if (timer.seconds===0) {timerSeconds.textContent = '00';}\n    else {\n        timerSeconds.textContent = timer.seconds;\n      }\n\n    if (timer.timeRemainang > 0) {\n      setInterval(updateClock, 1000);\n    }\n\n    if (timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0 && timer.day <= 0) {\n      clearInterval(idInterval);\n      timerMonth.textContent = '00';\n      timerDay.textContent = '00';\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n      timerNumbers.forEach(function (e) {\n        e.style.color = 'red';\n      });\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://Timer/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/replacePhoto.js":
/*!*************************************!*\
  !*** ./src/modules/replacePhoto.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar replacePhoto = function replacePhoto() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (elem) {\n    elem.addEventListener('mouseenter', function (event) {\n      event.target.src = event.target.dataset.img;\n    });\n  });\n  commandPhoto.forEach(function (elem) {\n    elem.addEventListener('mouseout', function (event) {\n      var attr = elem.getAttribute('src');\n      event.target.src = attr.replace(/a(?=\\.)/, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replacePhoto);\n\n//# sourceURL=webpack://Timer/./src/modules/replacePhoto.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  //добавляем сообщения \n  //но вместо них можно сделать анимацию или всплывающее окно\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо мы скоро с вами свяжемся!';\n  var form = document.getElementById('form1');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      },\n      body: formData\n    });\n  };\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault(); //помещаем div на страницу\n\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage; //пишем запрос на сервер\n\n    var formData = new FormData(form); //если сервер не понимает формат formData то переводим в JSON\n\n    var body = {}; //достаем значения из formData\n    // for(let val of formData.entries()){\n    //     // console.log(val);\n    //     //записываем в body\n    //     body[val[0]] = val[1];\n    // }\n    //через forEach\n\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(formData).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.style.cssText = 'font-size: 2rem; color: red';\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n    form1Name.value = '';\n    form1Email.value = '';\n    form1Phone.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://Timer/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sendForm2.js":
/*!**********************************!*\
  !*** ./src/modules/sendForm2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm2 = function sendForm2() {\n  //добавляем сообщения \n  //но вместо них можно сделать анимацию или всплывающее окно\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо мы скоро с вами свяжемся!';\n  var form = document.getElementById('form2');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault(); //помещаем div на страницу\n\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage; //пишем запрос на сервер\n\n    var formData = new FormData(form); //если сервер не понимает формат formData то переводим в JSON\n\n    var body = {}; //достаем значения из formData\n    // for(let val of formData.entries()){\n    //     // console.log(val);\n    //     //записываем в body\n    //     body[val[0]] = val[1];\n    // }\n    //через forEach\n\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.style.cssText = 'font-size: 2rem; color: red';\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n    form2Name.value = '';\n    form2Email.value = '';\n    form2Phone.value = '';\n    form2Message.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm2);\n\n//# sourceURL=webpack://Timer/./src/modules/sendForm2.js?");

/***/ }),

/***/ "./src/modules/sendForm3.js":
/*!**********************************!*\
  !*** ./src/modules/sendForm3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm3 = function sendForm3() {\n  //добавляем сообщения \n  //но вместо них можно сделать анимацию или всплывающее окно\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо мы скоро с вами свяжемся!';\n  var form = document.getElementById('form3');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault(); //помещаем div на страницу\n\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage; //пишем запрос на сервер\n\n    var formData = new FormData(form); //если сервер не понимает формат formData то переводим в JSON\n\n    var body = {}; //достаем значения из formData\n    // for(let val of formData.entries()){\n    //     // console.log(val);\n    //     //записываем в body\n    //     body[val[0]] = val[1];\n    // }\n    //через forEach\n\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.style.cssText = 'font-size: 2rem; color: red';\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';\n    form3Name.value = '';\n    form3Email.value = '';\n    form3Phone.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm3);\n\n//# sourceURL=webpack://Timer/./src/modules/sendForm3.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      // dot = document.querySelectorAll('.dot'),\n  slider = document.querySelector('.portfolio-content'),\n      ul = document.querySelector('.portfolio-dots');\n\n  var newDot = function newDot() {\n    for (var i = 0; i <= slide.length; i++) {\n      var _newDot = document.createElement('li');\n\n      _newDot.classList.add('dot');\n\n      ul.append(_newDot);\n    }\n  };\n\n  newDot();\n  var dot = document.querySelectorAll('.dot'); //номер слайда\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide(4000); //кнопки next & prev\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target; //ограничение входа по классам\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active'); //цель события\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    } //условия продолжения\n\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  }); //наведение на стрелки или точки\n\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://Timer/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab'); //ф-я меняет контент\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    //элемент на котором произошло событие\n    var target = event.target; //новый способ\n    //проверяем селектор если нет поднимаемся выше к родителю\n\n    target = target.closest('.service-header-tab'); //поверка\n\n    if (target) {\n      //проверяем на какой tab кликнули\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    } //старый способ\n\n    /*while(target !== tabHeader) {\r\n        console.log('target: ', target);\r\n          //поверка\r\n        if(target.classList.contains('service-header-tab')){\r\n            //проверяем на какой tab кликнули\r\n            tab.forEach((item, i) => {\r\n                if(item === target) {\r\n                    toggleTabContent(i);\r\n                }\r\n            });\r\n            return;\r\n        }\r\n        //присваиваем событию родителя\r\n        target = target.parentNode;\r\n    }*/\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://Timer/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      wrapMenu = document.querySelector('wrap'),\n      menu = document.querySelector('menu'); // closeBtn = document.querySelector('.close-btn'),\n  //список меню\n  // menuItem = menu.querySelectorAll('ul>li');\n  //ф-я открытия и закрытия меню\n\n  var handlerMenu = function handlerMenu() {\n    //при помощи CSS\n    wrapMenu.classList.toggle('wrap-menu');\n    menu.classList.toggle('active-menu');\n  };\n\n  btnMenu.addEventListener('click', handlerMenu); // closeBtn.addEventListener('click', handlerMenu);\n  // menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));\n\n  wrapMenu.addEventListener('click', function (event) {\n    var target = event.target; //закрытие на крестик, вне меню, на пункт меню\n\n    if (target.classList.contains('close-btn')) {\n      handlerMenu();\n    } else if (target.classList.contains('wrap-menu')) {\n      handlerMenu();\n    } else {\n      target = target.closest('a');\n\n      if (target) {\n        handlerMenu();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://Timer/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'); // popupClose = document.querySelector('.popup-close');\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      popup.style.opacity = 0;\n      requestAnimationFrame(function () {\n        popup.style.transition = 'opacity 3s ease 0.5s';\n        popup.style.opacity = 1;\n      });\n    });\n  }); // popupClose.addEventListener('click', () => {\n  //     // popup.style.opacity = 1;\n  //     requestAnimationFrame(function() {\n  //         popup.style.transition = 'opacity 3s ease 1s';\n  //         popup.style.opacity = 0;\n  //         popup.style.display = 'none';\n  //     });\n  // });\n  //клик на подложку и закрытие окна\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target; //закрытие на крестик\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://Timer/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validForm.js":
/*!**********************************!*\
  !*** ./src/modules/validForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validForm = function validForm() {\n  var calcItem = document.querySelectorAll('.calc-item');\n  calcItem.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      elem.value = elem.value.replace(/\\D/g, '');\n    });\n  });\n\n  var funcName = function funcName(event) {\n    var target = event.target;\n    target.value = target.value.replace(/\\w|[!@#$%^&*()+=|\";:?`~№,.-]/g, '');\n  };\n\n  var funcNameBlur = function funcNameBlur(event) {\n    var target = event.target; //замена больше двух пробелов на один\n\n    target.value = target.value.replace(/ {2,}/g, ' '); //все буквы маленькие\n\n    target.value = target.value.replace(/[А-Я]*/gi, function (match) {\n      return match.toLowerCase();\n    }); //первая буква в строке большая\n\n    target.value = target.value.replace(/^./gi, function (match) {\n      return match.toUpperCase();\n    }); //большая буква перед пробелом\n\n    target.value = target.value.replace(/.(?<= )./gi, function (match) {\n      return match.toUpperCase();\n    });\n  };\n\n  var funcEmail = function funcEmail(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^A-Za-z@-_.]/g, '');\n  };\n\n  var funcPhone = function funcPhone(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^+0-9]/, '');\n  };\n\n  var form1Name = document.getElementById('form1-name'),\n      form1Email = document.getElementById('form1-email'),\n      form1Phone = document.getElementById('form1-phone');\n  form1Name.addEventListener('input', funcName);\n  form1Name.addEventListener('blur', funcNameBlur);\n  form1Email.addEventListener('input', funcEmail);\n  form1Phone.addEventListener('input', funcPhone);\n  var form2Name = document.getElementById('form2-name'),\n      form2Email = document.getElementById('form2-email'),\n      form2Phone = document.getElementById('form2-phone'),\n      form2Message = document.getElementById('form2-message');\n  form2Name.addEventListener('input', funcName);\n  form2Name.addEventListener('blur', funcNameBlur);\n  form2Email.addEventListener('input', funcEmail);\n  form2Phone.addEventListener('input', funcPhone);\n  form2Message.addEventListener('input', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^А-Яа-яЁё_!-@#$%^&**()+=|`~ ]/g, '');\n  });\n  form2Message.addEventListener('blur', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/ {2,}/g, ' ');\n    target.value = target.value.replace(/^-*/, '');\n    target.value = target.value.replace(/-*$/, '');\n    target.value = target.value.replace(/-{2,}/g, '-');\n    target.value = target.value.replace(/[А-Я]*/gi, function (match) {\n      return match.toLowerCase();\n    });\n    target.value = target.value.replace(/^./gi, function (match) {\n      return match.toUpperCase();\n    }); // elem.value = elem.value.match(/\\+?[78]([-()]*\\d){10}/g);\n  });\n  var form3Name = document.getElementById('form3-name'),\n      form3Phone = document.getElementById('form3-phone'),\n      form3Email = document.getElementById('form3-email');\n  form3Name.addEventListener('input', funcName);\n  form3Name.addEventListener('blur', funcNameBlur);\n  form3Email.addEventListener('input', funcEmail);\n  form3Phone.addEventListener('input', funcPhone);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\n\n//# sourceURL=webpack://Timer/./src/modules/validForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;