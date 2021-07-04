    //Смена фото Наша команда
    const changePhoto = () => {
        const photos = document.querySelectorAll('.command__photo');
        photos.forEach((item) => {
            item.addEventListener('mouseenter', event => {
                event.target.src = event.target.dataset.img;
            });
        });
    };
export default changePhoto;