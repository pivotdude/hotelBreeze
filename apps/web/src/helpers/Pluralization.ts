type dayWordT = "день" | "дня" | "дней";

export default class Pluralization {


  static getDaysWord(number: number): dayWordT {
    if (number !== 1) {
      // Если число не равно 1, то склоняем слово "день"
      if (number >= 11 && number <= 14) {
        // Для чисел 11-14 используем форму "дней"
        return 'дней';
      } else {
        // Иначе используем форму "дня" для остальных чисел
        const lastDigit = number % 10;
        if (lastDigit === 1) {
          return 'день';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
          return 'дня';
        } else {
          return 'дней';
        }
      }
    } else {
      return 'день';
    }
  }
}
