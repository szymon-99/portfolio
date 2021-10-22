import NextImage from 'next/image'
import { motion } from 'framer-motion'
import { slideLeft, scaleY, slideRight } from '../../utils/animations'
import { ProjectsButton } from '../atoms'

const Hero = () => {
  return (
    <section className='page-width pt-16  md:pt-20 min-h-[700px] grid grid-rows-2 md:h-screen lg:max-h-[900px]   relative mb-14 md:mb-20 overflow-hidden'>
      {/* background */}
      <div className='right-0 left-3/4 absolute inset-y-0 md:left-[55%]  bg-yellow-500/10'></div>

      <motion.div
        variants={slideLeft}
        custom={0.4}
        initial='initial'
        animate='animate'
        className='flex flex-col justify-center md:justify-end md:pb-8 lg:pb-0'
      >
        <p className='text-xl sm:text-2xl lg:text-3xl mb-6 md:mb-8 text-gray-500 '>
          Hello There!
          <span className=' text-4xl ml-2 inline-block animate-wave origin-wave'>
            &#128075;
          </span>{' '}
          I'm
        </p>

        <motion.h1
          variants={scaleY}
          initial='initial'
          animate='animate'
          custom={1}
          className=' text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-gray-800'
        >
          Szymon Prusak
        </motion.h1>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl text-yellow-500  uppercase flex items-center'>
          Frontend Developer
        </h2>

        <ProjectsButton />
      </motion.div>

      <motion.div
        variants={slideRight}
        initial='initial'
        animate='animate'
        custom={0.5}
        className='relative w-5/6 sm:w-3/4 h-full lg:w-[55%] justify-self-end'
      >
        <NextImage src='/hero-img.svg' layout='fill' />
      </motion.div>
    </section>
  )
}

export default Hero
