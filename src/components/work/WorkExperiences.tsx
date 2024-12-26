import Image from 'next/image'

import klarna from '../../../public/assets/klarna.png'
import targa from '../../../public/assets/targa.png'
import miware from '../../../public/assets/miware_1.png'
import sapienza from '../../../public/assets/sapienza.png'
import marini from '../../../public/assets/marini_1.png'
import nearform from '../../../public/assets/nearform.jpg'
import Link from 'next/link'

export const WorkExperiences = () => {
  const experiences = [
    {
      company: 'Nearform',
      link: 'https://www.nearform.com/',
      role: 'Senior Software Developer',
      period: 'Aug 2024 - present',
      description:
        'Designing & developing software solutions for multiple clients, focusing on the development of applications. Working with cutting-edge technologies and methodologies, such as Node.js, React, and Next.js, to deliver high-quality software solutions.',
      logo: nearform,
      colors: 'from-[#2826af] to-[#1bb64f]',
    },
    {
      company: 'Klarna',
      link: 'https://www.klarna.com/',
      role: 'Software Engineer',
      period: 'Feb 2023 - Jul 2024',
      description:
        'Designing & Developing FinTech solutions for Klarna App’s users. In particular, I’ve been working on the GIft Card features for the US customers, building both FrontEnd mobile app & BackEnd service',
      logo: klarna,
      colors: 'from-[#FFA8CD] to-[#2C2242]',
    },
    {
      company: 'Targa Telematics',
      link: 'https://www.targatelematics.com/',
      role: 'Software Engineer',
      period: 'Apr 2022 - Feb 2023',
      description:
        "Designing & Developing Fleet Management solutions for Automotive Business customers. Applying IoT to the automotive sector. Building a microservices based architecture to manage connected vehicle's data and delivering our customers the best solution for their business needs.",
      logo: targa,
      colors: 'from-[#7FBC09] to-[#001636]',
    },
    {
      company: 'Marini Impianti Industriali',
      link: 'https://www.mariniimpianti.it/',
      role: 'Software Engineer',
      period: 'Feb 2018 - Apr 2022',
      description:
        'Analysis, designing and implementation of software solutions for diagnostic and maintenance of Railway Systems, main customer: Rete Ferroviaria Italiana (RFI)',
      logo: marini,
      colors: 'from-[#00477F] to-[#75C1E9]',
    },
    {
      company: 'La Sapienza, University of Rome',
      link: 'https://www.uniroma1.it/',
      role: 'BS - Engineering in Computer Science',
      period: 'Oct 2013 - Oct 2017',
      description:
        "I completed my Bachelor's in Engineering in Computer Science at La Sapienza, gaining a robust foundation in computer science principles and cutting-edge technologies while engaging in practical projects and collaborative teamwork.",
      logo: sapienza,
      colors: 'from-[#802433] to-[#731120]',
    },
    {
      company: 'MiWare',
      role: 'Software Developer',
      period: 'Jul 2015 - Apr 2016',
      description:
        'Design and development of software systems for industrial automation. During this experience I also worked as a consultant for Cesare Fiorucci S.p.A. located in Pomezia',
      logo: miware,
      colors: 'from-[#847B0E] to-[#BBB6B3]',
    },
  ]

  return (
    <section
      className="flex flex-col w-full items-center gap-6 select-none"
      id="experiences"
    >
      <h2 className="text-3xl md:text-6xl py-2 font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
        Experiences
      </h2>

      <div className="flex flex-col w-full px-4 gap-4 md:grid md:grid-cols-3">
        {experiences.map((experience) => (
          <div
            key={experience.period}
            className="flex flex-col relative h-[450px] border-[1px] border-black dark:border-white rounded-3xl shadow-lg overflow-hidden"
          >
            <Link
              href={experience.link ?? ''}
              className={`flex flex-col items-center justify-start pt-10 drop-shadow-lg cursor-pointer bg-gradient-to-r ${experience.colors} h-[35%]`}
            >
              <p className="font-bold text-xl text-slate-100">
                {experience.company}
              </p>
            </Link>

            <Link
              href={experience.link ?? ''}
              className="absolute animate-bounce paused hover:running top-[25%] left-[38%] h-24 w-24 cursor-pointer overflow-hidden rounded-full bg-slate-100 shadow-lg dark:shadow-gray-900"
            >
              <Image
                src={experience.logo}
                className="w-full h-full object-contain"
                alt="logo"
                draggable={false}
              />
            </Link>

            <div className="flex flex-col gap-2 px-4 pt-4 flex-grow items-center  justify-center">
              <p className="font-semibold text-lg text-center">
                {experience.role}
              </p>

              <p className="font-light font-mono text-sm">
                {experience.period}
              </p>

              <p className="text-justify text-sm font-light tracking-wide">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
