import NextHead from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ pageTitle, image, description }) => {
  const { pathname } = useRouter()

  const seo = {
    title: (pageTitle || 'Portfolio') + ' | Szymon Prusak',
    description:
      description || 'Personal portfolio website, created by Szymon Prusak',
    image: `https://szymonprusak.vercel.app${image || '/main.png'}`,
    url: 'https://szymonprusak.vercel.app' + pathname,
  }
  return (
    <NextHead>
      <title>{seo.title}</title>
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {/* twitter */}
      <meta name='twitter:image' content={seo.image} key='twimage' />
      <meta name='twitter:title' content={seo.title} key='twtitle' />
      <meta name='twitter:description' content={seo.description} key='twdesc' />
      <meta name='twitter:card' content='summary_large_image' />

      {/* Open Graph */}
      <meta property='og:url' content={seo.url} key='ogurl' />
      <meta property='og:image' content={seo.image} key='ogimage' />
      <meta property='og:title' content={seo.title} key='ogtitle' />
      <meta property='og:description' content={seo.description} key='ogdesc' />
    </NextHead>
  )
}

export default SEO
