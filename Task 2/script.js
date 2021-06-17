'use strict';

let body = document.querySelector('body');
let date = new Date();

const seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    dayOfWeek = date.getDay() - 1,
    year = date.getFullYear(),
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


const getPartOfDay = function () {
    if (hours < 5) {
        console.log(hours);
        return 'Доброй ночи';
    } else if (hours < 12) {
        return 'Доброе утро';
    } else if (hours < 18) {
        return 'Добрый день';
    } else {
        return 'Добрый вечер';
    }
};

const countTimer = function (stop) {
    let dateStop = new Date(stop).getTime(),
        timeRemaining = (dateStop - date) / 1000,
        days = Math.floor((timeRemaining / 60 / 60 / 24));
    console.log(days);
    console.log(dateStop);
    console.log(timeRemaining);
    return days;
};

body.insertAdjacentHTML('afterbegin', `
<p>${getPartOfDay()}</p>
<p>Сегодня: ${week[dayOfWeek]}</p> 
<p>Текущее время: ${date.toLocaleTimeString('en')}</p> 
<p>До нового года осталось: ${countTimer('01 January 2022')} дней</p>`);