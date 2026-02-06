
import React from 'react';
import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="slide w-screen h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative">
      
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

      <div className="max-w-7xl w-full grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-8 md:gap-12 items-center z-10">
        
        {/* Text Content Area */}
        <div className="lg:col-span-6 space-y-6 md:space-y-10">
          <header className="relative space-y-2 md:space-y-4">
            {slide.subtitle && (
              <div className="flex items-center space-x-4">
                <span className="h-px w-6 md:w-8 bg-bling"></span>
                <p className="text-bling font-semibold tracking-[0.4em] uppercase text-[9px] md:text-[10px] font-montserrat">
                  {slide.subtitle}
                </p>
              </div>
            )}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bebas leading-[0.85] text-slate-800 dark:text-white transition-all">
              {slide.title}
            </h1>
          </header>
          
          <div className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light font-montserrat max-w-lg border-l-2 border-yellow-500 dark:border-yellow-500 pl-6 md:pl-8">
            {slide.content}
          </div>
        </div>

        {/* Media / Visual Area */}
        {slide.image && (
          <div className="lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="absolute w-[120%] h-[120%] bg-bling/5 blur-[80px] md:blur-[100px] rounded-full"></div>
            
            <div className="relative p-1 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden group max-w-[85%] lg:max-w-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-auto max-h-[40vh] md:max-h-[50vh] lg:max-h-[60vh] object-cover rounded-xl md:rounded-2xl transform transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent h-20 w-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative Watermark */}
      <div className="absolute bottom-24 md:bottom-32 left-8 md:left-16 text-6xl md:text-9xl lg:text-[15rem] font-bebas opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none -z-10 text-slate-900 dark:text-white">
        {slide.title.split(' ')[0]}
      </div>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(500%); }
        }
      `}</style>
    </div>
  );
};

export default Slide;
