
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
    <h1 className="font-bebas border-l-4 border-[#ffcc00] pt-[8px] pl-4 text-slate-800 dark:text-white text-7xl xl:text-8xl 
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
          <div className="lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="absolute w-[120%] h-[120%] bg-bling/5 blur-[60px] md:blur-[100px] rounded-full"></div>
            
            <div className="flex items-center justify-center !p-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 aspect-video md:aspect-[5/6] shadow-2xl overflow-hidden group w-full mx-auto">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-auto w-full h-full  object-cover   transform transition-transform duration-1000 group-hover:scale-[1.03] "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent h-20 w-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative Watermark */}
      <div className="absolute bottom-24 md:bottom-32 left-4 md:left-16 text-[4rem] md:text-9xl lg:text-[15rem] font-bebas opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none -z-10 text-slate-900 dark:text-white leading-none hidden md:block">
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
