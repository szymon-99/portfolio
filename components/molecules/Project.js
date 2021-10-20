import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideLeft, slideRight } from '../../utils/animations'
import NextImage from 'next/image'
import { Chip } from '../atoms'

const Project = ({
  title,
  image,
  technologies,
  github,
  demo,
  category,
  intro,
  isOdd,
}) => {
  const { inView, ref } = useInView({ threshold: 0.6 })
  const animationControls = useAnimation()
  const { file, description: alt } = image.fields

  if (inView) {
    animationControls.start('animate')
  }
  return (
    <motion.article
      ref={ref}
      variants={isOdd ? slideRight : slideLeft}
      initial='initial'
      animate={animationControls}
      className='w-full max-w-xl lg:max-w-none
      flex flex-col lg:flex-row lg:odd:flex-row-reverse 
      shadow-lg rounded overflow-hidden bg-white'
    >
      {/* image */}
      <div
        className='flex items-center justify-center
      w-full h-full lg:w-[52%]'
      >
        <div
          className='relative pt-[56.25%] lg:pt-0 lg:h-96
          w-full 
        rounded-md overflow-hidden'
        >
          <NextImage
            placeholder='blur'
            blurDataURL={`https:${file.url}`}
            src={`https:${file.url}`}
            alt={alt}
            layout='fill'
            className='object-cover  '
          />
        </div>
      </div>

      {/* desc */}
      <div
        className='w-full lg:w-[48%] p-4 sm:p-6 lg:p-12
      flex flex-col justify-center'
      >
        <h4 className=' text-2xl lg:text-3xl font-semibold text-gray-800'>
          {title}
        </h4>
        <p className='lowercase mb-2  text-base md:text-lg font-light text-gray-800/80'>
          {category}
        </p>

        <p>{intro}</p>

        <div className='flex gap-6 mt-6 lg:mt-12'>
          <a
            target='_blank'
            href={demo}
            className='btn bg-gray-800 text-gray-50 hover:bg-gray-400 hover:text-gray-800 '
          >
            live
          </a>
          <a
            target='_blank'
            href={github}
            className='btn ring-1 ring-gray-800 text-gray-800 hover:bg-gray-400 hover:text-gray-50 hover:ring-gray-400'
          >
            code
          </a>
        </div>

        <div className='flex sm:w-3/4 gap-2 flex-wrap mt-4 md:mt-6'>
          {technologies.map((tech, i) => (
            <Chip key={i} text={tech} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default Project
