import NextLink from 'next/link'

interface LinkProps {
  href: string
  children: string
}

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink className="text-black hover:text-sky-300 hover:cursor-pointer" href={href}>
      {children}
    </NextLink>
  )
}
