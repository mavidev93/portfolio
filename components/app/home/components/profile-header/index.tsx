import { pageContants } from '@/constants/contant/page'

const { home } = pageContants

export default function ProfileHeader() {
   return (
      <section
         className="sheet"
         id="sheet-01">
         <div className="sheet-label">
            {home.sheets.profile.number} <span className="rule" /> {home.sheets.profile.title}
         </div>
         <h1>{home.profile.name}</h1>
         <p className="role">{home.profile.role}</p>
         <p className="lede">{home.profile.lede}</p>
         <div className="status-line">
            {home.profile.statusLine.map((item) => (
               <span key={item.label}>
                  <b>{item.label}</b> {home.profile.statusSeparator} {item.value}
               </span>
            ))}
         </div>
      </section>
   )
}
