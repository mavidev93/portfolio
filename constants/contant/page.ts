export const pageContants = {
   home: {
      ariaLabels: {
         sectionNavigation: 'Section navigation',
         contact: 'Contact'
      },
      contactLinks: {
         email: { href: 'mailto:you@example.com', label: 'Email' },
         github: { href: '#', label: 'GitHub' },
         linkedin: { href: '#', label: 'LinkedIn' }
      },
      sheets: {
         profile: { number: 'SHEET 01', title: 'PROFILE' },
         experience: { number: 'SHEET 02', title: 'EXPERIENCE' },
         systems: { number: 'SHEET 03', title: 'SYSTEMS' },
         projects: { number: 'SHEET 04', title: 'PROJECTS' }
      },
      profile: {
         name: 'Abdolreza Aqasi',
         role: 'SENIOR FRONT-END ENGINEER — REACT / NEXT.JS',
         lede: 'Six-plus years building front-end architecture for high-traffic products — from micro-frontend platforms and design systems to data-heavy dashboards and blockchain-backed applications. Equally comfortable owning the full stack when a project calls for it.',
         statusSeparator: '—',
         statusLine: [
            { label: 'Status', value: 'Open to work' },
            { label: 'Languages', value: 'English, Azerbaijani Turkish, Farsi' },
            { label: 'Education', value: 'Mechanical Engineering, Tabriz University' },
            { label: 'Rev', value: '2026.09' }
         ]
      },
      coSeparator: '·',
      sections: [
         { id: 'sheet-01', label: '01 PROFILE' },
         { id: 'sheet-02', label: '02 EXPERIENCE' },
         { id: 'sheet-03', label: '03 SYSTEMS' },
         { id: 'sheet-04', label: '04 PROJECTS' }
      ],
      jobs: [
         {
            date: 'APR 2025 — JUL 2026',
            title: 'Front Lead',
            co: 'Tabibi-no',
            desc: 'Built the core front-end architecture for a health platform: middleware-driven routing, a unified API layer bridging cookie and localStorage token management, and a Turborepo micro-frontend setup sharing one design system across the main site, user dashboard, and doctor dashboard. Drove SEO and Core Web Vitals gains through SSR metadata, JSON-LD, eliminated waterfall requests, and React 19 concurrent APIs. Led code reviews.',
            tags: ['Next.js', 'React Query', 'Turborepo', 'TypeScript']
         },
         {
            date: 'SEP 2023 — MAR 2025',
            title: 'Senior Full-Stack Developer',
            co: 'Darik Holding',
            desc: "Built the Trasafar CRM dashboard for airline ticketing (up to 30,000 ticket sales in a strong month) with ApexCharts, role management, and TanStack Table. Built the Tractor FC ticketing platform (50,000+ weekly ticket sales) with dynamic forms and a stadium-map seat selector, tuned for performance under high-traffic sale windows — driving the club's ticket page to the #1 Google result. Reviewed PRs across projects.",
            tags: ['Next.js 15', 'ApexCharts', 'React Hook Form', 'TanStack Table']
         },
         {
            date: 'APR 2023 — SEP 2023',
            title: 'Senior Front-End Developer',
            co: 'Seraj Samaneh',
            desc: 'Built an ERP website and dashboard, including a custom component library on MUI and Sass.',
            tags: ['React', 'MUI', 'Formik', 'Sass']
         },
         {
            date: 'JUN 2022 — APR 2023',
            title: 'Full-Stack Developer',
            co: 'Bonti',
            desc: 'Built the product site on Next.js, Redux, and Tailwind. Deployed the Bonti token smart contract with Hardhat and Ether.js, and built a Node.js blockchain microservice for HD wallets, tested with Jest and RTL.',
            tags: ['Solidity', 'Hardhat', 'Ether.js', 'Next.js']
         },
         {
            date: 'MAY 2020 — APR 2022',
            title: 'Front-End Developer',
            co: 'Media-Soft',
            desc: 'Built a social platform for Iranian stock market users with React, Redux, and Socket.io, including real-time data visualization with Highcharts.',
            tags: ['React', 'Redux', 'Socket.io', 'Highcharts']
         }
      ],
      skillGroups: [
         {
            title: 'Core',
            skills: ['JavaScript', 'TypeScript', 'Solidity', 'React', 'Next.js', 'Redux', 'Zustand']
         },
         {
            title: 'Full-stack',
            skills: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Docker']
         },
         {
            title: 'Styling & UI',
            skills: ['Tailwind CSS', 'shadcn', 'MUI', 'Styled Components']
         },
         {
            title: 'Data & Forms',
            skills: ['React Query', 'TanStack Table', 'React Hook Form', 'Formik', 'Zod', 'Yup']
         },
         {
            title: 'Visualization & Maps',
            skills: ['ApexCharts', 'Highcharts', 'Leaflet', 'Neshan', 'TradingView']
         },
         {
            title: 'Testing & Tooling',
            skills: [
               'Jest',
               'Playwright',
               'Mocha',
               'Chai',
               'React Testing Library',
               'Husky',
               'ESLint',
               'Figma',
               'Adobe XD'
            ]
         }
      ],
      projects: [
         {
            marker: 'A',
            title: 'Trasafar CRM Dashboard',
            desc: 'Operations dashboard for an airline ticketing business — role management, ApexCharts reporting, and TanStack Table handling up to 30,000 ticket sales a month.'
         },
         {
            marker: 'B',
            title: 'Tractor FC Ticketing Platform',
            desc: "Stadium-map seat selection and dynamic checkout forms built to hold up under 50,000+ weekly ticket sales, with the club's ticket page ranking #1 on Google."
         },
         {
            marker: 'C',
            title: 'Poultry Diet Web Software',
            desc: 'A feed-formulation web app for calculating balanced poultry diets.'
         },
         {
            marker: 'D',
            title: 'Rikas',
            desc: 'An AI-driven marketing campaign platform, built on Next.js.'
         },
         {
            marker: 'E',
            title: 'Vega Link',
            desc: 'Landing site for an AI services company.'
         }
      ]
   }
}
