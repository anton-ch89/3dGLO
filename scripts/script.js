window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //  Таймер
    const countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            if (hours < 0 && minutes < 0 && seconds < 0) {
                seconds = '00';
                minutes = '00';
                hours = '00';
            }

            if (hours < 10 || minutes < 10 || seconds < 10) {
                seconds = ('0' + seconds).slice(-2);
                minutes = ('0' + minutes).slice(-2);
                hours = ('0' + hours).slice(-2);
            }
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        };

        const updateClock = () => {
            let timer = getTimeRemaining();

            if (timer.timeRemaining > 0) {
                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;
            } else {
                clearInterval(interval);
            }
        };
        let interval = setInterval(updateClock, 1000);
    };
    countTimer('18 june 2021 10:08:30');

    //  Меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li>a');
        let count = 0;
        const handlerMenu = () => {
            //Анимация
            count++;

            let menuAnimation = requestAnimationFrame(handlerMenu);
            let width = document.documentElement.clientWidth;
            if (count <= Math.sqrt(width)  && width > 768) {
                menu.style.left = count ** 2 + 'px';
            } else {
                menu.style.left = width + 'px';
                cancelAnimationFrame(menuAnimation);
            }
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', () => {
            menu.style.left = `-${menu.clientWidth}px`;
            count = 0;
        });
        menuItems.forEach(e => {
            e.addEventListener('click', () => {
                menu.style.left = `-${menu.clientWidth}px`;
                count = 0;
            });
        });
console.dir(menu);
    };
    toggleMenu();
    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

            popup.style.display = 'block';
            popup.style.left = `-${popup.clientWidth}px`;
            popupContent.style.left = `-${popupContent.clientWidth}px`;  

        let rect = popupContent.getBoundingClientRect();
        let count = 0;

console.dir(popupContent);
console.log(rect);

        const handlerPopup = () => {
            //Анимация
            count++;
            let popupAnimation = requestAnimationFrame(handlerPopup);
            let width = document.documentElement.clientWidth;
            if (count <= (width) && width > 768) {
                console.log(count);
                popup.style.left = count - popup.clientWidth + 'px';
                popupContent.style.left = rect.x + count  - popupContent.clientWidth + 'px';
            } else {
                popup.style.left = width + 'px';
                popupContent.style.left =rect.x + width + 'px';
                cancelAnimationFrame(popupAnimation);
            }
        };

        popupBtns.forEach(e => {
            e.addEventListener('click', () => {
                // popup.style.display = 'block';
                handlerPopup();
            });
            popupClose.addEventListener('click', () => {
                // handlerPopup();
                //  popup.style.display = 'none';

            });
        });
    };
    togglePopUp();

    // const handlerPopup = () => {
    //     //Анимация
    //     count++;
    //     let popupAnimation = requestAnimationFrame(handlerPopup);
    //     let width = document.documentElement.clientWidth;
    //     if (count <= Math.sqrt(width) && width > 768) {
    //         popup.style.left = count ** 2 + 'px';
    //         popupContent.style.left = rect.x + count ** 2  + 'px';
    //     } else {
    //         popup.style.left = width + 'px';
    //         popupContent.style.left =rect.x + width + 'px';
    //         cancelAnimationFrame(popupAnimation);
    //     }
    // };





    //scroll 
const scroll = () => {
    const scrolElements = document.querySelectorAll('ul>li>a'),
    scrolElem = document.querySelector('main>a');
    const scrolling = (elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            const id = elem.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            });
        });
    };
scrolElements.forEach(e => {
    scrolling(e);
});
scrolling(scrolElem);
};
scroll();
});
