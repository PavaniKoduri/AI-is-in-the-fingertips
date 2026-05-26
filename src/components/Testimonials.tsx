import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#fafbfc] relative overflow-hidden">
      
      {/* Decorative top soft pink blob */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-pastel-pink rounded-full filter blur-[110px] -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#722ed1] font-bold bg-[#f9f0ff] px-3 py-1 rounded-full border border-[#d3adf7]/30"
          >
            Kind Messages
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-800 tracking-tight mt-4 text-balance"
          >
            Loved by mindful creators
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-sm md:text-base mt-4 font-sans leading-relaxed"
          >
            Here is what people write in our sticky feedback guestbooks after discovering a quiet, beautiful workspace.
          </motion.p>
        </div>

        {/* Testimonial Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t: Testimonial, idx: number) => {
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-3xl border shadow-2xs hover:shadow-xs transition-all relative flex flex-col justify-between ${t.bgPastel}`}
              >
                
                {/* Quote Accent logo icon */}
                <div className="absolute top-4 right-4 opacity-12 pointer-events-none">
                  <MessageSquareQuote className="w-16 h-16 text-slate-400 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 fill-current ${t.iconColor}`} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-sm md:text-base font-medium italic leading-relaxed font-cute">
                    "{t.comment}"
                  </p>
                </div>

                {/* Left Profile Details footer */}
                <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-slate-200/20">
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-xs"
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-xs md:text-sm">
                      {t.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] md:text-xs">
                      {t.username}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
