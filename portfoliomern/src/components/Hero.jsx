import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import profileImage from '../assets/WhatsApp Image 2026-01-28 at 11.48.44 AM.jpeg'
import Snowfall from 'react-snowfall'
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light dark:bg-dark"
    >
      <Snowfall/>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4 md:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage}
                alt="Muhammad Haseeb"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-semibold text-primary">MERN Stack</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left max-w-2xl"
          >
            <motion.p
              className="text-lg text-primary font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Muhammad <span className="text-gradient">Haseeb</span>
            </motion.h1>
            
            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
              variants={itemVariants}
            >
              MERN Stack Developer | Full Stack Developer
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Building scalable web applications with modern technologies. 
              Passionate about creating efficient, user-friendly solutions and 
              continuously learning new technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="/CV_Haseeb.pdf"
                download="Muhammad_Haseeb_CV"
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download CV
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start mt-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/muhammad-haseeb-11185b33a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/021haseeb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <FaGithub size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:haseeb@example.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
