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
import sliderCarusel from './modules/sliderCarusel';

//  Таймер
countTimer('11 jule 2021 10:08:30');
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

const carusel = new sliderCarusel({
	main: '.companies-wrapper',
	wrap: '.companies-hor',
	slidesToShow: 4,
	infinity: true,
	responsive: [{
		breakpoint: 1024,
		slidesToShow: 3,
	},
	{
		breakpoint: 768,
		slidesToShow: 2,
	},
	{
		breakpoint: 576,
		slidesToShow: 1,
	}],
});

carusel.init();
