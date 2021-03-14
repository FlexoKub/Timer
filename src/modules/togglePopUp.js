
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');
        // popupClose = document.querySelector('.popup-close');
       

        
        popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            
            popup.style.display = 'block';
            popup.style.opacity = 0;
            requestAnimationFrame(function() {
            popup.style.transition = 'opacity 3s ease 0.5s';
            popup.style.opacity = 1;
            });
        });
    });
    // popupClose.addEventListener('click', () => {
    //     // popup.style.opacity = 1;
    //     requestAnimationFrame(function() {
    //         popup.style.transition = 'opacity 3s ease 1s';
    //         popup.style.opacity = 0;
    //         popup.style.display = 'none';
    //     });
    // });
    //клик на подложку и закрытие окна
    popup.addEventListener('click', (event)=>{
        let target = event.target;
        //закрытие на крестик
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target) {
                popup.style.display = 'none';
            }
        }

        });
    };

    export default togglePopUp;