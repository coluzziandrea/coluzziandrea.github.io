import { FaDiagramProject, FaBlog } from 'react-icons/fa6'
import { MdOutlineWork } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'

export type HeaderNavBarProps = {
  orientation: 'horizontal' | 'vertical'

  onItemClicked: (item: string) => void
}

export const HeaderNavBar = ({
  orientation,
  onItemClicked,
}: HeaderNavBarProps) => {
  const navItems = [
    {
      href: '/#experiences',
      text: 'Work Experiences',
      icon: <MdOutlineWork />,
    },
    { href: '/#projects', text: 'Projects', icon: <FaDiagramProject /> },
    {
      href: 'https://blog.coluzziandrea.com/',
      text: 'Blog',
      icon: <FaBlog />,
    },
    { href: '/assets/resume.pdf', text: 'Resume', icon: <IoDocumentText /> },
    { href: '/#contacts', text: 'Contact Me', icon: <FaTelegramPlane /> },
  ]

  return (
    <nav
      className={`flex ${
        orientation === 'vertical' ? 'flex-col' : 'flex-row'
      } items-start justify-between gap-4 p-4`}
    >
      {navItems.map((item) => (
        <div
          key={item.text}
          className="flex flex-row gap-2 items-baseline justify-center  cursor-pointer hover:text-main-600 dark:hover:text-main-300 transition-colors duration-300 ease-in-out"
          onClick={() => {
            onItemClicked(item.href)
          }}
        >
          <span className="">{item.icon}</span>
          <span className="font-semibold text-xl md:text-sm">{item.text}</span>
        </div>
      ))}
    </nav>
  )
}
