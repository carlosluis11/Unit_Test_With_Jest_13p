const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js')

test('suma 14 + 9 igual a 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23)
})

test('cambio de dolar a yen', () => {
    expect(fromDollarToYen(1.2, 127.9)).toBe(153.48)
})
test('cambio de euro a dolar', () => {
    expect(fromEuroToDollar(1, 1.2)).toBe(1.2)
})
test('cambio de yen a pound', () => {
    expect(fromYenToPound(127.9, 0.8)).toBe(102.32)
})
