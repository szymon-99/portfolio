import { Title } from '../atoms'
import { AboutText, TechStack } from '../organisms'

const About = () => {
  return (
    <section id='about' className='section relative'>
      <Title>About Me</Title>

      <div className='grid lg:grid-cols-2 gap-8 md:gap-6'>
        <AboutText />

        <TechStack />
      </div>
    </section>
  )
}

export default About
