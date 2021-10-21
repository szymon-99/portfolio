import { SocialLinks } from '../molecules'
import { Logo } from '../atoms'

const Footer = () => {
  return (
    <footer
      id='contact'
      className='page-width flex flex-col gap-8 py-8 md:pt-0  items-center md:flex-row md:justify-between relative'
    >
      <div className='contact-bg hidden md:block'></div>

      <div className=' flex flex-col gap-1 items-center  md:flex-row  md:items-end md:gap-2'>
        <span className='text-gray-800'>Created By</span>

        <Logo />
      </div>
      <SocialLinks />
    </footer>
  )
}

export default Footer
