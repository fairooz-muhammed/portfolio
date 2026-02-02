import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative z-10 bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                            <User className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">About Me</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {resumeData.about}
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-blue-50/50 rounded-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-xl">
                                <h4 className="text-4xl font-bold text-blue-600 mb-2">4+</h4>
                                <p className="text-slate-700 font-medium">Years Experience</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl">
                                <h4 className="text-4xl font-bold text-blue-600 mb-2">10+</h4>
                                <p className="text-slate-700 font-medium">Projects Completed</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl">
                                <h4 className="text-4xl font-bold text-blue-600 mb-2">5+</h4>
                                <p className="text-slate-700 font-medium">Tech Stack Mastery</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
