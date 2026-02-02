import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
                    <p className="text-slate-600">My professional journey and career milestones.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-blue-600 font-medium mt-1">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
