type TSwitch = 'enabled' | 'disabled'

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const STABS_ENABLE = process.env.NEXT_PUBLIC_MOCK_APIS as TSwitch

export const NODE_MODE = process.env.NODE_ENV
