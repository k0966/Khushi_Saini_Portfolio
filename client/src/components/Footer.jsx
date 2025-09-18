import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: "https://images.seeklogo.com/logo-png/39/1/linkedin-new-2020-logo-png_seeklogo-393964.png",
      color: "from-blue-500 to-blue-600",
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: "	https://images.seeklogo.com/logo-png/30/1/github-logo-png_seeklogo-304612.png",
      color: "from-purple-500 to-purple-600",
      href: "#",
      label: "GitHub",
    },
    {
      icon: "	https://images.seeklogo.com/logo-png/49/1/twitter-x-logo-png_seeklogo-492396.png",
      color: "from-cyan-500 to-cyan-600",
      href: "#",
      label: "X (Twitter)",
    },
    {
      icon: "https://images.seeklogo.com/logo-png/38/1/gmail-new-2020-logo-png_seeklogo-389043.png",
      color: "from-pink-500 to-pink-600",
      href: "mailto:hemank.fsu@gmail.com",
      label: "Gmail",
    },
  ];

  return (
    <footer className="relative py-20 px-4 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Stay Connected
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow my journey as I continue to push the boundaries of
            technology and create experiences that inspire.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className={`group relative bg-gradient-to-br ${social.color} p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-white/20`}
              title={social.label}
            >
              <span>
                <img 
                  src={social.icon} 
                  alt={social.label}
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-gray-500 mb-4">
            © {currentYear} Made by <span className="text-cyan-400 mx-1">Hemank kumar.</span>
            
          </p>
          <p className="text-sm text-gray-600 italic">
            "The future belongs to those who believe in the beauty of their
            dreams." ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;