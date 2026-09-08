import { pageContants } from '@/constants/contant/page'
import Sheet from '@/components/app/home/components/shared/sheet'

const { home } = pageContants

export default function SystemsSheet() {
   return (
      <Sheet
         id="sheet-03"
         label={home.sheets.systems}>
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
      </Sheet>
   )
}
