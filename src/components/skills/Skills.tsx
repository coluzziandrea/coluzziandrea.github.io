import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa'
import { SiTypescript, SiNextdotjs } from 'react-icons/si'

import { IoLogoAndroid } from 'react-icons/io'

import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'

export const Skills = () => {
  const skills = [
    {
      label: 'javascript',
      icon: <IoLogoJavascript />,
    },

    {
      label: 'react.js',
      icon: <FaReact />,
    },
    {
      label: 'next.js',
      icon: <SiNextdotjs />,
    },
    {
      label: 'HTML5',
      icon: <FaHtml5 />,
    },
    {
      label: 'CSS3',
      icon: <FaCss3Alt />,
    },
    {
      label: 'node.js',
      icon: <FaNodeJs />,
    },
    {
      label: 'android',
      icon: <IoLogoAndroid />,
    },
    {
      label: 'typescript',
      icon: <SiTypescript />,
    },
    {
      label: 'aws',
      icon: <FaAws />,
    },
    {
      label: 'docker',
      icon: <FaDocker />,
    },
    {
      label: 'sql',
      icon: <FaDatabase />,
    },
    {
      label: 'firebase',
      icon: <IoLogoFirebase />,
    },
  ]

  return (
    <section className="px-4 select-none">
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            className="flex flex-col items-center justify-center gap-1 text-slate-700 opacity-70 hover:opacity-100 hover:text-main-500 dark:text-slate-400"
            key={skill.label}
          >
            <div className="text-3xl md:text-5xl">{skill.icon}</div>
            <div className="font-mono font-light text-xs md:text-sm">
              {skill.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
// Compare
