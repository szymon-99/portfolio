import { motion } from 'framer-motion'
import { scaleY } from '../../utils/animations'

const Alert = ({ type, children }) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      variants={scaleY}
      exit={{ opacity: 0 }}
      className={`p-2  rounded-md text-gray-800 font-medium
        ${type === 'error' && 'bg-red-200'}
        ${type === 'success' && 'bg-green-200'}`}
    >
      {children}
    </motion.div>
  )
}

export default Alert
