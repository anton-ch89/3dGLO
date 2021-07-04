'use strict';

import countTimer from './modules/countTimer.js';
import toggleMenu from './modules/toggleMenu.js';
import togglePopUp from './modules/togglePopUp.js';
import scroll from './modules/scroll.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';
import changePhoto from './modules/changePhoto.js';
import calcValidation from './modules/calcValidation.js';
import formValidation from './modules/formValidation.js';
import calc from './modules/calc.js';
import sendForm from './modules/sendForm.js';

//  Таймер
countTimer('28 june 2021 10:08:30');
//  Меню
toggleMenu();
//popup
togglePopUp();
//scroll 
scroll();
//tabs
tabs();
//Слайдер
slider();
//Смена фото Наша команда
changePhoto();
//Валидация калькулятора
calcValidation();
// Валидация форм обратной связи
formValidation();
//Калькулятор
calc(100);
//send ajax-form
sendForm();