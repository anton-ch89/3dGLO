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


    export default tabs;