import React from 'react';
import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="slide w-screen h-screen flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden relative">
      
      {/* Background Decorative Layer */}
      {slide.image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={slide.image} 
            className="w-full h-full object-cover scale-110 blur-[120px] opacity-[0.03] dark:opacity-[0.08] diagonal-mask transition-opacity duration-1000"
            alt=""
          />
          {/* Subtle line grid */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
          </div>
        </div>
      )}

      <div className="px-8 max-w-7xl w-full grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-4 md:gap-12 items-center z-10">
        
        {/* Text Content Area */}
        <div className="lg:col-span-6 space-y-4 md:space-y-8 order-2 lg:order-1">
          <header className="flex flex-col">
            {/* Subtítulo: Alineado con el borde izquierdo del H1 */}
            {slide.subtitle && (
              <div className="flex items-center space-x-3 mb-2 md:mb-4">
                <span className="h-[2px] w-8 md:w-6 bg-bling"></span>
                <p className="text-bling font-semibold tracking-[0.4em] uppercase text-[10px] md:text-[11px] font-montserrat leading-none">
                  {slide.subtitle}
                </p>
              </div>
            )}

            {/* H1: El truco está en el leading específico y un pequeño padding negativo o transform */}
            <h1 className="font-bebas border-l-8 border-[#ffcc00] pt-[8px] pl-8 text-slate-800 dark:text-white text-7xl xl:text-8xl 
                           inline-block transition-all
                           leading-[0.8] tracking-tight
                           relative top-[0.15em]"> 
              {slide.title}
            </h1>
          </header>
          
          <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light font-montserrat max-w-lg mt-2">
            {slide.content}
          </div>
        </div>

        {/* Media / Visual Area */}
        {slide.image && (
          <div className="lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 group">
            
            {/* 1. Dynamic Ambient Glow */}
            <div className="absolute w-[120%] h-[120%] bg-bling/5 dark:bg-bling/10 blur-[100px] rounded-full animate-pulse-soft"></div>
            
            {/* 2. Main Media Container */}
            <div className="relative w-full md:max-w-[480px] aspect-video md:aspect-[4/5] perspective-1000">
              
              {/* Technical Brackets (Corners) */}
              <div className="absolute -top-4 -left-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-bling/40 z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-bling/40 z-20"></div>

              {/* Offset decorative plane (Glass) */}
              <div className="hidden md:block absolute -right-8 -bottom-8 w-full h-full border border-slate-200 dark:border-white/5 rounded-2xl z-0 transform translate-z-[-20px] bg-slate-100/20 dark:bg-white/2 backdrop-blur-sm"></div>

              {/* Primary Image Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.3)] md:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-white/10">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                />
                
                {/* Minimalist Tech Overlay (Coordinates) */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col items-end opacity-40">
                  <span className="text-[6px] md:text-[8px] font-mono text-white tracking-widest">LOC: 34.0522 N</span>
                  <span className="text-[6px] md:text-[8px] font-mono text-white tracking-widest">VER: 01.00.42</span>
                </div>

                {/* Subtle Top-Down Shimmer Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-[1px] w-full animate-scan z-20"></div>
                
                {/* Integration Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* 3. Minimalist Info Card (Glassmorphism) */}
              <div className="hidden md:block absolute -bottom-6 -left-12 p-5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl shadow-2xl z-30 max-w-[200px] animate-float">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bling animate-pulse"></div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Live Render</p>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-800 dark:text-white">VISIÓN ESTRUCTURAL</h3>
                  <div className="w-full h-[1px] bg-slate-200 dark:bg-white/10"></div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Análisis volumétrico de componentes dinámicos integrados.
                  </p>
                </div>
              </div>

              {/* 4. Architectural Accent Elements */}
              <div className="hidden md:flex absolute top-1/4 -right-12 z-20 flex flex-col items-center space-y-2">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-bling to-transparent"></div>
                <span className="text-[10px] [writing-mode:vertical-lr] text-bling font-mono tracking-widest opacity-60">PRECISION_SYSTEM</span>
              </div>

            </div>

            {/* Custom Styles */}
            <style>{`
              @keyframes scan {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(1000%); }
              }
              .animate-scan {
                animation: scan 4s linear infinite;
              }
              .perspective-1000 {
                perspective: 1000px;
              }
              .translate-z-[-20px] {
                transform: translateZ(-20px);
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
