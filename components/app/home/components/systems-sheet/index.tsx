import { pageContants } from '@/constants/contant/page'

const { home } = pageContants

export default function SystemsSheet() {
   return (
      <section
         className="sheet"
         id="sheet-03">
         <div className="sheet-label">
            {home.sheets.systems.number} <span className="rule" /> {home.sheets.systems.title}
         </div>

         {home.skillGroups.map((group) => (
            <div
               className="skill-group"
               key={group.title}>
               <h3>{group.title}</h3>
               <div className="skill-list">
                  {group.skills.map((skill) => (
                     <span key={skill}>{skill}</span>
                  ))}
               </div>
            </div>
         ))}
      </section>
   )
}
