import InfoCard, { InfoCardProps } from '@/components/ui/InfoCard/InfoCard'

interface CardListProps {
  items: InfoCardProps[]
  width?: number
}

export default function CardList(props: CardListProps) {
  return (
    <>
      {props.items.map((country) => (
        <InfoCard
          key={country.title}
          src={country.src}
          title={country.title}
          description={country.description}
          width={props.width || 250}
        />
      ))}
    </>
  )
}
