
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://picsum.photos/seed/adaeze/800/1000"
                alt="Mbakpobe Adaeze"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-2xl">
                <p className="text-2xl font-bold text-cyan-400">5+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <p className="text-2xl font-bold text-cyan-400">100+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Systems Secured</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-cyan-500" />
              <span>About Me</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I am a dedicated Cybersecurity Analyst with a passion for proactively securing 
                complex systems and data against sophisticated threats. My journey began with a 
                curiosity about how networks communicate, which quickly evolved into a 
                mission to protect digital integrity.
              </p>
              <p>
                I thrive at the intersection of technical excellence and strategic risk 
                management. Whether it's conducting rigorous penetration tests or designing 
                resilient security architectures, my goal is always to stay three steps ahead 
                of potential adversaries.
              </p>
              <p>
                When I'm not monitoring traffic or patching vulnerabilities, you'll find me 
                contributing to open-source security tools or mentoring aspiring tech 
                professionals on the importance of digital hygiene.
              </p>
            </div>

            <div className="mt-12 flex space-x-12">
              <div>
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-gray-400">Lagos, Nigeria / Remote</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Certifications</h4>
                <p className="text-gray-400">CISSP, CEH, Security+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
