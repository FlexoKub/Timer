/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateTimer"]("main",{

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      timerDay = document.querySelector('#timer-day'),\n      timerMonth = document.querySelector('#timer-month'),\n      timerNumbers = document.querySelectorAll('.timer-numbers');\n\n  function getTimeRemaining() {\n    //получаем время в милисекундах\n    var dateStop = new Date(deadline).getTime(),\n        //разница в секундах\n    dateNow = new Date().getTime(),\n        timeRemainang = (dateStop - dateNow) / 1000,\n        //секунды от целого времени - остаток от деления на 60\n    seconds = Math.floor(timeRemainang % 60),\n        minutes = Math.floor(timeRemainang / 60 % 60),\n        hours = Math.floor(timeRemainang / 60 / 60) % 24,\n        day = Math.floor(timeRemainang / 60 / 60 / 24) % 30,\n        month = Math.floor(timeRemainang / 60 / 60 / 24 / 30);\n    return {\n      timeRemainang: timeRemainang,\n      month: month,\n      day: day,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  } //вывод таймера\n\n\n  function updateClock() {\n    var idInterval = setInterval(updateClock, 1000);\n    var timer = getTimeRemaining();\n    console.log('вызов'); //вставляем значения\n\n    if (timer.month < 10) {\n      timerDay.textContent = '0' + timer.month;\n    } // else if (timer.day===0) {timerDay.textContent = '00';}\n    else {\n        timerMonth.textContent = timer.month;\n      }\n\n    if (timer.day < 10) {\n      timerDay.textContent = '0' + timer.day;\n    } // else if (timer.day===0) {timerDay.textContent = '00';}\n    else {\n        timerDay.textContent = timer.day;\n      }\n\n    if (timer.hours < 10) {\n      timerHours.textContent = '0' + timer.hours;\n    } // else if (timer.hours===0) {timerHours.textContent = '00';}\n    else {\n        timerHours.textContent = timer.hours;\n      }\n\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = '0' + timer.minutes;\n    } // else if (timer.minutes===0) {timerMinutes.textContent = '00';}\n    else {\n        timerMinutes.textContent = timer.minutes;\n      }\n\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = '0' + timer.seconds;\n    } // else if (timer.seconds===0) {timerSeconds.textContent = '00';}\n    else {\n        timerSeconds.textContent = timer.seconds;\n      } // if(timer.timeRemainang > 0) {\n    //     setInterval(updateClock, 1000);\n    // }\n\n\n    if (timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0 && timer.day <= 0) {\n      clearInterval(idInterval);\n      timerMonth.textContent = '00';\n      timerDay.textContent = '00';\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n      timerNumbers.forEach(function (e) {\n        e.style.color = 'red';\n      });\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://Timer/./src/modules/countTimer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef9b86a18818de1dd2f8")
/******/ })();
/******/ 
/******/ }
);