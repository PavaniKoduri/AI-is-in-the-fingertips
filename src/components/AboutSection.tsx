import { motion } from 'motion/react';
import { Heart, Sun, Feather, CheckCircle, Orbit, Gift } from 'lucide-react';

export default function AboutSection() {
  const principles = [
    {
      icon: Feather,
      title: 'Low Sensory Footprint',
      text: 'No notification pings, aggressive popups, or strict color alerts. Only quiet spaces and gentle affirmations.'
    },
    {
      icon: Sun,
      title: 'Aesthetic Inspiration',
      text: 'Carefully coordinated pastel palettes to keep you inspired, creative, and emotionally grounded throughout your day.'
    },
    {
      icon: Heart,
      title: 'Kind Habits Engine',
      text: 'Rethink standard accountability. Celebrate slow days and structure routines around cycles of energy.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      
      {/* Decorative subtle rainbow blur circle behind details */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pastel-yellow rounded-full filter blur-[100px] -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left: Description and Principles */}
          <div className="lg:col-span-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#1890ff] font-bold bg-[#e6f7ff] px-3 py-1 rounded-full border border-[#91d5ff]/30"
            >
              The Philosophy
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-800 tracking-tight mt-4"
            >
              Productivity with a <span className="text-pink-500 font-medium font-cute">softer touch.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm md:text-base mt-4 font-sans leading-relaxed"
            >
              Most productivity apps are designed like high-pressure spreadsheet templates. We believe your digital space should feel like your favourite corner café—warm, aesthetic, peaceful, and custom to your pace.
            </motion.p>

            {/* List of custom bullet principles */}
            <div className="mt-10 space-y-6">
              {principles.map((pr, idx) => {
                const Icon = pr.icon;
                return (
                  <motion.div 
                    key={pr.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-600 shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm md:text-base">
                        {pr.title}
                      </h4>
                      <p className="text-slate-400 text-xs md:text-sm font-sans mt-1 leading-relaxed">
                        {pr.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* About Right: Elegant soft rainbow Apple-style mockup illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[400px]">
            
            {/* Embedded mockup grid containing minimalist card block stacks */}
            <div className="relative w-full max-w-sm h-[320px] bg-gradient-to-tr from-pink-200/20 via-blue-200/20 to-amber-200/20 rounded-[2rem] border border-white p-6 shadow-sm flex flex-col justify-between">
              
              {/* Floating Orbit animation wheel inside mockup */}
              <div className="absolute -top-6 right-8 w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-xs flex items-center justify-center animate-spin-slow">
                <Orbit className="w-6 h-6 text-indigo-400 animate-pulse" />
              </div>

              {/* Styled mock card 1 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#feffe6] flex items-center justify-center text-sm border border-[#ffe58f]">
                    🍵
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Flow State</h5>
                    <p className="text-xs font-semibold text-slate-700">Brew Cozy Jasmine Tea</p>
                  </div>
                </div>
              </motion.div>

              {/* Styled mock card 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-xs"
              >
                <h5 className="text-[11px] font-bold text-[#eb2f96] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#eb2f96] animate-pulse" />
                  Affirmation of the Day
                </h5>
                <p className="text-xs text-slate-600 font-cute font-semibold leading-normal">
                  "Progress is not linear. Be gentle with your ideas today as they take root."
                </p>
              </motion.div>

              {/* Styled mock card 3 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-xs flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-700">Weekly streaks bubble count</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-pulse" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
