import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';
import readlineSync from 'readline-sync';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
    directory: path.join(__dirname, 'locales')
});

const getMessage = () => {
    let result = navigator.language.slice(0, 2);
    i18n.setLocale(result);
    console.log(i18n.__('welcomeMessage'));
}


const getGreetingByName = () => {
    const userName = readlineSync.question("Привет! Я программа comrade. А как тебя зовут ? ");

    if (userName === '') {
        const userResponse = readlineSync.question('Введен не верный вариант ответа , закрыть программу? y/n: ');

        if (userResponse === 'y') {
            process.exit();
        }

        if (userResponse === 'n') {
            return getGreetingByName();
        }

        if (userResponse !== 'n' || userResponse !== 'y') {

            return console.log('не верное значение');
        };

    } else {

        console.log('Привет ' + userName);
    }

}


export { getMessage, getGreetingByName }




