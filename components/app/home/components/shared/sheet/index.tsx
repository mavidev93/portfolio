import { ReactNode } from 'react'

type SheetProps = {
   id: string
   label: { number: string; title: string }
   children: ReactNode
}

export default function Sheet({ id, label, children }: SheetProps) {
   return (
      <section
         className="sheet"
         id={id}>
         <div className="sheet-label">
            {label.number} <span className="rule" /> {label.title}
         </div>
         {children}
      </section>
   )
}
