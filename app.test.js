
const locale = require('./comrade')

test('message output ', () => {
    expect(locale()).toBe(console.log('Привет' || 'Hello' || 'Сәлем'));

});

