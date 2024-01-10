'use client'
import { ReactNode, useEffect, useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, ContactsOutlined, LoginOutlined, MailOutlined, ProfileOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { ISession } from '@/models'

interface MenuItemEvent {
  domEvent: any
  key: string
  keyPath: string[]
}
interface MenuItem {
  label: string
  key: string
  icon: ReactNode
}

export default function NavBar() {
  const router = useRouter()
  const items = [
    {
      label: 'Главная',
      key: '',
      icon: <MailOutlined />,
    },
    {
      label: 'Бронирование',
      key: 'booking',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Контакты',
      key: 'contacts',
      icon: <ContactsOutlined />,
    },
    {
      label: 'Посты',
      key: 'posts',
      icon: <ProfileOutlined />,
    },
  ] as MenuItem[]

  const authItems = [
    {
      label: 'Личный кабинет',
      key: 'profile',
      icon: <ProfileOutlined />,
    },
    {
      label: 'Выход',
      key: 'logout',
      icon: <LoginOutlined />,
    },
  ]
  const notAuthItems = [
    {
      label: 'Авторизация',
      key: 'login',
      icon: <LoginOutlined />,
    },
    {
      label: 'Регистрация',
      key: 'register',
      icon: <LoginOutlined />,
    },
  ]

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  const session = useSession() as ISession

  useEffect(() => {
    const isAuth = session.status === 'authenticated'
    const dynamicItems = isAuth ? authItems : notAuthItems
    setMenuItems([...items, ...dynamicItems])
  }, [session])

  const [current, setCurrent] = useState('')
  const onClick = (e: MenuItemEvent) => {
    if (e.key === 'logout') {
      signOut()
      return
    }
    console.log('click ', e)
    setCurrent(e.key)
    router.push('/' + e.key)
  }
  return <Menu className="w-screen" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />
}
