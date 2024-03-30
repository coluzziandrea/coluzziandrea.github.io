import Image from 'next/image'
import hero from '../../../public/assets/hero.png'

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-2 p-4 gap-4 select-none">
      <div className="flex flex-col gap-4">
        <h1 className="w-fit text-5xl md:text-6xl font-semibold text-center uppercase tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
          Andrea
        </h1>
        <h1 className="w-fit text-5xl md:text-6xl font-semibold text-center uppercase tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
          Coluzzi
        </h1>
        <h2 className="text-xl font-bold font-mono text-center tracking-wide inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-main-600 dark:from-secondary-500 dark:to-main-500">
          Full-Stack Software Engineer
        </h2>
      </div>

      <div className="flex flex-col animate-pulse paused hover:running">
        <Image
          src={hero}
          className="h-full w-full"
          alt="logo"
          draggable={false}
        />

        <div className="flex flex-col items-center font-semibold">
          <p>
            Software Engineer{' '}
            <a className="text-main-600" href="https://www.klarna.com/">
              @ Klarna
            </a>
          </p>
          <p>
            Community Founder{' '}
            <a className="text-main-600" href="https://www.latinaintech.org/">
              @ Latina In Tech
            </a>
          </p>

          <p>
            Streamer{' '}
            <a
              className="text-main-600"
              href="https://www.twitch.tv/andreacoluzzidev"
            >
              @ Twitch
            </a>
          </p>

          <p className="text-center font-light">
            If you think education is expensive, try ignorance
          </p>
        </div>
      </div>

      <div className="flex flex-col font-medium gap-4 mx-2 p-4 rounded-3xl bg-gradient-to-r from-main-400 to-secondary-400 dark:from-main-800 dark:to-secondary-800">
        <p>
          👩‍💻 I&apos;m Andrea, a Passionate Full Stack Software Engineer from
          Italy 💚🤍❤️
        </p>

        <p>
          💼 Building the best Gift Cards experience in Klarna since Feb 2023 🛍️
        </p>

        <p>
          🔥 In Jan 2023 I founded Latina In Tech, a local tech community based
          in Latina, Italy. We organize monthly tech events on various topics 🎙️
        </p>

        <p>🎸 I also play as guitarist for a rock band named Kezurya 🎵🎵🎵</p>
      </div>
    </section>
  )
}
