'use client'
import { InfoCardProps } from '@/components/ui/InfoCard/InfoCard'
import Picker from '@/components/ui/Picker/Picker'

export default function PickCountry() {
  const countries = [
    {
      title: 'Russia',
      description: 'Russia is a country',
      src: 'https://ae01.alicdn.com/kf/HTB1UJ7jnRyWBuNkSmFPq6xguVXaZ/St-Basil-s-Cathedral-landscape-painting-by-numbers-drawing-on-canvas-DIY-Digital-Home-Decor-For.jpg',
    },
    {
      title: 'China',
      description: 'China is a country',
      src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663389992_16-mykaleidoscope-ru-p-khrami-kitaya-krasivo-17.jpg',
    },
    {
      title: 'Belarus',
      description: 'Belarus is a country',
      src: 'https://photocentra.ru/images/main83/832036_main.jpg',
    },
    {
      title: 'Argentina',
      description: 'Argentina is a country',
      src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663154960_19-mykaleidoscope-ru-p-buenos-aires-argentina-krasivo-19.jpg',
    },
    {
      title: 'Саударская Аравия',
      description: 'Lithuania is a country',
      src: 'https://mk-ek.ru/wp-content/uploads/1/8/f/18f538bc5ac321fcbdc5af56508a035c.jpeg',
    },
    {
      title: 'Египет',
      description: 'Estonia is a country',
      src: 'https://i.pinimg.com/736x/f6/18/70/f618709c1364f2a0a62e3cd7b6ee33f7.jpg',
    },
  ] as InfoCardProps[]
  return <Picker items={countries} title="Страны" />
}
