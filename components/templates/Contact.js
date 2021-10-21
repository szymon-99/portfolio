import { Title } from '../atoms'
import NextImage from 'next/image'
import { Form } from '../organisms'

const Contact = () => {
  return (
    <section id='contact' className='section page-width relative '>
      <div className='contact-bg'></div>

      <Title>Contact Me</Title>

      <div className='lg:grid lg:grid-cols-2'>
        <div className='flex justify-center'>
          <Form />
        </div>
        <div className='relative w-11/12  justify-self-end'>
          <NextImage layout='fill' src='/contact.svg' />
        </div>
      </div>
    </section>
  )
}

export default Contact
