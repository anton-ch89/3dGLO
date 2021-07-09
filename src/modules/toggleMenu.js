    //  Меню
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');
        let count = 0;
        const handlerMenu = () => {
            //Анимация
            count += 30;

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
                event.preventDefault();
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

    export default toggleMenu;