import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>Muhammad Haseeb | MERN Stack Developer | Full Stack Developer</title>
        <meta name="description" content="Professional Portfolio of Muhammad Haseeb - MERN Stack Developer & Full Stack Developer. View projects, skills, and contact information." />
        <meta name="keywords" content="MERN Stack, Full Stack Developer, React, Node.js, MongoDB, Portfolio, Web Developer, JavaScript, Python" />
        <meta name="author" content="Muhammad Haseeb" />
        <meta property="og:title" content="Muhammad Haseeb - MERN Stack Developer" />
        <meta property="og:description" content="Professional Portfolio of Muhammad Haseeb - MERN Stack Developer & Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Haseeb - MERN Stack Developer" />
        <meta name="twitter:description" content="Professional Portfolio of Muhammad Haseeb - MERN Stack Developer & Full Stack Developer" />
        <link rel="canonical" href="https://github.com/021haseeb" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
