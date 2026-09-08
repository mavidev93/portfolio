import ContactIcons from '@/components/app/home/components/contact-icons'
import CropMarks from '@/components/app/home/components/crop-marks'
import ExperienceSheet from '@/components/app/home/components/experience-sheet'
import ProgressBar from '@/components/app/home/components/progress-bar'
import ProfileHeader from '@/components/app/home/components/profile-header'
import ProjectsSheet from '@/components/app/home/components/projects-sheet'
import SectionNav from '@/components/app/home/components/section-nav'
import SystemsSheet from '@/components/app/home/components/systems-sheet'

export default function HomeComponents() {
   return (
      <>
         <ProgressBar />
         <CropMarks />
         <SectionNav />
         <ContactIcons />

         <main>
            <div className="content">
               <ProfileHeader />
               <ExperienceSheet />
               <SystemsSheet />
               <ProjectsSheet />
            </div>
         </main>
      </>
   )
}
