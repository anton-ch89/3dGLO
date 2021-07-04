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


    export default togglePopUp;