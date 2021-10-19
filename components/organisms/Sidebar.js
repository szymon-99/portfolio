import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { navLinks } from '../../utils/constanst'
import { SocialLinks } from '../molecules'

const sidebarTransition = { type: 'spring', duration: 0.4 }

const Sidebar = ({ close }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = '')
  }, [])

  return (
    <>
      {/* background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: sidebarTransition,
        }}
        exit={{ opacity: 0, transition: sidebarTransition }}
        className='fixed inset-0 bg-black/40 z-10'
        onClick={close}
      ></motion.div>

      {/* sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{
          x: '0%',
          transition: sidebarTransition,
        }}
        exit={{ x: '100%', transition: sidebarTransition }}
        className='fixed inset-y-0 right-0 bg-white z-10 pt-16 '
      >
        <ul className='flex flex-col'>
          {navLinks.map((link) => {
            const { href, label } = link

            return (
              <li key={href}>
                <a
                  onClick={close}
                  href={href}
                  className='block text-gray-800  py-4 px-10 hover:bg-yellow-50  '
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
        <div className='flex justify-center mt-6'>
          <SocialLinks />
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
