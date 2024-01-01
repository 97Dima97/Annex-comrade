import { i18n } from './index.js';

let result = navigator.language.slice(0, 2);
i18n.setLocale(result);
console.log(i18n.__('start'));



