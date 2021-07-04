    //Валидация калькулятора

    const calcValidation = () => {
        const inputs = document.querySelectorAll('input.calc-item');
        inputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/g, '');
            });
        });


    };
export default calcValidation;