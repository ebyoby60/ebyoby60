
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Secure Connection</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              Interested in collaborating or need a security consultation? 
              Reach out through the encrypted form, or use the direct 
              channels below. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Send className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400 font-light">adaeze.cyber@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <AlertCircle className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Availability</h4>
                  <p className="text-gray-400 font-light">Open for Full-time Roles & High-Impact Projects</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <button
                disabled={formState !== 'idle'}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <AnimatePresence mode="wait">
                  {formState === 'submitting' ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"
                    />
                  ) : formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      className="flex items-center space-x-2"
                    >
                      <span>Send Transmission</span>
                      <Send className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
