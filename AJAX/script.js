'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/current.json');
    // async, login, pass
    request.setRequestHeader('Content-type', 'appLication/json; charset=utf8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status
    // statusText
    // response
    // readyState


});