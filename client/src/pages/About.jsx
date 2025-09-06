import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Award, Users, Coffee, BookOpen, Download, ExternalLink, Github, Linkedin } from 'lucide-react';

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { name: 'Backend Development', icon: <Database className="w-8 h-8" />, color: 'from-green-500 to-emerald-500', items: ['Node.js', 'Express', 'Python', 'RESTful APIs', 'GraphQL'] },
    { name: 'Database & Cloud', icon: <Globe className="w-8 h-8" />, color: 'from-purple-500 to-pink-500', items: ['MongoDB', 'MySQL', 'AWS', 'Firebase', 'Docker'] },
    { name: 'Design & Tools', icon: <Palette className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500', items: ['Figma', 'Adobe XD', 'Git', 'Webpack', 'Tailwind CSS'] }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: '50+ Projects Completed', desc: 'Successfully delivered web applications' },
    { icon: <Users className="w-6 h-6" />, title: '20+ Happy Clients', desc: 'Satisfied clients worldwide' },
    { icon: <Coffee className="w-6 h-6" />, title: '1000+ Hours Coded', desc: 'Dedicated to crafting quality code' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Continuous Learning', desc: 'Always exploring new technologies' }
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      description: 'Built responsive web applications from concept to deployment. Collaborated with cross-functional teams to deliver user-centric solutions.',
      color: 'from-green-500 to-blue-500'
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'WebAgency Pro',
      description: 'Specialized in creating beautiful, interactive user interfaces. Worked closely with designers to bring mockups to life.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2017 - 2019',
      title: 'B.Sc. Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors. Specialized in software engineering and web technologies. Active in coding competitions and hackathons.',
      color: 'from-yellow-500 to-orange-500'
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
                
                <div className="flex gap-3">
                  <motion.a 
                    href="https://github.com" 
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com" 
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c133f1ca?w=600&h=600&fit=crop&crop=face" 
                  alt="Khushi - Developer" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Achievements & Milestones</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm proficient in a wide range of technologies and tools that help me build exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Every step of my career has been a learning experience that shaped who I am today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-start mb-12 last:mb-0"
                variants={fadeInUp}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10`}>
                  {item.year.split(' ')[0]}
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm text-purple-600 font-semibold">{item.year}</span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Personal Section */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Beyond Code</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6">When I'm Not Coding</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    📚
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Learning</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Always exploring new technologies, reading tech blogs, and taking online courses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    🌱
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Open Source</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Contributing to open-source projects and maintaining my own repositories on GitHub.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    🎨
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Creativity</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Passionate about UI/UX design, creating digital art, and exploring creative coding.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
              <p className="mb-6 leading-relaxed">
                I'm always excited to connect with fellow developers, designers, and tech enthusiasts. Whether you want to collaborate on a project or just chat about technology, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:khushi@example.com" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <span>khushi@example.com</span>
                </a>
                
                <a href="https://linkedin.com" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    💼
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                
                <a href="https://github.com" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    🐙
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;