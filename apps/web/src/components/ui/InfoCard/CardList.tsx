import InfoCard, { InfoCardItem } from '@/components/ui/InfoCard/InfoCard'

interface CardListProps {
  items: InfoCardItem[]
  href?: string
  width?: number
}

export default function CardList(props: CardListProps) {
  return (
    <>
      {props.items.map((item) => (
        <InfoCard key={item.uid} item={item} width={props.width || 250} href={props.href} />
      ))}
    </>
  )
}
