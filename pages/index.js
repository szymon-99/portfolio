import {
  Hero,
  About,
  Portfolio,
  Contact,
  Layout,
  SEO,
} from '../components/templates'
import { getPortfolioData } from '../utils/api'

export default function Home({ projects }) {
  return (
    <>
      <Layout>
        <SEO />
        <Hero />
        <About />
        <Portfolio projects={projects} />
        <Contact />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getPortfolioData()

  const projects = data.map((project) => {
    const id = project.sys.id
    const data = project.fields

    return { id, ...data }
  })

  return { props: { projects } }
}
