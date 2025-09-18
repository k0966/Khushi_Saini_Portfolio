import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "khushi@example.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:khushi@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 98765 43210",
      description: "Call me during business hours",
      color: "from-green-500 to-emerald-500",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Agra, India",
      description: "Available for remote work worldwide",
      color: "from-purple-500 to-pink-500",
      href: "https://maps.google.com/?q=Agra,India"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "24 Hours",
      description: "Usually respond within a day",
      color: "from-yellow-500 to-orange-500",
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", href: "https://github.com", color: "hover:text-gray-700" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary depending on complexity, but most web applications take 2-6 weeks from start to deployment."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with modern tools like TypeScript, Next.js, and cloud platforms."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Yes! I can help debug, optimize, add features, or maintain existing applications. I'm experienced in code reviews and refactoring."
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you. Let's create something amazing together!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="text-gray-900 dark:text-white font-semibold hover:text-purple-600 transition-colors block mb-2"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">{info.content}</p>
                )}
                <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8"
              variants={fadeInUp}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send me a message</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {status && (
                  <motion.div 
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      status.includes('success') 
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                        : status.includes('Sending') 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    }`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status.includes('success') ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <MessageCircle className="w-5 h-5" />
                    )}
                    {status}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              {/* Why Work With Me */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fast & Reliable</h4>
                      <p className="text-white/90 text-sm">Quick turnaround times without compromising on quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Results-Focused</h4>
                      <p className="text-white/90 text-sm">I focus on delivering solutions that achieve your business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Great Communication</h4>
                      <p className="text-white/90 text-sm">Regular updates and transparent communication throughout the project.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      🚀
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Modern Technology</h4>
                      <p className="text-white/90 text-sm">Using the latest tools and best practices for scalable solutions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl transition-colors ${social.color} dark:hover:text-white group`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Current Availability</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I'm currently accepting new projects starting January 2024. Book early to secure your spot!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={ { once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about working with me.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
