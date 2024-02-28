import { ReactNode } from 'react'
import { Col, Row, Title } from '@/ui'
import Link from 'next/link'
import { isAuthenticated } from '@/helpers/utils'
import LogoutButton from '@/components/app/LogoutButton'

interface MenuItem {
  label: string
  key: string
  icon: ReactNode
}

export default async function NavBar() {
  const defaultItems = [
    {
      label: 'Главная',
      key: '',
    },
    {
      label: 'Бронирование',
      key: 'booking',
    },
  ] as MenuItem[]
  const authItems = [
    {
      label: 'Личный кабинет',
      key: 'profile',
    },
  ] as MenuItem[]
  const notAuthItems = [
    {
      label: 'Авторизация',
      key: 'login',
    },
    {
      label: 'Регистрация',
      key: 'register',
    },
  ] as MenuItem[]

  const isAuth = await isAuthenticated()
  const items = [...defaultItems, ...(isAuth ? authItems : notAuthItems)] as MenuItem[]

  return (
    <Row className="my-4 px-32" justify="space-between">
      <Col>
        <Link href="/" className="hover:cursor-pointer">
          <Title className="m-0" level={4}>
            HotelBreeze
          </Title>
        </Link>
      </Col>
      <Col>
        <Col xs={24} lg={24}>
          <Row gutter={[64, 0]}>
            {items.map((item) => (
              <Col key={item.key}>
                <Link className="text-lg text-black hover:text-sky-400 hover:cursor-pointer" href={'/' + item.key}>
                  {item.label}
                </Link>
              </Col>
            ))}
            {isAuth && <LogoutButton />}
          </Row>
        </Col>
      </Col>
    </Row>
  )
}
