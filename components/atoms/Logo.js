import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <a className='text-xl md:text-2xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-900 '>
          Szymon Prusak
        </a>
      </Link>
    </div>
  )
}

export default Logo
