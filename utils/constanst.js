import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiGatsby,
  SiMaterialui,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si'

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

const technologies = [
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Gatsby.js', icon: <SiGatsby /> },
  { name: 'Material UI', icon: <SiMaterialui /> },
  { name: 'Tailwind css', icon: <SiTailwindcss /> },
  { name: 'Framer', icon: <SiFramer /> },
]

export { socialLinks, navLinks, technologies }
