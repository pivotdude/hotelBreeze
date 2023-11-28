type TSwitch = 'enabled' | 'disabled'

export const BACKEND_URL = process.env.BACKEND_URL
export const STABS_ENABLE = process.env.NEXT_PUBLIC_MOCK_APIS as TSwitch
