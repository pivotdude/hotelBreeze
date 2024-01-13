import { notification } from 'antd'
import { NotificationPlacement } from 'antd/es/notification/interface'

const Notification = {
  error: (description: string, message: string = 'Ошибка', placement: NotificationPlacement = 'topRight') => {
    notification.error({ message, description, placement })
  },
  info: (description: string, message: string = 'Информация', placement: NotificationPlacement = 'topRight') => {
    notification.info({ message, description, placement })
  },
  warning: (description: string, message: string = 'Предупреждение', placement: NotificationPlacement = 'topRight') => {
    notification.warning({ message, description, placement })
  },
  success: (description: string, message: string = 'Успех', placement: NotificationPlacement = 'topRight') => {
    notification.success({ message, description, placement })
  },
}

export default Notification
