import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-sm font-medium border border-slate-200"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const { frontend, backend, tools } = resumeData.skills;
    // Database skills are mixed in resume, extracting if needed or keeping as per resume
    // Resume has Back-End Development: Node.js, Express, REST APIs, MongoDB, NestJS, PostgreSQL, Prisma, Kafka, Redis
    // I will split these for cleaner UI

    const frontendSkills = frontend;
    const backendSkills = ["Node.js", "Express.js", "NestJS", "REST APIs", "Kafka", "Redis"];
    const dbSkills = ["MongoDB", "PostgreSQL", "Prisma"];
    const toolSkills = tools;

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A versatile tech stack enabling the development of robust, scalable, and responsive web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard title="Frontend" skills={frontendSkills} icon={Layout} delay={0.1} />
                    <SkillCard title="Backend" skills={backendSkills} icon={Server} delay={0.2} />
                    <SkillCard title="Database" skills={dbSkills} icon={Database} delay={0.3} />
                    <SkillCard title="DevOps & Tools" skills={toolSkills} icon={Wrench} delay={0.4} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
