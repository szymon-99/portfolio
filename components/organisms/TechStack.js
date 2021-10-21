import { Technology } from '../molecules'
import { technologies } from '../../utils/constanst'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TechStack = () => {
  const { inView, ref } = useInView({ threshold: 0.8 })

  return (
    <div>
      <h4 className='text-xl md:text-2xl text-center font-medium mb-8 text-gray-800'>
        Tech Stack
      </h4>

      <motion.ul
        ref={ref}
        className='grid gap-6 grid-cols-3 justify-items-center md:grid-cols-4'
      >
        {technologies.map((tech, i) => {
          return <Technology key={i} {...tech} index={i} inView={inView} />
        })}
      </motion.ul>
    </div>
  )
}

export default TechStack
