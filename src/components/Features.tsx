import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Sparkles, Heart, CalendarRange } from 'lucide-react';
import { FEATURES } from '../data';
import { Feature } from '../types';

// Concrete mapping of icons to avoid dynamic import type failures or compiled bundle crashes
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  LayoutGrid: LayoutGrid,
  Sparkles: Sparkles,
  Heart: Heart,
  CalendarRange: CalendarRange,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#eb2f96] font-bold bg-[#fff0f6] px-3 py-1 rounded-full border border-[#ffadd2]/30"
          >
            Crafted Features
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-800 tracking-tight mt-4 text-balance"
          >
            A serene system of gentle productivity
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-sm md:text-base mt-4 font-sans leading-relaxed"
          >
            No harsh timers or alerts. Only soft habit tracking, customizable dashboard modules, and focus boosters designed with absolute visual kindliness.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature: Feature, idx: number) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] hover:border-slate-200 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rounded Icon badge header */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 border transition-transform duration-500 group-hover:rotate-6 ${feature.colorClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Text details */}
                  <h3 className="font-display font-bold text-slate-800 text-lg mt-6 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm font-sans mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom state badge trigger */}
                <div className="mt-8 pt-4 border-t border-slate-50/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 font-sans tracking-wide">Flow Stage</span>
                  <span 
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ 
                      color: feature.accentColor, 
                      backgroundColor: `${feature.accentColor}12`
                    }}
                  >
                    {feature.badgeText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
