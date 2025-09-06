import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code, Star, ChevronRight } from 'lucide-react';

function Resume() {
  const personalInfo = {
    name: "Khushi",
    title: "Full Stack Developer",
    location: "Agra, Uttar Pradesh, India",
    email: "khushi@example.com",
    phone: "+91 98765 43210",
    website: "https://khushi-portfolio.netlify.app",
    summary: "Passionate full-stack developer with 3+ years of experience building scalable web applications using the MERN stack. Committed to writing clean, efficient code and creating exceptional user experiences."
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-level web applications and mentoring junior developers.",
      achievements: [
        "Architected and developed 5+ scalable web applications serving 10,000+ users",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Led a team of 4 developers and established best practices for code review and deployment",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Hybrid",
      period: "Mar 2021 - Dec 2022",
      type: "Full-time",
      description: "Developed responsive web applications from concept to deployment in an agile environment.",
      achievements: [
        "Built and launched 3 major product features increasing user engagement by 35%",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Integrated third-party APIs and payment gateways for e-commerce functionality",
        "Maintained 99.9% uptime through robust error handling and monitoring"
      ],
      technologies: ["React", "Express", "PostgreSQL", "Stripe", "Redux", "Material-UI"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "On-site",
      period: "Jun 2019 - Feb 2021",
      type: "Full-time",
      description: "Specialized in creating beautiful, interactive user interfaces for various client projects.",
      achievements: [
        "Delivered 15+ client websites with 100% client satisfaction rate",
        "Reduced page load times by 50% through image optimization and lazy loading",
        "Implemented responsive designs supporting all major browsers and devices",
        "Created reusable component library used across multiple projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Agra, India",
      period: "2017 - 2021",
      grade: "First Class with Honors (8.5/10 CGPA)",
      description: "Specialized in software engineering, web technologies, and database systems.",
      courses: ["Data Structures & Algorithms", "Web Development", "Database Management", "Software Engineering", "Computer Networks"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "St. Xavier's School",
      location: "Agra, India",
      period: "2015 - 2017",
      grade: "92% (Science Stream)",
      description: "Focused on Mathematics, Physics, and Computer Science.",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 }
      ],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 75 }
      ],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 78 },
        { name: "Firebase", level: 82 }
      ],
      icon: "🛠️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DEV-2023-001",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MONGO-DEV-2022-045",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-078",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const achievements = [
    { icon: "🏆", title: "Best Developer Award", description: "TechCorp Solutions - 2023" },
    { icon: "🎯", title: "Project Excellence", description: "Delivered 20+ projects on time" },
    { icon: "⭐", title: "Client Satisfaction", description: "100% positive feedback rate" },
    { icon: "🚀", title: "Innovation Award", description: "StartupXYZ - 2022" }
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Resume
              </h1>
              <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">{personalInfo.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {personalInfo.summary}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a 
                  href="/resume.pdf"
                  download
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </motion.a>
                
                <motion.a 
                  href="#contact"
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-600 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey and key contributions in various roles.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold mb-2">
                        <Briefcase className="w-5 h-5" />
                        {job.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My academic background and formal education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{edu.location}</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-4">{edu.grade}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My expertise across different technologies and tools.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillCategory.color} rounded-2xl flex items-center justify-center text-2xl`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillCategory.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className={`h-2 bg-gradient-to-r ${skillCategory.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications & Achievements */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-600" />
                Certifications
              </h2>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className={`w-full h-1 bg-gradient-to-r ${cert.color} rounded-full mb-4`}></div>
                    <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{cert.date}</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-600" />
                Achievements
              </h2>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg">{achievement.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
            Ready to Work Together?
          </motion.h2>
          <motion.p className="text-xl mb-8 opacity-90" variants={fadeInUp}>
            I'm always open to discussing new opportunities and exciting projects.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
            <a 
              href="#contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="/resume.pdf"
              download
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Resume;