import { navLinks } from '../../utils/constanst'
import { Logo, Toggle } from '../atoms'
import { SocialLinks } from '../molecules'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideTop } from '../../utils/animations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.header
      variants={slideTop}
      custom={1.2}
      initial='initial'
      animate='animate'
      className='container h-16 flex items-center justify-between md:h-20'
    >
      <Logo />

      {/* desktop nav */}
      <nav className='hidden md:flex gap-12'>
        {navLinks.map((link) => {
          const { label, href } = link

          return (
            <a
              key={href}
              href={href}
              className='text-lg flex capitalize border-b-2 border-transparent hover:border-yellow-500/80 transition-colors'
            >
              {label}
            </a>
          )
        })}

        <SocialLinks />
      </nav>

      <Toggle isOpen={isOpen} toggle={navToggle} />
    </motion.header>
  )
}

export default Navbar
