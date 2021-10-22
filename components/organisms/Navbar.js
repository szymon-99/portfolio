import { navLinks } from '../../utils/constanst'
import { Logo, Toggle } from '../atoms'
import { SocialLinks } from '../molecules'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideTop } from '../../utils/animations'
import Sidebar from './Sidebar'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.header
      variants={slideTop}
      custom={2}
      initial='initial'
      animate='animate'
      className='absolute inset-x-0 top-0 page-width h-16 flex items-center justify-between md:h-20 z-10'
    >
      <Logo lg />

      <nav className='hidden md:flex items-center gap-12'>
        {navLinks.map((link) => {
          const { label, href } = link

          return (
            <a
              key={href}
              href={href}
              className=' text-base font-medium capitalize transition  leading-none  text-gray-800 hover:text-yellow-500'
            >
              {label}
            </a>
          )
        })}

        <SocialLinks />
      </nav>

      <Toggle isOpen={isOpen} toggle={navToggle} />

      <AnimatePresence>
        {isOpen && <Sidebar close={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
