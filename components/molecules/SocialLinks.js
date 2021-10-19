import { socialLinks } from '../../utils/constanst'

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-4 '>
      {socialLinks.map((link) => {
        const { href, icon } = link

        return (
          <a
            key={href}
            href={href}
            className='text-3xl hover:scale-110 hover:text-yellow-500 text-gray-800 transition '
          >
            {icon}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
