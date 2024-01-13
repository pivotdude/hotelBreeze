import { Button, DatePicker, Form, InputNumber } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import Formatter from '@/helpers/Formatter'

const { RangePicker } = DatePicker
interface BookingFormProps {
  maxGuests: number
  price: number
}

export default function BookingForm(props: BookingFormProps) {
  const [amount, setAmount] = useState(0)
  const onChange = (dates: (typeof dayjs)[], stringDates: string[]) => {
    const begDate = dayjs(stringDates[0], 'DD.MM.YYYY')
    const endDate = dayjs(stringDates[1], 'DD.MM.YYYY').add(1, 'day')
    const diffInDays = dayjs(endDate).diff(begDate, 'day')
    setAmount(diffInDays * props.price)
  }

  return (
    <Form layout="vertical">
      <Form.Item name="date" label="Даты бронирования">
        {/*@ts-ignore*/}
        <RangePicker format="DD.MM.YYYY" className="w-full" onChange={onChange} />
      </Form.Item>
      <Form.Item name="count" label="Количество человек">
        <InputNumber className="w-full" max={props.maxGuests} min={1} />
      </Form.Item>
      <Form.Item label="Итоговая стоимость">
        <p>{Formatter.amount(amount)}</p>
      </Form.Item>
      <Form.Item>
        <Button className="w-full" type="primary">
          Оформить
        </Button>
      </Form.Item>
    </Form>
  )
}
