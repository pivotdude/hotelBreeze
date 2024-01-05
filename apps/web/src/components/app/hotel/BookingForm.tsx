import { Button, DatePicker, Form } from 'antd'

const { RangePicker } = DatePicker
interface BookingFormProps {}

export default function BookingForm(props: BookingFormProps) {
  return (
    <Form layout="vertical">
      <Form.Item name="date" label="Выберите даты бронирования">
        <RangePicker format="DD.MM.YYYY" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Забронировать
        </Button>
      </Form.Item>
    </Form>
  )
}
