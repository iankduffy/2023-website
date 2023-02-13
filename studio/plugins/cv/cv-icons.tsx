import { IoMdSchool, IoMdPerson } from 'react-icons/io'
import { FaLinkedin, FaGlobeEurope, FaEnvelope, FaCogs, FaHeart, FaBriefcase } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
export const iconOptions = [
  { title: 'Web', value: 'web' },
  { title: 'Linkedin', value: 'linkedin' },
  { title: 'Email', value: 'email' },
  { title: 'Education', value: 'education' },
  { title: 'Cogs', value: 'cogs' },
  { title: 'Heart', value: 'heart' },
  { title: 'Person', value: 'person' },
  { title: 'Briefcase', value: 'briefcase' },
  { title: 'Misc', value: 'misc' },
]

export const iconComponent: any = {
  web: FaGlobeEurope,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  education: IoMdSchool,
  cogs: FaCogs,
  heart: FaHeart,
  person: IoMdPerson,
  briefcase: FaBriefcase,
  misc: HiDotsHorizontal
}

export function RenderIcon({ icon }: { icon: string }) {
  if (!icon) {
    console.error('Missing section')
    return null
  }

  const Icon = iconComponent[icon] as React.ComponentType | null

  if (!Icon) {
    return null
  }

  return <Icon />
}