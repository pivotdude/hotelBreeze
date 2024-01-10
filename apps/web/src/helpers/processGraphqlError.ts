import { notification } from 'antd'

export default function processGraphqlError(error: any) {
  const errorMessages = []
  if (error instanceof Error) {
    throw new Error('Client graphql error: ' + error.message)
  }
  for (const err of error?.response?.errors) {
    errorMessages.push(err?.message)

    if (typeof window !== 'undefined') {
      // Код для браузерной среды выполнения
      notification.error({
        message: 'Ошибка',
        description: err?.message,
      })
    } else {
      // Код для среды выполнения Node.js
      console.error(error)
    }
  }

  // @ts-ignore
  throw new Error(errorMessages)
}
