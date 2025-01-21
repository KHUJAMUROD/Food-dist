/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


// 'use strict';


// const inputRub = document.querySelector('#rub'),
//     inputUsd = document.querySelector('#usd');

//     inputRub.addEventListener('input', () => {
//         const request = new XMLHttpRequest();  


//         // request.open(method, url, async, login, pass);
//         request.open('GET', 'Ajax/current.json');   
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         request.send(); 


        
//         request.addEventListener('load', () => {    
//             if (request.status === 200) {
//                 const data = JSON.parse(request.response);
//                 inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//             } else {
//                 inputUsd.value = 'Что-то пошло не так';
//             }
//         });

//     });





const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});
/******/ })()
;
//# sourceMappingURL=bundle.js.map