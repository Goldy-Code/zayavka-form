const TOKEN = "1355950041:AAGVh9HlT3rfGTd7LxRdeCt76yuMWkO9m8s";
const CHAT_ID = "-888583197";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let message = `<b>Це заявка!</b>\n`;
    message += `<b>Фамилия и Имя:</b> ${this.name.value} \n`;
    message += `<b>Сколько лет?</b> ${this.years.value} \n`;
    message += `<b>Любимый цвет:</b> ${this.color.value} \n`;
    message += `<b>Почта:</b> ${this.email.value} \n`;
    message += `<b>Номер тел.:</b> ${this.num.value} \n`;
    message += `<b>Дата:</b> ${this.date.value} \n`;
    message += `<b>Пол:</b> ${this.gender.value} \n`;
    message += `<b>Кем ты себя считаешь?</b> ${this.select.value} \n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            success.style.display = "block"
            this.name.value = "";
            this.years.value = "";
            this.color.value = "";
            this.email.value = "";
            this.num.value = "+998";
            this.date.value = "";
            this.gender.value = "";
            this.select.value = "---";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('the end');
        })
})