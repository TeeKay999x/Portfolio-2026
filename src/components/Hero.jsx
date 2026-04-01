import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='relative min-h-screen flex items-center px-8 md:px-24'>
            <div className=''>
                <div className='grid md:grid-cols-[1.5fr_1fr] gap-12 items-center w-full'>
                    <div className='animate-bounce-in'>
                        <p className="font-mono text-sky-400 text-sm md:text-base mb-4 tracking-widest uppercase">Full-Stack Developer</p>
                        <h1 className='text-5xl md:text-7xl mt-10 font-extrabold mb-6 leading-tight'>I build <span className='text-transparent bg-clip-text  bg-linear-to-r from-sky-400 to-blue-500'>Scalable digital experiences.</span></h1>
                        <p className='text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed'>I am <span className='text-white font-semibold'>Koko Michael</span>. From secure MERN backends to high-performance UIs, I turn complex problems into clean, shippable code.</p>
                        <div className='flex flex-wrap gap-5'>
                            <a href="#projects" className='bg-white text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-sky-400 hover:text-white transition-all'>View My Work</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center mt-10 md:mt-0'>
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map((tech) => (
                            <div key={tech} className='bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-2xl backdrop-blur-sm hover:border-sky-400/50 transition-colors cursor-default'>
                                <span className='font-mono text-sm text-slate-300'>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
