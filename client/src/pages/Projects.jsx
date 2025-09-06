import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Calendar, Users, Code, Filter, Search, ArrowRight, Zap, Globe, Database, GitBranch, Activity } from 'lucide-react';
import { useState } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'web-app', 'mobile', 'api', 'open-source'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and Stripe API.",
      longDescription: "This comprehensive e-commerce solution features a modern shopping cart, secure payment processing, order tracking, and an intuitive admin panel. The platform supports multiple payment methods and includes advanced features like wishlist, product reviews, and real-time inventory updates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.netlify.app",
      category: "web-app",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
      status: "completed",
      featured: true,
      stars: 124,
      forks: 45,
      date: "2024-01-15",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      longDescription: "This productivity app enables teams to manage projects efficiently with features like drag-and-drop task boards, time tracking, file attachments, and detailed analytics. Real-time collaboration is powered by Socket.io.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      category: "web-app",
      tech: ["React", "Express", "Socket.io", "PostgreSQL", "Material-UI"],
      status: "completed",
      featured: true,
      stars: 89,
      forks: 23,
      date: "2023-11-20",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Weather Forecast API",
      description: "A robust RESTful API providing accurate weather forecasts with caching, rate limiting, and comprehensive documentation.",
      longDescription: "This API aggregates data from multiple weather services to provide accurate forecasts. Features include historical data, weather alerts, and geographical weather mapping with Redis caching for optimal performance.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/weather-api",
      demo: "https://weather-api-docs.netlify.app",
      category: "api",
      tech: ["Node.js", "Express", "Redis", "Docker", "Swagger"],
      status: "completed",
      featured: false,
      stars: 67,
      forks: 12,
      date: "2023-09-10",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "React Component Library",
      description: "A comprehensive UI component library with TypeScript support, extensive documentation, and accessibility features.",
      longDescription: "This open-source component library provides 50+ reusable React components with TypeScript definitions, comprehensive Storybook documentation, and full accessibility compliance following WCAG guidelines.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/react-ui-lib",
      demo: "https://ui-lib-storybook.netlify.app",
      category: "open-source",
      tech: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      status: "active",
      featured: true,
      stars: 203,
      forks: 78,
      date: "2023-07-05",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with real-time data visualization and automated reporting features.",
      longDescription: "This comprehensive dashboard integrates with major social media platforms to provide insights on engagement, reach, and audience demographics. Features automated report generation and customizable charts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://social-dashboard-demo.netlify.app",
      category: "web-app",
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Chart.js"],
      status: "completed",
      featured: false,
      stars: 156,
      forks: 34,
      date: "2023-05-18",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description: "A cross-platform mobile app for fitness tracking with workout plans, nutrition logging, and progress visualization.",
      longDescription: "This fitness app helps users track workouts, log nutrition, and monitor progress toward their health goals. Includes social features, custom workout plans, and integration with wearable devices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://fitness-app-demo.netlify.app",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
      status: "in-progress",
      featured: false,
      stars: 92,
      forks: 18,
      date: "2024-02-01",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'active': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <Code className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            My Projects
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A collection of projects that showcase my skills, creativity, and passion for building exceptional digital experiences.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection('featured')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Featured <Star className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('all-projects')}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300 flex items-center gap-2"
            >
              Browse All <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">1.2k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        id="featured"
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
              Highlighted projects that best represent my technical expertise and creative vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                  </div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(project.date)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Projects */}
      <motion.section 
        id="all-projects"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore my complete portfolio of projects across different technologies and domains.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 mb-12"
            variants={fadeInUp}
          >
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all shadow-sm"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-4 rounded-xl font-medium whitespace-nowrap transition-all shadow-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {formatDate(project.date)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* GitHub Stats */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A glimpse into my coding activity and open-source contributions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">800+</div>
              <div className="text-gray-600 dark:text-gray-300">Commits</div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Pull Requests</div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2.5k+</div>
              <div className="text-gray-600 dark:text-gray-300">Contributions</div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Activity Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">React UI Library</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Added 5 new components</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">API Performance</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Optimized query speed by 40%</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Open Source</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Contributed to 3 projects</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Repository Stars</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gained 200+ new stars</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            variants={fadeInUp}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
                Have a project in mind? I'm always excited to collaborate on new ideas and bring creative visions to life through code.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Projects; 