export type RolesT = 'user' | 'admin'
export type mailTemplatesT = 'confirmationRegistration' | 'confirmationLogin'

export interface IMessage {
  message: string
  type: 'error' | 'success' | 'info' | 'warning'
}
