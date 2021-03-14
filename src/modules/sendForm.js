
const sendForm = () => {
    //добавляем сообщения 
    //но вместо них можно сделать анимацию или всплывающее окно
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо мы скоро с вами свяжемся!';
    const form = document.getElementById('form1');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';



    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        });

    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //помещаем div на страницу
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        
        
        //пишем запрос на сервер
        const formData = new FormData(form);
        //если сервер не понимает формат formData то переводим в JSON
        let body = {};
        //достаем значения из formData
        // for(let val of formData.entries()){
        //     // console.log(val);
        //     //записываем в body
        //     body[val[0]] = val[1];
        // }
        //через forEach
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        postData(formData)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.style.cssText = 'font-size: 2rem; color: red';
                statusMessage.textContent = errorMessage;
                console.error(error);
            }); 
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
        form1Name.value = '';
        form1Email.value = '';
        form1Phone.value = '';
    });

    
};

export default sendForm;