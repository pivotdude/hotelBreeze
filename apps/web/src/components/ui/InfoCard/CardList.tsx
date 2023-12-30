import InfoCard, { InfoCardProps } from '@/components/ui/InfoCard/InfoCard'

interface CardListProps {
  items: InfoCardProps[]
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
        />
      ))}
    </>
  )
}
