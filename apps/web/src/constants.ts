type TSwitch = 'true' | 'false'

const constants = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  STABS_ENABLE: process.env.NEXT_PUBLIC_MOCK_APIS as TSwitch,
}

export default constants
