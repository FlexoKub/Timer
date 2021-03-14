
const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

        //ф-я меняет контент
        const toggleTabContent = (index) => {
            for(let i=0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            //элемент на котором произошло событие
            let target =event.target;
            //новый способ
            //проверяем селектор если нет поднимаемся выше к родителю
            target = target.closest('.service-header-tab');
            //поверка
            if(target){
                //проверяем на какой tab кликнули
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
                
            }
             //старый способ
            /*while(target !== tabHeader) {
                console.log('target: ', target);

                //поверка
                if(target.classList.contains('service-header-tab')){
                    //проверяем на какой tab кликнули
                    tab.forEach((item, i) => {
                        if(item === target) {
                            toggleTabContent(i);
                        }
                    });
                    return;
                }
                //присваиваем событию родителя
                target = target.parentNode;
            }*/
        } );
    };

    export default tabs;