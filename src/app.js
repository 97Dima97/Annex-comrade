import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
i18n.configure({
    locales: ['ru', 'en', 'kz'],
    directory: path.join(__dirname, 'locales')
})

const getMessageInUserLanguage = () => {
    let result = navigator.language.slice(0, 2);
    i18n.setLocale(result);
    console.log(i18n.__('welcomeMessage'));
}

export { i18n, path, getMessageInUserLanguage }




