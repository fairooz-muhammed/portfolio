import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <p className="text-slate-600">A selection of projects demonstrating complex problem solving.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        <Layers className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-slate-400 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
