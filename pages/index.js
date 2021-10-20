import { Hero, About, Portfolio, Contact } from '../components/templates'
import { getPortfolioData } from '../utils/api'

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Contact />
    </>
  )
}

export async function getStaticProps() {
  const data = await getPortfolioData()

  const projects = data.map((project) => project.fields)

  return { props: { projects } }
}
