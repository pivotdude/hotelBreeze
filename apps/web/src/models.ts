export type NotificationType = 'error' | 'success' | 'info' | 'warning'
export interface IOptions {
  label: string | number
  value: string | number
}

export interface ISession {
  data: null
  status: 'unauthenticated' | 'authenticated'
  update: (data: any) => void
}
