'use client'
import React, { useState } from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  ContactsOutlined,
  LoginOutlined,
  MailOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'

type MenuItemT = 'home' | 'app' | 'contacts'

interface MenuItem {
  domEvent: any
  key: string
  keyPath: MenuItemT[]
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
      label: 'Авторизация',
      key: 'login',
      icon: <LoginOutlined />,
    },
    {
      label: 'Регистрация',
      key: 'register',
      icon: <LoginOutlined />,
    },
    {
      label: 'Личный кабинет',
      key: 'profile',
      icon: <ProfileOutlined />,
    },
  ]

  const isAuth = false
  const [current, setCurrent] = useState<MenuItemT>('home')
  const onClick = (e: any) => {
    console.log('click ', e)
    setCurrent(e.key)
    router.push('/' + e.key)
  }
  return (
    <Menu
      className="w-screen"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}
