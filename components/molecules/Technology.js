const Technology = ({ name, icon }) => {
  return (
    <article className=' flex flex-col items-center gap-2 group'>
      <div className='p-4 md:p-6 rounded-full flex items-center justify-center transition bg-purple-900/10 group-hover:bg-purple-900/20'>
        <div className='text-4xl text-gray-900 md:text-5xl group-hover:text-purple-900'>
          {icon}
        </div>
      </div>
      <p className='font-light group-hover:text-purple-900'>{name}</p>
    </article>
  )
}

export default Technology
