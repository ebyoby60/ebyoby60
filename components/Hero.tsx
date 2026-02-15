
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Cybersecurity Analyst & Digital Defender</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
              Mbakpobe Adaeze.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 font-light"
          >
            Specializing in network security, threat intelligence, and digital forensics. 
            Securing the digital landscape one system at a time with cutting-edge defensive 
            strategies and uncompromising precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-10"
            >
              <span className="relative z-10">View My Work</span>
              <ChevronRight className="w-5 h-5 ml-2 absolute right-4 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-medium border-b border-transparent hover:border-white/20 pb-1"
            >
              <Lock className="w-4 h-4" />
              <span>Request a Security Audit</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3 text-[20rem] font-black text-white pointer-events-none select-none opacity-10"
      >
        DEFEND
      </motion.div>
    </section>
  );
};

export default Hero;
