import { pageContants } from '@/constants/contant/page'

const { home } = pageContants

export default function ProjectsSheet() {
   return (
      <section
         className="sheet"
         id="sheet-04">
         <div className="sheet-label">
            {home.sheets.projects.number} <span className="rule" /> {home.sheets.projects.title}
         </div>

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
      </section>
   )
}
