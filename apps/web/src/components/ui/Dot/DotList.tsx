import React from 'react'
import Dot from '@/components/ui/Chars/Dot'

export default function DotList({ children }: any) {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className="flex space-x-2">
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && <Dot />}
        </React.Fragment>
      ))}
    </div>
  )
}
