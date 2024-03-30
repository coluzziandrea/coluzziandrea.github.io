export type HeaderNavBarProps = {
  orientation: 'horizontal' | 'vertical'
}

export const HeaderNavBar = ({ orientation }: HeaderNavBarProps) => {
  return (
    <nav
      className={`flex ${
        orientation === 'vertical' ? 'flex-col' : 'flex-row'
      } items-center justify-between`}
    >
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold ">
          Andrea Coluzzi
        </a>
      </div>
      <div className="">
        <a href="/#about" className="mx-4 text-lg ">
          About
        </a>
        <a href="/#projects" className="mx-4 text-lg ">
          Projects
        </a>
        <a href="/#contact" className="mx-4 text-lg ">
          Contact
        </a>
      </div>
    </nav>
  )
}
