import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Cloud, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workspace', href: '#interactive-workspace' },
    { name: 'Story', href: '#about' },
    { name: 'Kind Words', href: '#testimonials' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffadd2] via-[#91d5ff] to-[#ffe58f] flex items-center justify-center shadow-xs group-hover:rotate-12 transition-transform duration-500">
              <Cloud className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-800">
              dreamy<span className="text-pink-400 font-medium font-cute">.</span>
            </span>
          </a>

          {/* Core Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 tracking-wide uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Core Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#interactive-workspace" 
              className="text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Live Demo
            </a>
            
            <a
              href="#interactive-workspace"
              className="group px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs duration-300 flex items-center gap-1.5"
            >
              <span>Explore Space</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-950 p-1.5 rounded-lg transition-colors focus:outline-hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold text-slate-600 hover:text-slate-950 px-3 py-2 rounded-xl hover:bg-slate-50 transition-all font-display"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="#interactive-workspace"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-xs font-bold text-slate-600 py-2"
                >
                  Live Demo
                </a>
                
                <a
                  href="#interactive-workspace"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-slate-950 hover:bg-slate-800 py-3 text-center text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Explore Space</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
