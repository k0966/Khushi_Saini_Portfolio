import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
      <div className="flex gap-8">
        <Link 
          to="/" 
          className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
        >
          Khushi Saini
        </Link>
        <div className="flex gap-6 items-center">
          <Link 
            to="/" 
            className="text-white/80 hover:text-cyan-400 transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white/80 hover:text-purple-400 transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className="text-white/80 hover:text-pink-400 transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-white/80 hover:text-emerald-400 transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            Contact
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;