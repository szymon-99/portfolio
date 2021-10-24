import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideLeft, slideRight, slideBottom } from '../../utils/animations'
import NextImage from 'next/image'
import PreviewButtons from './PreviewButtons'
import { Chip } from '../atoms'
import { useState, useEffect } from 'react'

const Project = ({
  title,
  image,
  id,
  technologies,
  github,
  demo,
  category,
  intro,
  isOdd,
}) => {
  const { inView, ref } = useInView({ threshold: 0.5 })
  const animationControls = useAnimation()
  const { file, description: alt } = image.fields

  if (inView) {
    animationControls.start('animate')
  }

  return (
    <motion.article
      ref={ref}
      variants={isOdd ? slideLeft : slideRight}
      initial='initial'
      custom={{ duration: 1.1 }}
      animate={animationControls}
      className='w-full max-w-xl lg:max-w-none
      flex flex-col lg:flex-row lg:odd:flex-row-reverse 
       rounded overflow-hidden shadow-lg bg-white lg:min-h-[26rem]
       gap:4 lg:p-8 lg:gap-8 '
    >
      {/* image */}
      <div
        className='flex items-center justify-center
      w-full h-full lg:w-[56%]'
      >
        <div
          className='relative pt-[56.25%] lg:pt-0 lg:h-96
          w-full lg:rounded-md overflow-hidden '
        >
          <NextImage
            placeholder='blur'
            blurDataURL={`https:${file.url}`}
            src={`https:${file.url}`}
            alt={alt}
            layout='fill'
            className=' object-cover'
          />
        </div>
      </div>

      {/* desc */}
      <div
        className='w-full lg:w-[44%]
      flex flex-col justify-between p-6 sm:p-8 lg:p-4 '
      >
        <div>
          <h4 className=' text-3xl lg:text-4xl font-medium text-gray-800'>
            {title}
          </h4>
          <p className='lowercase mb-4 lg:mb-6  text-base md:text-lg font-light text-gray-800/80'>
            {category}
          </p>

          <p className=' lg:text-base'>{intro}</p>
        </div>

        <div>
          <div className='flex gap-4 sm:gap-6  mt-6 lg:mt-12 '>
            <PreviewButtons demo={demo} github={github} pageHref={id} />
          </div>

          <div className='flex flex-wrap lg:w-3/4 mt-4 gap-2'>
            {technologies.map((tech, i) => (
              <Chip text={tech} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default Project
