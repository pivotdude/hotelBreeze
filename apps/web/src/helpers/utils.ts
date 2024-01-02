import Notification from '@/helpers/Notification'
import { NotificationType } from '@/models'

interface IMessage {
  message: string
  type: NotificationType
}

export const getNotification = (args: IMessage) => {
  console.log('getNotification', args)
  if (args.type === 'error') {
    return Notification.error(args.message)
  }
  if (args.type === 'success') {
    return Notification.success(args.message)
  }
  if (args.type === 'warning') {
    return Notification.warning(args.message)
  }
  if (args.type === 'info') {
    return Notification.info(args.message)
  }
}
