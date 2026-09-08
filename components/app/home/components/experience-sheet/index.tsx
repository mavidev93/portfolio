import { pageContants } from '@/constants/contant/page'

const { home } = pageContants

export default function ExperienceSheet() {
   return (
      <section
         className="sheet"
         id="sheet-02">
         <div className="sheet-label">
            {home.sheets.experience.number} <span className="rule" /> {home.sheets.experience.title}
         </div>

         {home.jobs.map((job) => (
            <div
               className="job"
               key={job.co}>
               <div className="job-head">
                  <span className="job-date">{job.date}</span>
               </div>
               <h3 className="job-title">
                  {job.title}{' '}
                  <span className="co">
                     {home.coSeparator} {job.co}
                  </span>
               </h3>
               <p className="job-desc">{job.desc}</p>
               <div className="tags">
                  {job.tags.map((tag) => (
                     <span
                        className="tag"
                        key={tag}>
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         ))}
      </section>
   )
}
