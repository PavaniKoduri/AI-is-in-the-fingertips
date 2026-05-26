import { motion } from 'motion/react';
import { Sparkles, Play, ArrowRight, Heart, Star, Cloud } from 'lucide-react';
import { AVATAR_STROLLERS } from '../data';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      
      {/* Absolute floating blurred background circles representing "soft rainbow" components */}
      <div className="absolute top-0 left-0 right-0 h-[600px] -z-10 overflow-hidden pointer-events-none">
        
        {/* Lavender Blob */}
        <div className="absolute top-1/4 -left-12 w-80 h-80 bg-purple-200/40 rounded-full filter blur-[80px] animate-blob" />
        
        {/* Pink Blob */}
        <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] bg-pink-100/50 rounded-full filter blur-[100px] animate-blob-slow" />
        
        {/* Sky Blue Blob */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-100/40 rounded-full filter blur-[90px] animate-blob-slower" />
        
        {/* Soft Yellow Blob */}
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-100/50 rounded-full filter blur-[80px] animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            
            {/* Soft Sparkle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-500 font-cute font-bold text-xs self-center lg:self-start mb-6 border border-pink-100 shadow-2xs rotate-1"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>Version 2.0 is officially glowing!</span>
            </motion.div>

            {/* Title with Gradient Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-800 tracking-tight leading-[1.1]"
            >
              Organise your day in{' '}
              <span className="relative inline-block mt-1">
                <span className="rainbow-text font-bold">dreamy pastel</span>
                <span className="absolute -bottom-1.5 left-0 w-full h-[6px] bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-60" />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-balance"
            >
              A beautifully minimalist workspace for focused minds. Form deep visual habits, pin cozy polaroid thoughts, and unwind with soothing audio waves.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#interactive-workspace"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2"
              >
                <span>Enter Your Space</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#interactive-workspace"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-sm duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-violet-400 fill-violet-400" />
                <span>Interact in Sandbox</span>
              </a>
            </motion.div>

            {/* Social Proof & Avatar stack */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 border-t border-slate-100 pt-8"
            >
              <div className="flex -space-x-3 overflow-hidden">
                {AVATAR_STROLLERS.map((src, i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src={src}
                    alt="Cozy community user"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-0.5 mt-0.5 text-xs text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-slate-500 font-semibold font-sans ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                  LOVED by 18,000+ creative developers and writers.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Hero Right: High-fidelity custom mockup preview */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Absolute floating organic vector components around the mockup info card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -left-8 bg-white/90 p-3 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hidden sm:flex items-center gap-2.5 z-20 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs uppercase shadow-sm">
                🌸
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Next Habit</p>
                <p className="text-xs font-semibold text-slate-800">Water cozy orchid plants</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-4 bg-white/90 p-3.5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hidden sm:flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                🌱
              </div>
              <div>
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                  Active
                </div>
                <p className="text-xs font-semibold text-slate-800 mt-1">Lofi Meditation Session</p>
              </div>
            </motion.div>

            {/* Absolute vector background blobs to frame the app UI card */}
            <div className="absolute inset-0 bg-radial from-slate-200/20 to-transparent rounded-full -z-10 blur-xl" />

            {/* Landing Mockup App frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full max-w-md p-5 rounded-[2.5rem] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center relative gap-6"
            >
              
              {/* Device Notch Header */}
              <div className="flex justify-between items-center w-full px-4 text-xs text-slate-400 font-sans tracking-tight">
                <span className="font-semibold text-slate-600">11:11 AM</span>
                <div className="w-16 h-4 bg-slate-100 rounded-full" />
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">✨</span>
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Mock App Body Content area */}
              <div className="w-full rounded-[2rem] bg-slate-50/60 p-5 border border-slate-100 relative">
                
                {/* Visual Header profile card inside mockup */}
                <div className="flex items-center gap-3 border-b border-dashed border-slate-100 pb-4 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center text-white font-cute font-bold shadow-xs">
                    ☁️
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-700 text-sm">Maya’s Peaceful Flow</h4>
                    <p className="text-[10px] text-slate-400">Curates serene aesthetic vibes</p>
                  </div>
                </div>

                {/* Sub features mockup cells */}
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🧘‍♀️</span>
                      <span className="text-xs text-slate-600 font-sans font-medium">Breathe in lofi sync</span>
                    </div>
                    <span className="text-[10px] text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full font-bold">15m</span>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🍵</span>
                      <span className="text-xs text-slate-600 font-sans font-medium">Journal morning coffee thoughts</span>
                    </div>
                    <span className="text-[10px] text-[#1890ff] bg-[#e6f7ff] px-2 py-0.5 rounded-full font-bold">Done</span>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-dashed border-slate-150 flex items-center justify-center text-xs text-slate-400 gap-1 hover:bg-slate-50 transition-colors pointer-events-none">
                    <span>+ Add custom block</span>
                  </div>
                </div>

                {/* Aesthetic status tracker circle */}
                <div className="mt-5 flex items-center justify-center relative py-4">
                  <div className="w-24 h-24 rounded-full border-4 border-dashed border-pink-200 flex items-center justify-center flex-col animate-[spin_50s_linear_infinite]">
                    {/* Ring circles */}
                  </div>
                  <div className="absolute w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                    <span className="text-lg font-bold text-slate-700 font-display">82%</span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-widest">Hydrated</span>
                  </div>
                </div>

              </div>
              
              {/* Bottom footer bar */}
              <div className="w-1/3 h-1 bg-slate-200 rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
