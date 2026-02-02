import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const { contact } = resumeData;
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    };

    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-md">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>
                        <div className="space-y-4">
                            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-blue-500" />
                                {contact.email}
                            </a>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Phone className="w-5 h-5 text-blue-500" />
                                {contact.phone}
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                {contact.location}
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-full text-slate-100"
                                />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-full text-slate-100"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={4}
                                required
                                className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-full resize-none text-slate-100"
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href={contact.linkedin} className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={contact.github} className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
