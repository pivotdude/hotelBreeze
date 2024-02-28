'use client'
import { Button, DatePicker, Form, InputNumber } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import Formatter from '@/helpers/Formatter'
import { useRouter } from 'next/navigation'

const { RangePicker } = DatePicker
interface BookingFormProps {
  maxGuests: number
  price: number
  hotelUid: string
  bookings: {
    endDate: string
    startDate: string
  }[]
}

export interface BookingFormData {
  count: number
  date: dayjs.Dayjs[]
}

export default function BookingForm(props: BookingFormProps) {
  const [amount, setAmount] = useState(0)
  const router = useRouter()

  const onChange = (dates: (typeof dayjs)[], stringDates: string[]) => {
    const begDate = dayjs(stringDates[0], 'DD.MM.YYYY')
    const endDate = dayjs(stringDates[1], 'DD.MM.YYYY').add(1, 'day')
    const diffInDays = dayjs(endDate).diff(begDate, 'day')
    setAmount(diffInDays * props.price)
  }

  const onSubmit = (data: BookingFormData) => {
    router.push(
      `/hotel/${props.hotelUid}/booking?count=${data.count}&startDate=${data.date[0].format(
        'YYYY-MM-DD'
      )}&endDate=${data.date[1].format('YYYY-MM-DD')}`
    )
  }

  const disableDates = (current: dayjs.Dayjs) => {
    const today = dayjs() // текущая дата

    // Первое условие: запретить все даты, которые раньше сегодняшней даты
    if (current && current < today) {
      return true
    }

    // Второе условие: запретить все да

    console.log(props.bookings)

    for (const booking of props.bookings) {
      const bookingStartDate = dayjs(booking.startDate)
      const bookingEndDate = dayjs(booking.endDate)

      if (current >= bookingStartDate && current <= bookingEndDate) {
        return true // Запрещаем выбор текущей даты
      }
    }

    return false // Разрешаем выбор всех остальных дат
  }

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item
        name="date"
        label="Даты бронирования"
        rules={[{ required: true, message: 'Укажите даты бронирования' }]}
      >
        {/* @ts-ignore */}
        <RangePicker format="DD.MM.YYYY" className="w-full" onChange={onChange} disabledDate={disableDates} />
      </Form.Item>
      <Form.Item
        name="count"
        label="Количество человек"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber className="w-full" style={{ width: '100%' }} max={props.maxGuests} min={1} />
      </Form.Item>
      <Form.Item label="Итоговая стоимость">
        <p>{Formatter.amount(amount)}</p>
      </Form.Item>
      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Оформить
        </Button>
      </Form.Item>
    </Form>
  )
}
