import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiGatsby,
  SiMaterialui,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'

const navLinks = [
  {
    label: 'about',
    href: '#about',
  },
  {
    label: 'projects',
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
  { name: 'Javascript', icon: <SiJavascript /> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Gatsby.js', icon: <SiGatsby /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Material UI', icon: <SiMaterialui /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Framer', icon: <SiFramer /> },
  { name: 'Git', icon: <SiGit /> },
]

export { socialLinks, navLinks, technologies }
