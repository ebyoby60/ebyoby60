
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Security Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-8 text-cyan-400 tracking-tight uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
