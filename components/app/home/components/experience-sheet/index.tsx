import { pageContants } from '@/constants/contant/page'
import Sheet from '@/components/app/home/components/shared/sheet'

const { home } = pageContants

export default function ExperienceSheet() {
   return (
      <Sheet
         id="sheet-02"
         label={home.sheets.experience}>
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
      </Sheet>
   )
}
