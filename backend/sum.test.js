const sum = require('./sum')

test('toplama fonksiyonu doğru çalışıyor', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(-1, 1)).toBe(0)
})
