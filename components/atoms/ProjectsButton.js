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
        href='#portfolio'
        className='btn-action'
      >
        Check my projects
      </motion.a>
    </div>
  )
}

export default ProjectsButton
