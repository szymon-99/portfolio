import { Title } from '../atoms'
import { AboutText, TechStack } from '../organisms'

const About = () => {
  return (
    <section id='about' className='section relative'>
      <Title>About</Title>

      <div className='grid lg:grid-cols-2 gap-4 md:gap-8'>
        <AboutText />

        <TechStack />
      </div>
    </section>
  )
}

export default About
