import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navLinks = [
  {
    label: 'about',
    href: '#about',
  },
  {
    label: 'portfolio',
    href: '#portfolio',
  },
  {
    label: 'contact',
    href: '#contact',
  },
]

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/szymon-99',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/',
  },
]

export { socialLinks, navLinks }
