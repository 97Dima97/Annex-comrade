import locale from './src/locale.js'

test('message output ', () => {
    expect(locale()).toBe(console.log('Привет' || 'Hello' || 'Сәлем'));

});

