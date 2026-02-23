import { motion } from 'framer-motion'
import { FaCertificate, FaCheckCircle } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "JavaScript Certification",
      issuer: "Sailor.org",
      date: "2024",
      description: "Comprehensive JavaScript programming certification covering core concepts, DOM manipulation, async programming, and modern ES6+ features.",
      verified: true
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Self-Learning",
      date: "2023-2024",
      description: "Complete MERN Stack development training with hands-on projects and real-world applications.",
      verified: true
    },
    {
      id: 3,
      title: "React.js Developer",
      issuer: "Self-Learning",
      date: "2023",
      description: "Advanced React.js development including hooks, context API, Redux, and React Native.",
      verified: true
    },
    {
      id: 4,
      title: "Node.js & Express",
      issuer: "Self-Learning",
      date: "2023",
      description: "Backend development with Node.js, Express, RESTful API design, and MongoDB integration.",
      verified: true
    }
  ]

  const achievements = [
    "Built multiple production-ready MERN stack applications",
    "Completed Final Year Project with AI integration",
    "Active contributor to open-source projects",
    "Mentored junior developers in web development"
  ]

  return (
    <section id="certifications" className="section-padding bg-light dark:bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in web development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <FaCertificate className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    {cert.verified && (
                      <FaCheckCircle className="text-green-500" size={16} />
                    )}
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
