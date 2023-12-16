
function locale() {
    let localLanguage;

    switch (navigator.language) {
        case 'en-US':
            localLanguage = 'Hello';
            break;
        case 'ru-KZ':
            localLanguage = 'Сәлем';
            break;
        case 'ru-RU':
            localLanguage = 'Привет';
            break;
        default:
            localLanguage = 'language is undefined';

    }

    return console.log(localLanguage);
}
locale();

module.exports = locale;





