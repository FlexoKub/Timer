

const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        wrapMenu = document.querySelector('wrap'),
        menu = document.querySelector('menu');
        // closeBtn = document.querySelector('.close-btn'),
        //список меню
        // menuItem = menu.querySelectorAll('ul>li');
        //ф-я открытия и закрытия меню
    const handlerMenu = () => {
        //при помощи CSS
        wrapMenu.classList.toggle('wrap-menu');
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);
    // menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));

    wrapMenu.addEventListener('click', (event)=>{
        let target = event.target;
        //закрытие на крестик, вне меню, на пункт меню
        if(target.classList.contains('close-btn')){
            handlerMenu();
        } else if(target.classList.contains('wrap-menu')){
            handlerMenu();}
        else {
            target = target.closest('a');
            if(target) {
                handlerMenu();
            }
        }
        });
        
    };

    export default toggleMenu;