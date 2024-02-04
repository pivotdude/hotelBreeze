type TSwitch = 'enabled' | 'disabled'

const constants = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  STABS_ENABLE: process.env.NEXT_PUBLIC_MOCK_APIS as TSwitch,
  NODE_MODE: process.env.NODE_ENV,
}

export default constants
