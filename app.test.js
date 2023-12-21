
const locale = require('./index')

test('message output ', () => {
    expect(locale()).toBe(console.log('Привет' || 'Hello' || 'Сәлем'));

});

