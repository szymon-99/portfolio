import { Project } from '../molecules'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Title } from '../atoms'
import { slideBottom } from '../../utils/animations'

const Portfolio = ({ projects }) => {
  const animationControl = useAnimation()
  const { inView, ref } = useInView({ threshold: 1 })

  if (inView) {
    animationControl.start('animate')
  }

  return (
    <section id='portfolio' className='section '>
      <motion.div
        ref={ref}
        variants={slideBottom}
        initial='initial'
        animate={animationControl}
      >
        <Title>Projects</Title>
      </motion.div>

      <ul className='grid gap-16 lg:gap-24 justify-items-center'>
        {projects.map((project, i) => (
          <Project key={i} {...project} isOdd={Boolean(i % 2)} />
        ))}
      </ul>
    </section>
  )
}

export default Portfolio
