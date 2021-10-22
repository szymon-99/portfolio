import { Project } from '../molecules'
import { Title } from '../atoms'

const Portfolio = ({ projects }) => {
  return (
    <section id='portfolio' className='section bg-gray-100'>
      <Title>Portfolio</Title>

      <ul className='grid gap-16 lg:gap-24 justify-items-center  page-width  overflow-hidden'>
        {projects.map((project, i) => (
          <Project key={i} {...project} isOdd={Boolean(i % 2)} />
        ))}
      </ul>
    </section>
  )
}

export default Portfolio
