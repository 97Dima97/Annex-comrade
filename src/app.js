import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

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

const readLine = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

const getGreetingByName = () => {
    readLine.question('', function (data) {
        console.log('Привет ' + data);
        readLine.close();
    });
}

export { getMessage, getGreetingByName };




