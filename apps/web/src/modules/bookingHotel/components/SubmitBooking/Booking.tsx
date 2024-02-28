import React from 'react'
import { Col, Divider, Row, Title } from '@/ui'
import dayjs from '@/libs/dayjs'

interface BookingProps {
  route: {
    params: {
      uid: string
    }
    searchParams: {
      count: number
      startDate: string
      endDate: string
    }
  }
}

const Booking = async ({ route }: BookingProps) => {
  const endDate = dayjs(route.searchParams.endDate).format('DD.MM.YYYY')
  const startDate = dayjs(route.searchParams.startDate).format('DD.MM.YYYY')

  return (
    <Row gutter={[0, 8]}>
      <Col span={24}>
        <Title level={1}>Подтвердите бронирование</Title>
        <Divider />
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <p className="font-bold">Даты</p>
              </Col>
              <Col span={24}>
                {startDate} - {endDate}
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <p className="font-bold">Гости</p>
              </Col>
              <Col span={24}>{route.searchParams.count}</Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Divider />
      </Col>
    </Row>
  )
}

export default Booking
