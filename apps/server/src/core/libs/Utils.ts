import dayjs from '@/core/libs/dayjs'

export default class Utils {
  public static differenceInDays(startDate: string, endDate: string): number {
    const endMoment = dayjs(endDate)
    const startMoment = dayjs(startDate)
    return endMoment.diff(startMoment, 'day')
  }
}
