const { I18n } = require('i18n')
const i18n = new I18n()
i18n.configure({
    locales: ['ru', 'en', 'kz'],
    directory: path.join(__dirname, '/locales')
})

exports.module = i18n;