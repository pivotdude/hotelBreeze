import React from 'react'
import { Result as AntdResult } from '@/ui'
import type { ResultProps } from 'antd'

export default class Errors {
  static notFound() {
    return this.getResult({ title: '404', subTitle: 'Страница не найдена', status: '404' })
  }

  static error(title: string, description: string) {
    return this.getResult({ title: title, subTitle: description, status: 'error' })
  }

  static getResult(props: ResultProps) {
    return <AntdResult {...props} />
  }
}
