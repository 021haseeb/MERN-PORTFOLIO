import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/muhammad-haseeb-11185b33a',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/021haseeb',
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:haseeb@example.com',
      label: 'Email',
    },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav neon-border shadow-neon py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-3xl font-extrabold neon-text tracking-wider"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          MH
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-link"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Desktop Social + Theme */}
        <div className="hidden md:flex items-center gap-5">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-glow"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.85 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="theme-btn"
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.8 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="theme-btn"
            whileTap={{ scale: 0.8 }}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="icon-glow"
            whileTap={{ scale: 0.8 }}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav shadow-neon"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="nav-link text-lg"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-6 pt-6 border-t border-gray-600">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-glow"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar