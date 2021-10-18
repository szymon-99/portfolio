import NextImage from 'next/image'
import { motion } from 'framer-motion'
import { slideLeft, scaleY, slideRight } from '../../utils/animations'

const Hero = () => {
  return (
    <section className='-mt-16 pt-16 md:pt-20 md:-mt-20  min-h-[600px] grid grid-rows-2 lg:pt-0 lg:grid-rows-1 lg:grid-cols-2 md:h-screen lg:max-h-[900px]  relative pointer-events-none'>
      <div className=' left-3/4 absolute inset-y-0 md:left-[55%] -right-6 bg-yellow-500/10'></div>

      <motion.div
        variants={slideLeft}
        initial='initial'
        animate='animate'
        className='flex flex-col justify-center'
      >
        <p className='text-2xl mb-6 md:mb-8 text-black/75 md:text-3xl'>
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
          custom={0.5}
          className=' text-5xl md:text-6xl font-bold uppercase text-black/80'
        >
          Szymon Prusak
        </motion.h1>
        <h2 className='text-3xl md:text-4xl text-yellow-500  uppercase flex items-center'>
          Frontend Developer
        </h2>
      </motion.div>

      <motion.div
        variants={slideRight}
        initial='initial'
        animate='animate'
        className='relative w-full h-full'
      >
        <NextImage src='/hero-img.svg' layout='fill' />
      </motion.div>
    </section>
  )
}

export default Hero
