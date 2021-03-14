
const replacePhoto = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
commandPhoto.forEach((elem) => {
    elem.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
        });
});

commandPhoto.forEach((elem) => {
    elem.addEventListener('mouseout', (event) => {
            const attr = elem.getAttribute('src');
            event.target.src = attr.replace(/a(?=\.)/, '');
        });
});
};

export default replacePhoto;