import { socialLinks } from '../../utils/constanst'

const SocialLinks = () => {
  return (
    <div className='hidden md:flex items-center gap-4 '>
      {socialLinks.map((link) => {
        const { href, icon } = link

        return (
          <a
            key={href}
            href={href}
            className='text-3xl hover:scale-110 hover:opacity-75 text-black/80 transition '
          >
            {icon}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
