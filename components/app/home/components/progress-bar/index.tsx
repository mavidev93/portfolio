'use client'

import { useEffect, useState } from 'react'

export default function ProgressBar() {
   const [progress, setProgress] = useState(0)

   useEffect(() => {
      const onScroll = () => {
         const h = document.documentElement
         const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
         setProgress(pct)
      }
      document.addEventListener('scroll', onScroll, { passive: true })
      return () => document.removeEventListener('scroll', onScroll)
   }, [])

   return (
      <div
         id="progress"
         style={{ width: `${progress}%` }}
      />
   )
}
