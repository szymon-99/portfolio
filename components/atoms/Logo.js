import Link from 'next/link'

const Logo = ({ lg }) => {
  return (
    <div>
      <Link href='/'>
        <a
          className={`text-xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-900 ${
            lg && 'md:text-2xl'
          }`}
        >
          Szymon Prusak
        </a>
      </Link>
    </div>
  )
}

export default Logo
