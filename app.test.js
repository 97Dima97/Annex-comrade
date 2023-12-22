import locale from './src/locale'

test('message output ', () => {
    expect(locale()).toBe(console.log('Привет' || 'Hello' || 'Сәлем'));

});

