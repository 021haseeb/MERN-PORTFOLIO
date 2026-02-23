import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "MePro: AI-Powered Fitness & Wellness Companion",
      shortDescription: "AI-powered fitness & wellness mobile app with personalized plans and user authentication.",
      fullDescription: "MePro is my Final Year Project (FYP) - a comprehensive AI-powered fitness and wellness mobile application built with React Native and TypeScript. The app features personalized workout and diet plans, user authentication, progress tracking, and AI-driven recommendations. Integrated with Appwrite for backend services including authentication, database, and storage.",
      techStack: ["React Native", "TypeScript", "Appwrite", "AI Integration", "Mobile Development"],
      github: "https://github.com/021haseeb/MePro",
      live: null,
      image: null,
      featured: true
    },
    {
      id: 2,
      title: "Fri-Kings Fast Food Website",
      shortDescription: "Full-stack food ordering website with admin panel and order management.",
      fullDescription: "A complete full-stack fast food ordering website built with MERN stack. Features include user authentication, menu browsing, cart management, order placement, payment integration, and a comprehensive admin panel for managing orders, menus, and customers. The application provides a seamless ordering experience for customers and efficient management tools for administrators.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      github: "https://github.com/021haseeb/Fri-Kings",
      live: "https://fri-kings.vercel.app",
      image: null,
      featured: false
    },
    {
      id: 3,
      title: "Aurum (E-Commerce Website)",
      shortDescription: "Full-stack e-commerce platform with product management and checkout.",
      fullDescription: "A comprehensive full-stack e-commerce website built with MERN stack and TypeScript. Features include user authentication, product catalog with categories, shopping cart, secure checkout process, order tracking, user dashboard, and a powerful admin dashboard for product, category, and order management. Implemented with best practices for security and performance.",
      techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redux"],
      github: "https://github.com/021haseeb/Aurum",
      live: "https://aurum-shop.vercel.app",
      image: null,
      featured: false
    },
    {
      id: 4,
      title: "Task Planner",
      shortDescription: "Full-stack task management application with user-based tasks.",
      fullDescription: "A full-stack task management application that allows users to create, organize, and track their tasks. Features include user authentication, task creation with priorities, due dates, categories, task completion tracking, and a clean intuitive interface. Built with MERN stack and features real-time updates.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      github: "https://github.com/021haseeb/Task-Planner",
      live: "https://task-planner-021haseeb.vercel.app",
      image: null,
      featured: false
    },
    {
      id: 5,
      title: "Weather Web & Mobile App",
      shortDescription: "Cross-platform weather application with real-time weather data.",
      fullDescription: "A cross-platform weather application available as both web and mobile app. The web version is built with MERN stack, while the mobile version uses React Native. Both versions integrate with weather APIs to provide real-time weather data, forecasts, and weather alerts. Features location-based weather, search functionality, and beautiful UI.",
      techStack: ["React", "React Native", "Node.js", "Firebase", "Weather API"],
      github: "https://github.com/021haseeb/Weather-App",
      live: "https://weather-app-021haseeb.vercel.app",
      image: null,
      featured: false
    },
    {
      id: 6,
      title: "ERP System",
      shortDescription: "Enterprise resource planning system with role-based access.",
      fullDescription: "A comprehensive ERP system built with MERN stack featuring role-based access control, employee management, inventory management, order processing, and reporting. The system supports multiple user roles (Admin, Manager, Employee) with different permissions and access levels. Includes dashboard with analytics and real-time data visualization.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Role-Based Access"],
      github: "https://github.com/021haseeb/ERP-System",
      live: null,
      image: null,
      featured: false
    }
  ]

  const otherProjects = [
    {
      title: "E-Learning Platform",
      techStack: ["MERN Stack", "Video Streaming"],
      github: "https://github.com/021haseeb"
    },
    {
      title: "Social Media App",
      techStack: ["React Native", "Firebase"],
      github: "https://github.com/021haseeb"
    },
    {
      title: "Blog Application",
      techStack: ["MERN Stack", "Markdown"],
      github: "https://github.com/021haseeb"
    },
    {
      title: "Chat Application",
      techStack: ["Node.js", "Socket.io"],
      github: "https://github.com/021haseeb"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            Featured Project
          </h3>
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              className="card border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-slate-700 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub size={20} />
                      View Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <FaExternalLinkAlt size={18} />
                        Live Demo
                      </motion.a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
                      whileHover={{ x: 5 }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Other MERN-Based Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-secondary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-white dark:bg-slate-800"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <FaGithub size={16} />
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.fullDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
