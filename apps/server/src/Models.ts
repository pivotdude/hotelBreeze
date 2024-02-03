export type RolesT = 'user' | 'admin'
export type mailTemplatesT = 'confirmationRegistration' | 'confirmationLogin'

export interface IMessage {
  message: string
  type: 'error' | 'success' | 'info' | 'warning'
}

export interface ContextUser {
  id: number
  username: string
}
