const AboutText = () => {
  return (
    <div className='px-4 md:px-6 flex flex-col gap-2'>
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
        I'm trying to use the latest technologies in my projects, and I always
        care about them being mobile friendly.
      </p>

      <p>
        My favourite part of making websites is to make them{' '}
        <span className='text-purple-900 font-bold'> dynamic </span> and engaing
        for the user.
      </p>

      <p>
        For this purpose I'm using
        <span className='text-purple-900 font-bold'> React </span> and it's
        endless list of libraries.
      </p>

      <p className='text-xl md:text-2xl font-semibold'>
        I'm currently looking for a
        <span className='text-purple-900 font-bold'> job </span> or internship.
      </p>

      <div className='flex justify-start mt-2 md:mt-4 '>
        <a href='#contact' className='btn z-10'>
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default AboutText
