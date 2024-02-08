'use client'
import { Button, DatePicker, Form, Select } from 'antd'
import { IOptions } from '@/models'
import { useState } from 'react'
import { CountryQuery } from '@/modules/bookig/queries/fetchCountry'
import MapFormat from '@/helpers/MapFormat'
import { Col, Row } from '@/ui'

const { RangePicker } = DatePicker

interface SearchFormProps {
  countries: CountryQuery[]
}

export default function SearchForm({ countries }: SearchFormProps) {
  const optionsCountry = MapFormat.options(countries, 'name', 'code')
  const [cities, setCities] = useState<IOptions[]>([])

  const changeCountry = (value: string) => {
    console.log(value)
    const rawCities = countries.find((item) => item.code === value)?.cities as unknown as {
      uid: string
      name: string
    }[]
    setCities(MapFormat.options(rawCities, 'name', 'uid'))
  }

  return (
    <Form size="large" className="w-full">
      <Row gutter={[16, 16]}>
        <Col xs={7}>
          <Form.Item label="Выберите даты">
            <RangePicker format="DD.MM.YYYY" />
          </Form.Item>
        </Col>
        <Col xs={7}>
          <Form.Item label="Страна">
            <Select options={optionsCountry} onChange={changeCountry} />
          </Form.Item>
        </Col>
        <Col xs={2}>
          <Button>Поиск</Button>
        </Col>
      </Row>
    </Form>
  )
}
