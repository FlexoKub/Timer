
const validForm = () => {
        const calcItem = document.querySelectorAll('.calc-item');
    calcItem.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g, '');
        });
    });



        const funcName = function(event) {
            const target = event.target;
            target.value = target.value.replace(/\w|[!@#$%^&*()+=|";:?`~№,.-]/g, '');
        };
        const funcNameBlur = function(event) {
            const target = event.target;
            //замена больше двух пробелов на один
            target.value = target.value.replace(/ {2,}/g, ' ');
            //все буквы маленькие
            target.value = target.value.replace(/[А-Я]*/gi, (match) => match.toLowerCase());
            //первая буква в строке большая
            target.value = target.value.replace(/^./gi, (match) => match.toUpperCase());
            //большая буква перед пробелом
            target.value = target.value.replace(/.(?<= )./gi, (match) => match.toUpperCase());
        };
        const funcEmail = function(event) {
            const target = event.target;
            target.value = target.value.replace(/[^A-Za-z@-_.]/g, '');
        };
        const funcPhone = function(event) {
            const target = event.target;
            target.value = target.value.replace(/[^+0-9]/, '');
        };

    const form1Name = document.getElementById('form1-name'),
        form1Email = document.getElementById('form1-email'),
        form1Phone = document.getElementById('form1-phone');

        form1Name.addEventListener('input', funcName);
        form1Name.addEventListener('blur', funcNameBlur);
        form1Email.addEventListener('input', funcEmail);
        form1Phone.addEventListener('input', funcPhone);
        
    const form2Name = document.getElementById('form2-name'),
        form2Email = document.getElementById('form2-email'),
        form2Phone = document.getElementById('form2-phone'),
        form2Message = document.getElementById('form2-message');

    form2Name.addEventListener('input', funcName);
    form2Name.addEventListener('blur', funcNameBlur);
    form2Email.addEventListener('input', funcEmail);
    form2Phone.addEventListener('input', funcPhone);

    form2Message.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^А-Яа-яЁё_!-@#$%^&**()+=|`~ ]/g, '');
        });
    form2Message.addEventListener('blur', (event) => {
            const target = event.target;
            target.value = target.value.replace(/ {2,}/g, ' ');
            target.value = target.value.replace(/^-*/, '');
            target.value = target.value.replace(/-*$/, '');
            target.value = target.value.replace(/-{2,}/g, '-');
            target.value = target.value.replace(/[А-Я]*/gi, (match) => match.toLowerCase());
            target.value = target.value.replace(/^./gi, (match) => match.toUpperCase());
            // elem.value = elem.value.match(/\+?[78]([-()]*\d){10}/g);
        });

    const form3Name = document.getElementById('form3-name'),
        form3Phone = document.getElementById('form3-phone'),
        form3Email = document.getElementById('form3-email');

    form3Name.addEventListener('input', funcName);
    form3Name.addEventListener('blur', funcNameBlur);
    form3Email.addEventListener('input', funcEmail);
    form3Phone.addEventListener('input', funcPhone);
};

export default validForm;