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

    export default scroll;