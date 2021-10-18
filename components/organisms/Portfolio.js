import { Project } from '../molecules'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Portfolio = () => {
  const animationControl = useAnimation()
  const { inView, ref } = useInView()

  if (inView) {
    animationControl.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    })
  }

  return (
    <motion.section
    // initial={{ x: 230, opacity: 0 }}
    // animate={animationControl}
    // ref={ref}
    // className='container'
    >
      Portfolio
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </motion.section>
  )
}

export default Portfolio
