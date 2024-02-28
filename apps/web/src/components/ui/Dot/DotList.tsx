import React from 'react'
import Dot from '@/components/ui/Chars/Dot'

export default function DotList({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={'flex space-x-3'}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && <Dot />}
        </React.Fragment>
      ))}
    </div>
  )
}
