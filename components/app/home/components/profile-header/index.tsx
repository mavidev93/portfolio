import { pageContants } from '@/constants/contant/page'
import Sheet from '@/components/app/home/components/_shared/sheet'

const { home } = pageContants

export default function ProfileHeader() {
   return (
      <Sheet
         id="sheet-01"
         label={home.sheets.profile}>
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
      </Sheet>
   )
}
