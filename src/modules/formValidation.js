// Валидация форм обратной связи
const formValidation = () => {

    const formName = document.querySelectorAll('#form1-name, #form2-name, #form3-name'),
        formEmail = document.querySelectorAll('#form1-email, #form2-email, #form3-email'),
        formPhone = document.querySelectorAll('#form1-phone, #form2-phone, #form3-phone'),
        formMessage = document.querySelector('#form2-message'),
        errorNameMessage = 'Имя должно быть не короче 2х букв.',
        errorPhoneMessage = 'Номер телефона должен содержать от 7 до 11 цифр.',
        statusMessage = document.createElement('div');
        formMessage.setAttribute('required', true);
        statusMessage.style.cssText = `font-size: 12px; line-height: 2; color: red;`;


    formName.forEach(item => {
        item.addEventListener('input', () => {
            item.style.border = '';
            item.value = item.value.replace(/[^а-я\s]/i, '');
            item.addEventListener('blur', () => {
                if (item.value.length > 1) {
                    statusMessage.remove();
                    item.value = item.value.replace(/[^а-я\s]/gi, '')
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
                } else {
                    item.style.border = '2px solid red';
                    item.value = '';
                    statusMessage.textContent = errorNameMessage;
                    item.insertAdjacentElement("afterend", statusMessage);
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                }
            });
        });
    });
    formEmail.forEach(item => {
        item.setAttribute('required', true);
        item.addEventListener('input', () => {
            item.value = item.value.trim().replace(/[^a-z@_.!`*-~'0-9]/ig, '');
            item.addEventListener('blur', (event) => {
                item.type = 'text';
                item.value = item.value.replace(/[^a-z@_.!`*-~'0-9]/gi, '')
                    .replace(/^[ \s]+|[ \s]+$/g, '')
                    .replace(/^[-]+|[-]+$/g, '')
                    .replace(/\s+/g, ' ')
                    .replace(/-+/g, '-');
            });
        });
    });
    formPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9\+]/, '');
            item.addEventListener('blur', () => {
                const pattern = /\+?[0-9]{7,11}/;
                if (pattern.test(item.value)) {
                    statusMessage.remove();
                    item.value = item.value.replace(/[^0-9\+]/g, '');
                    item.style.border = '';
                } else {
                    item.style.border = '2px solid red';
                    item.value = '';
                    statusMessage.textContent = errorPhoneMessage;
                    item.insertAdjacentElement("afterend", statusMessage);
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                }
            });
        });
    });

    formMessage.addEventListener('input', () => {

        formMessage.value = formMessage.value.replace(/[^а-я\s-,:;!\?\.0-9]/i, '');
        formMessage.addEventListener('blur', () => {
            formMessage.value = formMessage.value.replace(/[^а-я\s-,:;!\?\.0-9]/gi, '')
                .replace(/^[ \s]+|[ \s]+$/g, '')
                .replace(/^[-]+|[-]+$/g, '')
                .replace(/\s+/g, ' ')
                .replace(/-+/g, '-');
        });
    });
};
export default formValidation;