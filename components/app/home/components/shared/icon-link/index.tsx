import { ReactNode } from 'react'

type IconLinkProps = {
   href: string
   label: string
   children: ReactNode
}

export default function IconLink({ href, label, children }: IconLinkProps) {
   return (
      <a
         href={href}
         aria-label={label}
         title={label}>
         {children}
      </a>
   )
}
