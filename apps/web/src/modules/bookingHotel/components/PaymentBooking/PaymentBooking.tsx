import { Col, Divider, Row, Title } from '@/ui'
import React from 'react'
import qrCode from './../../assets/img.png'
import Image from 'next/image'
import PaymentButton, { PaymentButtonProps } from '@/modules/bookingHotel/components/PaymentBooking/PaymentButton'

export default function PaymentBooking({ setStep, route }: PaymentButtonProps) {
  return (
    <Row gutter={[0, 8]}>
      <Col span={24}>
        <Title level={1}>Оплатите</Title>
        <Divider />
      </Col>
      <Col span={24}>
        <Image alt="ss" src={qrCode} width={250} />
      </Col>
      <Col span={24}>
        <Divider />
        <PaymentButton setStep={setStep} route={route} />
      </Col>
    </Row>
  )
}
