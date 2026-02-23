import { motion } from 'framer-motion'
import { FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiCplusplus, SiMongodb, SiFirebase, SiAppwrite, SiExpress, SiTypescript, SiJquery } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: 85, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, level: 80, color: "#00599C" },
        { name: "JavaScript", icon: FaJs, level: 95, color: "#F7DF1E" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "MERN Stack", icon: FaReact, level: 90, color: "#61DAFB" },
        { name: "HTML", icon: FaHtml5, level: 95, color: "#E34F26" },
        { name: "CSS", icon: FaCss3, level: 90, color: "#1572B6" },
        { name: "jQuery", icon: SiJquery, level: 75, color: "#0769AD" },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 90, color: "#47A248" },
        { name: "SQL", icon: FaDatabase, level: 80, color: "#4479A1" },
        { name: "Firebase", icon: SiFirebase, level: 85, color: "#FFCA28" },
        { name: "Appwrite", icon: SiAppwrite, level: 80, color: "#F02E65" },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 90, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "#000000" },
        { name: "RESTful APIs", icon: FaDatabase, level: 88, color: "#FF6B6B" },
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-light dark:bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon style={{ color: skill.color }} size={20} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
