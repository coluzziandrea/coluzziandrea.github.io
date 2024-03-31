import Image from 'next/image'

import klarna from '../../../public/assets/klarna.png'
import targa from '../../../public/assets/targa.png'
import miware from '../../../public/assets/miware_1.png'
import sapienza from '../../../public/assets/sapienza.png'
import marini from '../../../public/assets/marini_1.png'

export const WorkExperiences = () => {
  const experiences = [
    {
      company: 'Klarna',
      role: 'Software Engineer',
      period: 'Feb 2023 - present',
      description: 'lorem',
      logo: klarna,
    },
    {
      company: 'Targa',
      role: 'Software Engineer',
      period: 'Apr 2022 - Feb 2023',
      description: 'lorem',
      logo: targa,
    },
    {
      company: 'Marini Impianti Industriali',
      role: 'Software Engineer',
      period: 'Feb 2018 - Apr 2022',
      description: 'lorem',
      logo: marini,
    },
    {
      company: 'La Sapienza, University of Rome',
      role: 'BS - Engineering in Computer Science',
      period: 'Oct 2013 - Oct 2017',
      description: 'lorem',
      logo: sapienza,
    },
    {
      company: 'MiWare',
      role: 'Software Developer',
      period: 'Jul 2015 - Apr 2016',
      description: 'lorem',
      logo: miware,
    },
  ]

  return (
    <section
      className="flex flex-col w-full items-center gap-6"
      id="experiences"
    >
      <h2 className="text-3xl md:text-6xl font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
        Experiences
      </h2>

      <div className="flex flex-col w-full px-4 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.period}
            className="flex flex-col relative h-96 border-[1px] border-black dark:border-white rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center drop-shadow-lg bg-main-500 h-[35%]">
              <p>{experience.company}</p>
            </div>

            <div className="absolute top-[25%] left-[35%] h-24 w-24 overflow-hidden rounded-full bg-white">
              <Image
                src={experience.logo}
                className="w-full h-full object-contain"
                alt="logo"
                draggable={false}
              />
            </div>

            <div className="flex flex-col flex-grow items-center  justify-center">
              <p>{experience.role}</p>

              <p>{experience.period}</p>

              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
