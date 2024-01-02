type TSwitch = 'enabled' | 'disabled'
export const constants = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3005',
  STABS_ENABLE: (process.env.NEXT_PUBLIC_MOCK_APIS as TSwitch) || 'enabled',
}
