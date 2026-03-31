import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 border-t border-slate-900 bg-slate-950 text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Brand/Logo again but smaller */}
        <div className="text-lg font-black tracking-tighter text-white mb-4">
          KOKO<span className="text-sky-400">.DEV</span>
        </div>

        {/* Quick Links for your iPhone 8 users */}
        <div className="flex justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
          <a href="#hero" className="hover:text-white transition-colors">Top</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
        </div>

        {/* Credits */}
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em]">
          © {currentYear} • Built with <span className="text-sky-500">React</span> & <span className="text-sky-500">Tailwind</span> on Fedora
        </p>

      </div>
    </footer>
  );
}

export default Footer