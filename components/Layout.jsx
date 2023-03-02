import NavHead from './NavHead'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NavHead />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
