import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const PreviewButtons = ({ demo, github, pageHref }) => {
  return (
    <>
      <a
        target='_blank'
        href={demo}
        className='btn bg-gray-800 text-gray-50 hover:opacity-80 flex items-center gap-2 '
      >
        live
        <BiLinkExternal size='1.5em' />
      </a>
      <a
        target='_blank'
        href={github}
        className='btn ring-1 ring-gray-800 text-gray-800 hover:bg-gray-200  hover:ring-gray-200 flex items-center gap-2'
      >
        code
        <FaGithub size='1.5em' />
      </a>
    </>
  )
}

export default PreviewButtons
