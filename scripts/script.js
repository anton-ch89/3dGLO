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
    countTimer('28 june 2021 10:08:30');

    //  Меню
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');
        let count = 0;
        const handlerMenu = () => {
            //Анимация
            count += 40;

            let menuAnimation = requestAnimationFrame(handlerMenu);
            let width = document.documentElement.clientWidth;
            if (count <= width && width > 768) {
                menu.style.left = count + 'px';
            } else {
                menu.style.left = width + 'px';
                cancelAnimationFrame(menuAnimation);
            }
        };

        body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close-btn') || target.closest('ul>li>a')) {
                menu.style.left = `-${menu.clientWidth}px`;
                count = 0;
            } else if (target.closest('.menu')) {
                handlerMenu();
            } else {
                target = target.closest('menu');
                if (!target) {
                    menu.style.left = `-${menu.clientWidth}px`;
                    count = 0;
                }
            }
        });
    };
    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn');

        popup.style.display = 'block';
        popup.style.left = `-${popup.clientWidth}px`;
        popupContent.style.left = `-${popupContent.clientWidth}px`;

        let count = 0;


        const handlerPopup = () => {
            //Анимация
            count += 40;
            let popupAnimation = requestAnimationFrame(handlerPopup);
            let width = document.documentElement.clientWidth;
            if (count <= (width / 2) && width > 768) {
                popup.style.left = 0 + 'px';
                popupContent.style.left = count - (popupContent.clientWidth / 2) + 50 + 'px';
            } else {
                popup.style.left = 0 + 'px';
                popupContent.style.left = (width / 2) - (popupContent.clientWidth / 2) + 50 + 'px';
                cancelAnimationFrame(popupAnimation);
            }
        };

        const closePopup = () => {
            //Анимация
            count -= 15;
            let popupAnimation = requestAnimationFrame(closePopup);
            let width = document.documentElement.clientWidth;
            if (count >= (-popupContent.clientWidth / 2) && width > 768) {
                popupContent.style.left = count - (popupContent.clientWidth / 2) + 50 + 'px';
                popup.style.left = `-${popup.clientWidth}px`;
            } else {
                popupContent.style.left = `-${popupContent.clientWidth}px`;
                popup.style.left = `-${popup.clientWidth}px`;
                cancelAnimationFrame(popupAnimation);
            }
        };
        popupBtns.forEach(e => {
            e.addEventListener('click', () => {
                handlerPopup();
            });
            popup.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-close')) {
                    closePopup();
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        closePopup();
                    }
                }
            });
        });
    };
    togglePopUp();

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

    //tabs

    const tabs = () => {
        const tabHeaeder = document.querySelector('.service-header'),
            tabs = tabHeaeder.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabsContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tabs[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabs[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeaeder.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tabs.forEach((item, i) => {
                    if (item === target) {
                        toggleTabsContent(i);
                    }
                });
            }
        });
    };

    tabs();

    //Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dotsUl = document.querySelector('.portfolio-dots');

        const addDots = () => {
            dotsUl.insertAdjacentHTML('afterbegin', `<li class="dot dot-active"></li>`);
            for (let i = 0; i < slide.length - 1; i++) {
                dotsUl.insertAdjacentHTML('beforeend', '<li class="dot"></li>');
            }
        };
        addDots();

        const dot = document.querySelectorAll('.dot');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strSlide) => {
            elem[index].classList.remove(strSlide);
        };

        const nextSlide = (elem, index, strSlide) => {
            elem[index].classList.add(strSlide);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(3000);
    };
    slider();

    //Смена фото Наша команда
    const changePhoto = () => {
        const photos = document.querySelectorAll('.command__photo');
        photos.forEach((item) =>{
            item.addEventListener('mouseenter', event=>{
                event.target.src = event.target.dataset.img;
            });
        });
    };
    changePhoto();

    //Валидация калькулятора

    const calcValidation =() =>{
        const inputs = document.querySelectorAll('input.calc-item');
        inputs.forEach(item=>{
            item.addEventListener('input', ()=>{
                item.value = item.value.replace(/\D/g, '');
            });
        });


    };
    calcValidation();

      //Валидация формы обратной связи

      const formValidation = () => {
        const formName = document.querySelectorAll('#form1-name, #form2-name, #form3-name'),
            formEmail = document.querySelectorAll('#form1-email, #form2-email, #form3-email'),
            formPhone = document.querySelectorAll('#form1-phone, #form2-phone, #form3-phone'),
            formMessage = document.querySelector('#form2-message');


        formName.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^а-я\s-]/i, '');
                item.addEventListener('blur', () => {
                    item.value = item.value.replace(/[^а-я\s-]/gi, '')
                        .replace(/^[ \s]+|[ \s]+$/g, '')
                        .replace(/^[-]+|[-]+$/g, '')
                        .replace(/\s+/g, ' ')
                        .replace(/-+/g, '-')
                        .split(' ').map(item => {
                            if (item) {
                                return item[0].toUpperCase() + item.slice(1).toLowerCase();
                            }
                        })
                        .join(' ');
                });
            });
        });
        formEmail.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-z@_.!`*-~']/i, '');
                item.addEventListener('blur', () => {
                    item.value = item.value.replace(/[^a-z@-_.!`*']/gi, '')
                        .replace(/^[ \s]+|[ \s]+$/g, '')
                        .replace(/^[-]+|[-]+$/g, '')
                        .replace(/\s+/g, ' ')
                        .replace(/-+/g, '-');
                });
            });
        });
        formPhone.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9()-]/, '');
                item.addEventListener('blur', () => {
                    item.value = item.value.replace(/[^0-9()-]/g, '');
                });
            });
        });

        formMessage.addEventListener('input', () => {
            formMessage.value = formMessage.value.replace(/[^а-я\s-]/i, '');
            formMessage.addEventListener('blur', () => {
                formMessage.value = formMessage.value.replace(/[^а-я\s-]/gi, '')
                    .replace(/^[ \s]+|[ \s]+$/g, '')
                    .replace(/^[-]+|[-]+$/g, '')
                    .replace(/\s+/g, ' ')
                    .replace(/-+/g, '-');
            });
        });
    };
    formValidation();



    });
