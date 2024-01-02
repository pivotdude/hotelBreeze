import { notification } from 'antd'
import { ArgsProps } from 'antd/es/notification'

function useNotification() {
  const [api] = notification.useNotification()
  const info = ({ description, message = 'Ошибка', placement = 'topLeft' }: ArgsProps) => {
    api.info({
      message,
      description,
      placement,
    })
  }

  const error = ({ description, message = 'Ошибка', placement = 'topLeft' }: ArgsProps) => {
    api.error({
      message,
      description,
      placement,
    })
  }

  const success = ({ description, message = 'Ошибка', placement = 'topLeft' }: ArgsProps) => {
    api.success({
      message,
      description,
      placement,
    })
  }

  const warning = ({ description, message = 'Ошибка', placement = 'topLeft' }: ArgsProps) => {
    api.warning({
      message,
      description,
      placement,
    })
  }

  return { info, error, success, warning }
}

export default useNotification
