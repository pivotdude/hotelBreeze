'use client'
import { DatePicker, Form, Select } from 'antd'
import { CountryQuery } from '@/modules/bookig/queries/fetchCountry'
import MapFormat from '@/helpers/MapFormat'
import { useRouter } from 'next/navigation'

const { RangePicker } = DatePicker

interface SearchFormProps {
  countries: CountryQuery[]
  urlCountry?: string
}

export default function SearchForm({ countries, urlCountry }: SearchFormProps) {
  const optionsCountry = MapFormat.options(countries, 'name', 'englishName')
  const router = useRouter()

  const changeCountry = (value: string) => {
    router.push(`/booking?country=${value}`)
  }

  return (
    <Form size="large" className="w-full mx-auto">
      <Form.Item label="Страна">
        <Select options={optionsCountry} onChange={changeCountry} defaultValue={urlCountry} />
      </Form.Item>
    </Form>
  )
}
