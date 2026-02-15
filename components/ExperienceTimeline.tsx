
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center">The Journey</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-auto md:mr-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#0a0a0a]" />
              <div className="glass p-8 rounded-2xl group hover:border-cyan-500/30 transition-colors">
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
