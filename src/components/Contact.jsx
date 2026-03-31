import React from 'react';
import { HiMail, HiChatAlt2 } from 'react-icons/hi';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-8 md:px-24 bg-slate-950 text-white relative">
            <div className="max-w-4xl mx-auto text-center">

                {/* Section Header */}
                <h2 className="text-4xl md:text-6xl font-black mb-6">
                    Let's Build <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-500">Something Great</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                    Currently open to new projects and collaborations. Whether it's a MERN app or a custom UI, my inbox is always open.
                </p>

                {/* Contact Card */}
                <div className="bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-4xl backdrop-blur-xl shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Primary Action: Email */}
                        <a href="mailto:kokoibinabom@@gmail.com" className="flex items-center gap-4 p-6 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group">
                            <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 text-2xl group-hover:bg-sky-500 group-hover:text-white transition-all">
                                <HiMail />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                                <p className="text-sm font-mono text-slate-200">hello@koko.dev</p>
                            </div>
                        </a>

                        {/* Secondary Action: WhatsApp/Chat */}
                        <a href="https://wa.me/07077975970" className="flex items-center gap-4 p-6 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                <HiChatAlt2 />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">WhatsApp</p>
                                <p className="text-sm font-mono text-slate-200">Send a message</p>
                            </div>
                        </a>

                    </div>

                    {/* Social Links Bar */}
                    <div className="mt-12 pt-8 border-t border-slate-800/50">
                        <p className="text-xs text-slate-500 uppercase tracking-[0.3em] mb-6">Find me on</p>
                        <div className="flex justify-center gap-6 text-2xl text-slate-400">
                            <a href="https://github.com/TeeKay999x" target='_blank' rel="nonreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
                            <a href="https://youtube.com/@CyberNest09" target='_blank' rel="nonreferrer" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                            <a href="https://www.linkedin.com/in/koko-ibinabo-56bb623bb" target='_blank' rel="nonreferrer" className="hover:text-sky-400 transition-colors"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact