import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-32 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-semibold mb-4 tracking-wide"
                    >
                        👋 HELLO, I AM
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
                    >
                        {resumeData.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-semibold text-slate-700 mb-6"
                    >
                        {resumeData.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-light"
                    >
                        {resumeData.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Fairooz_Muhammed_Resume.pdf"
                            className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-800 hover:text-slate-800 transition-colors flex items-center gap-2"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
