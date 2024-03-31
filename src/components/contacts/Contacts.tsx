import { FaGithub, FaDev } from 'react-icons/fa'
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaThreads,
  FaTwitch,
} from 'react-icons/fa6'

export const Contacts = () => {
  const contacts = [
    {
      alt: 'Github',
      href: 'https://github.com/coluzziandrea',
      icon: <FaGithub />,
    },
    {
      alt: 'Twitch',
      href: 'https://m.twitch.tv/andreacoluzzidev',
      icon: <FaTwitch />,
    },
    {
      alt: 'YouTube',
      href: 'https://www.youtube.com/@andreacoluzzidev',
      icon: <FaYoutube />,
    },
    {
      alt: 'Twitter',
      href: 'https://twitter.com/andreacoluzzi94',
      icon: <FaXTwitter />,
    },
    {
      alt: 'Linkedin',
      href: 'https://www.linkedin.com/in/andrea-coluzzi/',
      icon: <FaLinkedin />,
    },
    {
      alt: 'DevTo',
      href: 'https://dev.to/coluzziandrea',
      icon: <FaDev />,
    },
    {
      alt: 'Threads',
      href: 'https://www.threads.net/@andreacoluzzi94',
      icon: <FaThreads />,
    },
  ]

  return (
    <section className="flex flex-col w-full pb-4 items-center gap-2 select-none">
      <h2
        className="text-3xl font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500"
        id="contacts"
      >
        Reach Out
      </h2>

      <h3 className="font-mono text-center">
        Have a question or want to work together?
      </h3>

      <div className="flex flex-row gap-4 mt-4">
        {contacts.map((contact, index) => (
          <div
            key={contact.alt}
            className={`animate-bounce delay-${
              index * 100
            } running hover:paused bg-main-400 shadow-lg rounded-full p-2 cursor-pointer  hover:bg-main-300 dark:bg-main-800 dark:hover:bg-main-600`}
          >
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              <span className="text-lg">{contact.icon}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
