import Image from 'next/image'
import logoWhite from '../../../public/assets/logo_white.png'
import logoBlack from '../../../public/assets/logo_black.png'

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-20 px-4 py-2">
      <div className="h-full w-28 py-1">
        <Image
          src={logoWhite}
          className="h-full w-full hidden dark:block "
          alt="logo"
        />
        <Image
          src={logoBlack}
          className="h-full w-full block dark:hidden"
          alt="logo"
        />
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
