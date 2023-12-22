function locale() {
    let localLanguage;

    switch (navigator.language) {
        case 'en-US':
            localLanguage = "Hello. I'm program comrade. What's your name?";
            break;
        case 'ru-KZ':
            localLanguage = "Сәлем. Мен бағдарламамын comrade. Есімің кім?";
            break;
        case 'ru-RU':
            localLanguage = "Привет. Я программа comrade. Как вас зовут?";
            break;
        default:
            throw new Error('language is undefined');

    }

    return console.log(localLanguage);
}

export default locale;


