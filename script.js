require('es6-promise').polyfill(); 8.5(gzipped: 3.1)
import 'nodelist-foreach-polyfill'; 1.1(gzipped: 555)




import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';/*  */


window.addEventListener('DOMContentLoaded', function () {


    tabs();
    modal();
    timer();
    cards();
    forms();
    slider();

});


