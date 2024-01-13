function amount(amount: number) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount)
}

const Formatter = {
  amount,
}

export default Formatter
