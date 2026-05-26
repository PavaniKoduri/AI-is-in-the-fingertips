import { Cloud, Heart, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Space: [
      { name: 'Core Features', href: '#features' },
      { name: 'Sandbox Demo', href: '#interactive-workspace' },
      { name: 'Philosophy', href: '#about' }
    ],
    Values: [
      { name: 'Privacy Safe', href: '#' },
      { name: 'Zero Tracking', href: '#' },
      { name: 'Cozy Pixels Guideline', href: '#' }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-50 relative">
      
      {/* Top soft pastel rainbow gradient accent line separator */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Footer Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group max-w-max">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ffadd2] via-[#91d5ff] to-[#ffe58f] flex items-center justify-center shadow-2xs group-hover:rotate-12 transition-transform duration-500">
                <Cloud className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display font-bold text-base tracking-tight text-slate-800">
                dreamy<span className="text-pink-400 font-medium font-cute">.</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
              Experience a kind digital space where creative ideas can breathe, grow, and take shape at your own comfortable pace. No hustle, just flow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links col 1 */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 tracking-wider uppercase font-sans border-b border-slate-50 pb-2 mb-4">
              {Object.keys(footerLinks)[0]}
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.Space.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links col 2 */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 tracking-wider uppercase font-sans border-b border-slate-50 pb-2 mb-4">
              {Object.keys(footerLinks)[1]}
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.Values.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer legal credits */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-400 font-sans">
            © {new Date().getFullYear()} Minimal Rainbow Landing Page. All rights reserved.
          </p>

          <p className="text-[10px] text-slate-400 font-sans inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 px-2.5 py-1 rounded-full">
            <span>Made with cute pixels & quiet intentions</span>
            <Heart className="w-3 h-3 text-red-300 fill-red-300 animate-pulse" />
          </p>
        </div>

      </div>
    </footer>
  );
}
