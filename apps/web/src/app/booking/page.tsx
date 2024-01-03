'use client'
import { Button, Col, DatePicker, Form, Row, Select } from 'antd'
import HotelList from '@/components/app/booking/Hotel/HotelList'
import { IHotel } from '@/components/app/booking/Hotel/HotelCard'

const { RangePicker } = DatePicker

export default function Booking() {
  const countries = [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Aland Islands', value: 'AX' },
    { label: 'Albania', value: 'AL' },
    { label: 'Algeria', value: 'DZ' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Andorra', value: 'AD' },
    { label: 'Angola', value: 'AO' },
    { label: 'Anguilla', value: 'AI' },
    { label: 'Antarctica', value: 'AQ' },
    { label: 'Antigua and Barbuda', value: 'AG' },
    { label: 'Argentina', value: 'AR' },
    { label: 'Armenia', value: 'AM' },
    { label: 'Aruba', value: 'AW' },
    { label: 'Australia', value: 'AU' },
    { label: 'Austria', value: 'AT' },
    { label: 'Azerbaijan', value: 'AZ' },
    { label: 'Bahamas', value: 'BS' },
    { label: 'Bahrain', value: 'BH' },
  ]

  const hotelList = [
    {
      id: 1,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
    {
      id: 2,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
    {
      id: 3,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
    {
      id: 4,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
    {
      id: 1,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
    {
      id: 1,
      title: 'Hotel 1',
      src: 'https://placehold.co/600x400',
      description: 'Description',
      address: 'Address',
      country: {
        name: 'Angola',
      },
      city: 'City',
      price: 100,
      reviews: {
        rating: 3,
        count: 10,
      },
      data: {
        guests: '1-10',
        isEntireHome: true,
        rooms: {
          beds: 5,
          bath: 3,
          extras: ['Wifi', 'Kitchen', 'Free Parking'],
        },
      },
    },
  ] as IHotel[]

  return (
    <Row gutter={[16, 16]} className="px-32">
      <Col xs={24}>
        <Form layout="inline" size="large">
          <Form.Item label="Выберите даты">
            <RangePicker />
          </Form.Item>
          <Form.Item className="w-60" label="Страна">
            <Select options={countries} />
          </Form.Item>
          <Button>Поиск</Button>
        </Form>
      </Col>
      <Col xs={24}>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-2">
          <HotelList hotels={hotelList} />
        </div>
      </Col>
    </Row>
  )
}
