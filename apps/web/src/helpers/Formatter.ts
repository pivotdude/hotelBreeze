import currency from 'currency.js'

export default class Formatter {
  static amount(amount: number) {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount)
  }

  static price(price: number) {
    return currency(price).format({ separator: ' ', symbol: '₽', decimal: ',', pattern: `# !` })
  }
}
