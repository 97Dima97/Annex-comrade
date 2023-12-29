const { I18n } = require('i18n')
const path = require('path')


const i18n = new I18n()


i18n.configure({
    locales: ['ru', 'de'],
    directory: path.join(__dirname, '/locales')
});