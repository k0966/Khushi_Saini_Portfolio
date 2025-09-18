import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Database, Globe } from 'lucide-react';

function Home() {
  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'Express', icon: '🚀', color: 'from-yellow-500 to-orange-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-lime-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'JavaScript', icon: '💛', color: 'from-yellow-400 to-amber-500' }
  ];

  const projects = [
    {
      title: "Ecommerce Website",
      description: "A modern, responsive Ecommerce built with MERN stack featuring dark mode, animations, and admin panel.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "https://github.com/yourusername/mern-portfolio",
      demo: "https://your-portfolio.netlify.app",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"]
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with authentication, rich text editor, and comment system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7b6?w=500&h=300&fit=crop",
      github: "https://github.com/yourusername/blog-platform",
      demo: "https://blog-demo.netlify.app",
      tech: ["React", "Express", "MongoDB", "JWT"]
    },
    {
      title: "E-commerce Store",
      description: "Modern e-commerce platform with payment integration, inventory management, and user dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://store-demo.netlify.app",
      tech: ["React", "Node.js", "Stripe", "Redux"]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mb-8">
            <img 
              src="https://img6.arthub.ai/64a007fc-a355.webp" 
              alt="Khushi - Full Stack Developer" 
              className="w-40 h-40 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hemank kumar
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Crafting digital experiences with the MERN stack. Passionate about creating beautiful, functional, and scalable web applications.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ExternalLink className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch <Mail className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="https://github.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:k09668422@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6">Building Digital Solutions</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in the MERN stack. I love creating seamless user experiences and robust backend systems that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a passion for crafting digital experiences that make a difference. I'm constantly learning and exploring new technologies to stay ahead of the curve.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">🎯 Problem Solver</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">🚀 Fast Learner</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">🎨 UI/UX Enthusiast</span>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="font-semibold">{skill.name}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Interests & Hobbies
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Open Source Contributions • UI/UX Design • Cloud Computing • Emerging Technologies • Continuous Learning
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              View All Projects
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together!
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  rows="6" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={staggerChildren}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">hemank.fsu@gmail.com</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Available Worldwide</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Response</h3>
              <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;