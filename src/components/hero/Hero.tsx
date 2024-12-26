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
              Senior Software Developer{' '}
              <a
                className="text-main-600 hover:text-main-400 dark:text-main-400 dark:hover:text-main-200"
                href="https://www.nearform.com/"
              >
                @ Nearform
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
          </div>
        </div>
      </div>
    </section>
  )
}
