const AboutText = () => {
  return (
    <div className='flex items-center'>
      <div className=' flex flex-col gap-2 sm:px-4'>
        <p className='text-base md:text-lg'>
          I'm self taught
          <span className='text-purple-900 font-bold'>
            {' '}
            frontend developer{' '}
          </span>{' '}
          from Poland.
        </p>
        <p className='text-base md:text-lg'>
          I started coding in February 2021, and it immediately changed my daily
          routine completely! Since then I can't imagine a day without coding or
          at least learning about tech.
        </p>

        <p>
          I'm trying to use the
          <span className='text-purple-900 font-bold'>
            {' '}
            latest technologies{' '}
          </span>
          in my projects, and I always care about them being{' '}
          <span className='text-purple-900 font-bold'> mobile friendly.</span>
        </p>

        <p>
          My favourite part of making websites is to make them
          <span className='text-purple-900 font-bold'>
            {' '}
            dynamic and interactive{' '}
          </span>
          for the user.
        </p>

        <p>
          For this purpose I'm using
          <span className='text-purple-900 font-bold'> React </span> and it's
          huge ecosystem of public libraries.
        </p>

        <p className='text-xl md:text-2xl font-semibold'>
          I'm currently looking for a
          <span className='text-purple-900 font-bold'> job </span> or
          internship.
        </p>

        <div className='flex justify-start mt-2 md:mt-4 '>
          <a href='#contact' className='btn z-10'>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutText
