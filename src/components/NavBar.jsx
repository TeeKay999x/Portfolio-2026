import React, { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'



const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
            }`}>
            <div className='max-w-7xl mx-auto px-8 flex justify-between itmes-center'>
                <div className='text-xl font-black tracking-tighter text-white'>
                    KOKO <span className='text-sky-400'>.DEV</span>
                </div>

                <div className='hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-slate-400'>
                    <a href="#hero" className='hover:text-sky-400 transition-colors'>HOME</a>
                    <a href="#about" className='hover:text-sky-400 transition-colors'>ABOUT</a>
                    <a href="#projects" className='hover:text-sky-400 transition-colors'>Projects</a>
                    <a href="#contact" className='px-5 py-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition-all uppercase'>CONTACT</a>
                </div>

                <div className='md:hidden text-sky-400 cursor-pointer text-3xl' onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 overflow-hidden ${navOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col gap-6 p-8 text-center text-sm font-bold tracking-widest text-slate-400 uppercase'>
                    <a href="#hero" className='hover:text-sky-400' onClick={() => setNavOpen(false)}>HOME</a>
                    <a href="#about" className='hover:text-sky-400' onClick={() => setNavOpen(false)}>ABOUT</a>
                    <a href="#projects" className='hover:text-sky-400' onClick={() => setNavOpen(false)}>PROJECTS</a>
                    <a href="#contact" className='hover:text-sky-400' onClick={() => setNavOpen(false)}>CONTACT</a>

                </div>


            </div>
        </nav >
    )
}

export default NavBar
