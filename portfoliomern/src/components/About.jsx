import { motion } from 'framer-motion'
import { FaUserGraduate, FaCode, FaDatabase, FaCloud } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building complete web applications with React, Node.js, and modern frameworks.'
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Expert in MongoDB, SQL, Firebase, and designing efficient database schemas.'
    },
    {
      icon: FaCloud,
      title: 'API Development',
      description: 'Creating RESTful APIs and integrating third-party services and SMS/Email APIs.'
    },
    {
      icon: FaUserGraduate,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices in web development.'
    }
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Urdu', level: 'Native' },
    { name: 'Punjabi', level: 'Native' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              MERN Stack Developer & Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate MERN Stack Developer with expertise in building scalable, 
              performant web applications. With a strong foundation in JavaScript, React, 
              Node.js, and MongoDB, I create seamless user experiences and robust backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development has equipped me with skills in authentication systems, 
              RESTful API development, database management, and cloud integration. I'm committed 
              to writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, mentoring 
              junior developers, and exploring new technologies. I'm always open to 
              collaboration and new opportunities.
            </p>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-gray-700 dark:text-gray-300"
                  >
                    {lang.name} - <span className="text-primary">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
