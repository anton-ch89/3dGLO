
class sliderCarusel {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.options = {
            position
        };
    }

    init() {
        this.addGloClass();
        this.addStyles();

        if(this.prev && this. next) {
            this.controlSlider();
        }else {this.addArrow();}
    }
    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }
    addStyles() {
        const style = document.createElement('style');
        style.id = 'sliderCarusel-style';
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                flex: 0 0 25% !important;
                margin: auto 0 !important;
            }
            .swiper__next {
                border-left-color: #19b5fe;
            }
            .swiper__prev {
                border-right-color: #19b5fe;
            }
        }
        `;
        document.head.append(style);
    }

    controlSlider() {
        this.next.addEventListener('click', this.nextSlider);
        this.prev.addEventListener('click', this.prevSlider);
    }

    nextSlider(){
        --this.options.position;
    }    

    prevSlider() {
        ++this.options.position;
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'swiper__prev';
        this.next.className = 'swiper__next';
        this.main.append(this.prev);
        this.main.append(this.next);
    }
}