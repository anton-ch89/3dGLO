import togglePopUp from './togglePopUp.js';

 
 //send ajax-form
 const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся';

    const form1 = document.querySelector('#form1'),
        form2 = document.querySelector('#form2'),
        form3 = document.querySelector('#form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;`;

    //Первая форма
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        form1.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form1);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
                console.error(error);
            });
        form1.reset();
    });

    //Вторая форма
    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        form2.insertAdjacentElement('afterend', statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form2);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
                console.error(error);
            });
        form2.reset();
    });


    //popup форма

    form3.addEventListener('submit', (event) => {
        event.preventDefault();
        statusMessage.style.cssText = `font-size: 2rem; color: #fff;`;
        form3.insertAdjacentElement('afterend', statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form3);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    statusMessage.remove();
                    togglePopUp();
                }, 2000);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    statusMessage.remove();
                    togglePopUp();
                }, 3000);
                console.error(error);
            });
        form3.reset();
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;