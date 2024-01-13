import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import 'dayjs/locale/ru' // import locale

dayjs.extend(utc)
dayjs.locale('ru')

export default dayjs
