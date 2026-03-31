import React from 'react'
import { DiJavascript, DiJavascript1, DiMongodb, DiNodejsSmall, DiReact } from 'react-icons/di'
import { SiExpress, SiTailwindcss } from 'react-icons/si'

const AboutMe = () => {

    const skills = [
        { name: "MongoDB", icon: <DiMongodb className="text-emerald-500" /> },
        { name: "Express", icon: <SiExpress className="text-slate-400" /> },
        { name: "React", icon: <DiReact className="text-sky-400" /> },
        { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Figma", icon: <SiExpress className="text-pink-400" /> }
    ]


    return (
        <section id='about' className='py-24 px-8 md:px-24 bg-slate-950 text-white relative overflow-hidden'>
            <div className=''>
                <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
                    <div>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-8'>Behind the <span className='text-sky-400'>Code</span></h2>
                        <div className='space-y-6 text-slate-400 leading-relaxed text-lg'>
                            <p>I'm a Full-Stack Developer passionate about building high-performance web applications using the <span>MERN Stack</span>. Whether it's crafting a luxury UI for a <span>Hotel site</span> or engineering complex logic for a <span>CBT platform</span>I focus on clean code and great UX</p>
                            <p>When I'm not debugging on my <span className='text-white font-bold'>Fedora Linux</span> machine, I'm sharing my knowledge on <span>Cyber Nest</span>, my YouTube channel where I break down modern web development for others.</p>
                        </div>

                        <div className='mt-10 flex gap-4'>
                            <div className='p-4 bg-slate-900/50 border border-slate-800 rounded-2xl'>
                                <p className='text-2xl font-black text-sky-400'>4+</p>
                                <p className='text-xs text-slate-500 uppercase tracking-widest'>Years Coding</p>
                            </div>

                            <div className='p-4 bg-slate-900/50 border border-slate-800 rounded-2xl'>
                                <p className='text-2xl font-black text-sky-400'>5+</p>
                                <p className='text-xs text-slate-500 uppercase tracking-widest'>Projects Done</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                        {skills.map((skill, index) => (
                            <div key={index} className='group p-6 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1'>
                                <span className='text-4xl group-hover:scale-110 transition-transform duration-300'>{skill.icon}</span>
                                <p className='text-[10px] font-bold text-slate-500 group-hover:text-white uppercase tracking-tighter'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe