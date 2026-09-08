import { pageContants } from '@/constants/contant/page'
import Sheet from '@/components/app/home/components/_shared/sheet'

const { home } = pageContants

export default function ProjectsSheet() {
   return (
      <Sheet
         id="sheet-04"
         label={home.sheets.projects}>
         {home.projects.map((project) => (
            <div
               className="project"
               key={project.marker}>
               <div className="marker">{project.marker}</div>
               <div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
               </div>
            </div>
         ))}
      </Sheet>
   )
}
