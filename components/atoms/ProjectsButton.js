import { motion } from 'framer-motion'
import { scaleUpDown } from '../../utils/animations'

const ProjectsButton = () => {
  return (
    <div className='flex justify-start mt-4 md:mt-6'>
      <motion.a
        variants={scaleUpDown}
        initial='initial'
        animate='animate'
        custom={1.6}
        href='#projects'
        className='inline-block py-2 px-4 md:py-3 md:px-6   text-gray-300 transition  active:scale-95 relative  hover:text-gray-800 text-xs font-semibold sm:text-sm

        before:bg-gray-800
        before:absolute
        before:inset-0
        before:z-[-2]

        after:bg-gray-200
        after:absolute
        after:inset-0
        after:z-[-1]
        after:scale-x-0
        after:origin-left
        after:transition
        after:duration-200
        hover:after:scale-x-100
        '
      >
        Check my projects
      </motion.a>
    </div>
  )
}

export default ProjectsButton
