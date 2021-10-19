import { Technology } from '../molecules'
import { technologies } from '../../utils/constanst'

const TechStack = () => {
  return (
    <div>
      <h4 className='text-xl md:text-2xl text-center font-medium mb-4 md:mb-8 text-gray-800'>
        Tech Stack
      </h4>

      <ul className='grid gap-6 md:gap-8 grid-cols-3 justify-items-center'>
        {technologies.map((tech, i) => {
          return <Technology key={i} {...tech} />
        })}
      </ul>
    </div>
  )
}

export default TechStack
