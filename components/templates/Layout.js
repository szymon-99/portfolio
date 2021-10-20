import { Navbar, Footer } from '../organisms'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='page-width'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
