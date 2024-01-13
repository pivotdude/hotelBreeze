'use client'
import { Button, DatePicker, Form, Select } from 'antd'
import { IOptions } from '@/models'
import { useState } from 'react'
import { CountryQuery } from '@/modules/bookig/queries/fetchCountry'
import MapFormat from '@/helpers/MapFormat'

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
    <Form layout="inline" size="large" className="w-full">
      <Form.Item label="Выберите даты">
        <RangePicker format="DD.MM.YYYY" />
      </Form.Item>
      <Form.Item label="Страна">
        <Select options={optionsCountry} onChange={changeCountry} />
      </Form.Item>
      <Form.Item label="Город">
        <Select options={cities} className="w-60" />
      </Form.Item>
      <Button>Поиск</Button>
    </Form>
  )
}
