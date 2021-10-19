import { Project } from '../molecules'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Title } from '../atoms'
import { slideBottom } from '../../utils/animations'

const Portfolio = () => {
  const animationControl = useAnimation()
  const { inView, ref } = useInView()

  if (inView) {
    animationControl.start('animate')
  }

  return (
    <section id='portfolio' className='section '>
      <motion.div
        ref={ref}
        variants={slideBottom}
        custom={0.2}
        initial='initial'
        animate={animationControl}
      >
        <Title>Portfolio</Title>
      </motion.div>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  )
}

export default Portfolio
