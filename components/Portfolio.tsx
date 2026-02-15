
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h2>
            <p className="text-gray-400 max-w-xl font-light">
              A collection of case studies focusing on infrastructure security, vulnerability 
              management, and incident response automation.
            </p>
          </div>
          <div className="text-gray-500 text-sm font-medium">
            01 — 03 / LATEST CASE STUDIES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-white group/btn"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
