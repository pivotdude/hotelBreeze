import { fetchCountries } from '@/modules/main/queries/fetchCountries'

export default async function TestPage() {
  const counties = await fetchCountries()
  console.log(counties)
  return <div>test</div>
}
