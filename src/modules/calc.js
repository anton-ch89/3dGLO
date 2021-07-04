    //Калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.querySelector('#total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                count = 0;

            const typeValue = calcType.value,
                squareValue = +calcSquare.value;


            if (calcCount.value > 1) {
                countValue += (+calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            }

            const animateCalc = ()=> {
               let idAnimateCalc = requestAnimationFrame(animateCalc);
               if (count < total) {
                   count += 50;
                   totalValue.textContent = count;
               }else{cancelAnimationFrame(idAnimateCalc);}
            };
            if (typeValue && squareValue) {
                animateCalc();

            } else {
                totalValue.textContent = total;
            }
        };
 


        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target.matches('input') || target.matches('select')) {
                countSum();
            }
        });

    };
    export default calc;