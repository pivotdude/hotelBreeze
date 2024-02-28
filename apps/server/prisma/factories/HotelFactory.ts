interface getTemplateData {
  id: number
  title: string
  description: string
  cityId: number
  previewId: number
}

export default class HotelFactory {
  private readonly allExtras = [
    'Wifi',
    'Кухня',
    'Парковка',
    'Бассейн',
    'Спутниковое ТВ',
    'Кондиционер',
    'Сауна',
    'Бильярд',
    'Террасса',
  ]

  public getTemplate(data: getTemplateData) {
    return {
      id: data.id,
      title: data.title,
      cityId: data.cityId,
      description: data.description,
      price: this.generateNumber(5000, 15000),
      data: {
        maxGuests: this.generateNumber(1, 4),
        isEntireHome: true,
        rooms: {
          beds: this.generateNumber(2, 6),
          bath: this.generateNumber(2, 6),
          extras: this.getRandomExtras(),
        },
      },
      previewImageId: data.previewId,
    }
  }

  private generateNumber(start = 1, end = 5) {
    return Math.floor(Math.random() * end) + start
  }

  private getRandomExtras(count = 3) {
    const shuffledExtras = this.allExtras.sort(() => Math.random() - 0.5)
    return shuffledExtras.slice(0, count)
  }
}
