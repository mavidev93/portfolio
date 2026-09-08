'use client'

import { useEffect, useState } from 'react'

import { pageContants } from '@/constants/contant/page'

const { home } = pageContants

export default function SectionNav() {
   const [activeSection, setActiveSection] = useState('sheet-01')

   useEffect(() => {
      const io = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id)
               }
            })
         },
         { rootMargin: '-40% 0px -50% 0px' }
      )

      home.sections.forEach((s) => {
         const el = document.getElementById(s.id)
         if (el) io.observe(el)
      })

      return () => io.disconnect()
   }, [])

   const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
   }

   return (
      <nav
         className="ruler"
         aria-label={home.ariaLabels.sectionNavigation}>
         {home.sections.map((s) => (
            <button
               key={s.id}
               className={activeSection === s.id ? 'active' : ''}
               onClick={() => scrollToSection(s.id)}>
               {s.label}
            </button>
         ))}
      </nav>
   )
}
