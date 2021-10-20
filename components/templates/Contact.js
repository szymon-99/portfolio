import { Title } from '../atoms'
import NextImage from 'next/image'

const Contact = () => {
  return (
    <section id='contact' className='section page-width'>
      <Title>Contact Me</Title>

      <div className='lg:grid lg:grid-cols-2 h-96'>
        <div></div>
        <div className='relative w-2/3 justify-self-end '>
          <NextImage layout='fill' src='/contact.svg' />
        </div>
      </div>
    </section>
  )
}

export default Contact
