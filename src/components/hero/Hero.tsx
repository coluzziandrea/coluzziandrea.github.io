import Image from 'next/image'
import hero from '../../../public/assets/hero.png'

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4  gap-4 select-none">
      <div className="flex flex-col gap-4">
        <h1 className="w-fit text-5xl md:text-7xl italic font-semibold font-mono text-left tracking-wider inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
          &lt;Andrea
        </h1>
        <h1 className="w-fit text-5xl md:text-7xl italic font-semibold font-mono text-left tracking-wider inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
          Coluzzi/&gt;
        </h1>
        <h2 className="text-xl font-light font-mono text-start tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-main-600 dark:from-secondary-500 dark:to-main-500">
          Full-Stack Software Engineer
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={hero}
            className="h-64 w-64 animate-pulse running hover:paused md:w-80 md:h-80"
            alt="logo"
            draggable={false}
          />

          <div className="flex flex-col items-center font-semibold">
            <p>
              Software Engineer{' '}
              <a
                className="text-main-600 hover:text-main-400 dark:text-main-400 dark:hover:text-main-200"
                href="https://www.klarna.com/"
              >
                @ Klarna
              </a>
            </p>
            <p>
              Community Founder{' '}
              <a
                className="text-main-600 hover:text-main-400 dark:text-main-400 dark:hover:text-main-200"
                href="https://www.latinaintech.org/"
              >
                @ Latina In Tech
              </a>
            </p>

            <p>
              Streamer{' '}
              <a
                className="text-main-600 hover:text-main-400 dark:text-main-400 dark:hover:text-main-200"
                href="https://www.twitch.tv/andreacoluzzidev"
              >
                @ Twitch
              </a>
            </p>

            <p>
              Host{' '}
              <a
                className="text-main-600 hover:text-main-400 dark:text-main-400 dark:hover:text-main-200"
                href="https://www.thebytessmith.dev/"
              >
                @ The Bytes Smith
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col font-medium gap-4 mx-2 p-4 rounded-3xl bg-gradient-to-r from-main-400 to-secondary-400 dark:from-main-800 dark:to-secondary-800">
          <p>
            👩‍💻 I&apos;m Andrea, a Passionate Full Stack Software Engineer from
            Italy 💚🤍❤️
          </p>

          <p>
            💼 Building the best Gift Cards experience in Klarna since Feb 2023
            🛍️
          </p>

          <p>
            🔥 In Jan 2023 I founded Latina In Tech, a local tech community
            based in Latina, Italy. We organize monthly tech events on various
            topics 🎙️
          </p>

          <p>
            🟣 From Jan 2024 I started streaming my coding sessions on Twitch,
            follow me on my channel! 🟣
          </p>

          <p>
            📻📻📻 Hosting <strong>The Bytes Smith</strong> podcast, a channel
            for weekly digested tech news for the digital artisan.
          </p>

          <p>
            🎸 I also play as guitarist for a rock band named Kezurya 🎵🎵🎵
          </p>
        </div>
      </div>
    </section>
  )
}
