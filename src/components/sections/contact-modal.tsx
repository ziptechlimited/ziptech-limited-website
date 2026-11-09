"use client";

import React, { useEffect, useState } from 'react';
import { sendContact, type ContactStatus } from '@/lib/send-contact';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { useLenis } from 'lenis/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const lenis = useLenis();
  const [status, setStatus] = useState<ContactStatus>('idle');

  useEffect(() => {
    if (isOpen) setStatus('idle');
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      await sendContact({
        name: `${data.get('firstName')} ${data.get('lastName')}`.trim(),
        email: String(data.get('email')),
        message: String(data.get('projectDetails')),
      });
      setStatus('sent');
      setTimeout(onClose, 1500);
    } catch {
      setStatus('error');
    }
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    lenis?.stop();
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 } 
    }
  };

  const modalVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    },
    exit: { 
      y: '100%', 
      opacity: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 z-100 bg-black/60 backdrop-blur-md"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            className="fixed inset-0 z-101 flex items-end sm:items-center justify-center pointer-events-none p-0 sm:p-6"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              data-lenis-prevent
              className="w-full sm:max-w-3xl bg-sidebar border-t sm:border border-white/10 sm:rounded-3xl p-8 sm:p-16 pointer-events-auto h-[90vh] sm:h-auto sm:max-h-[calc(100vh-3rem)] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-[#FBFBF4] mb-4">
                    Let&apos;s build <br />
                    <span className="text-[#00ffff] font-medium">something extraordinary.</span>
                  </h3>
                  <p className="text-white/60 text-lg">Fill out the form below to get started.</p>
                </motion.div>
                <motion.button 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  onClick={onClose}
                  aria-label="Close"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300 group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Form */}
              <motion.form 
                className="space-y-12"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div variants={itemVariants} className="relative group">
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-[#FBFBF4] placeholder-transparent focus:outline-none focus:border-[#00ffff] transition-colors peer"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstName" className="absolute left-0 -top-6 text-sm text-white/50 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00ffff]">
                      First Name
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="relative group">
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-[#FBFBF4] placeholder-transparent focus:outline-none focus:border-[#00ffff] transition-colors peer"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName" className="absolute left-0 -top-6 text-sm text-white/50 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00ffff]">
                      Last Name
                    </label>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-[#FBFBF4] placeholder-transparent focus:outline-none focus:border-[#00ffff] transition-colors peer"
                    placeholder="Email Address"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-6 text-sm text-white/50 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00ffff]">
                    Email Address
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <textarea 
                    id="projectDetails"
                    name="projectDetails"
                    rows={3}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-[#FBFBF4] placeholder-transparent focus:outline-none focus:border-[#00ffff] transition-colors peer resize-none"
                    placeholder="Project Details"
                  ></textarea>
                  <label htmlFor="projectDetails" className="absolute left-0 -top-6 text-sm text-white/50 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00ffff]">
                    Tell us about your project
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8 flex flex-col items-end gap-6">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className="group relative flex items-center gap-4 py-5 px-10 rounded-full overflow-hidden transition-all duration-500 border border-white/20 hover:border-[#00ffff]"
                  >
                    <span className="relative z-10 text-sm font-medium uppercase tracking-[0.2em] text-[#FBFBF4] group-hover:text-black transition-colors duration-500">
                      {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Send Inquiry'}
                    </span>
                    <div className="absolute inset-0 bg-[#00ffff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></div>
                    <div className="relative z-10 w-2 h-2 rounded-full bg-[#00ffff] group-hover:bg-black transition-colors duration-500"></div>
                  </button>
                  <p role="status" className="text-white/70 text-right">
                    {status === 'sent' && "Thanks — we'll be in touch soon."}
                    {status === 'error' && (
                      <span className="text-[#ff6b6b]">
                        Your message couldn&apos;t be sent. Please email us at{' '}
                        <a href="mailto:info@ziptechlimited.com" className="underline">info@ziptechlimited.com</a>.
                      </span>
                    )}
                  </p>
                </motion.div>

              </motion.form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
