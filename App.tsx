
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Theme, SlideData } from './types';
import ThemeToggle from './components/ThemeToggle';
import Slide from './components/Slide';
import StatsChart from './components/StatsChart';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const slides: SlideData[] = [
    {
      id: 'hero',
      title: 'BLING NEWS',
      subtitle: 'Intelligence & Media Platform',
      accent: true,
      content: (
        <div className="space-y-8">
          <p className="text-3xl font-extralight tracking-tight text-slate-500 dark:text-slate-400 text-balance">
            La infraestructura definitiva para el <span className=" font-bold italic text-[#ffcc00]">periodismo digital</span> de alto rendimiento.
          </p>
          <div className="flex items-center space-x-6">
            <button className="group relative flex items-center space-x-3 bg-bling px-8 py-4 overflow-hidden shadow-lg shadow-bling/20">
                <div className="absolute inset-0 w-0 bg-slate-900 dark:bg-white group-hover:w-full transition-all duration-500 ease-in-out"></div>
                <span className="relative z-10 text-slate-950 group-hover:text-white dark:group-hover:text-slate-900 font-bold text-xs uppercase tracking-widest">Descubrir Ecosistema</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-4 w-4 text-slate-950 group-hover:text-white dark:group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Versión 4.2.0-PRO</p>
          </div>
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'ads',
      title: 'PUBLICIDAD',
      subtitle: 'Motor de Visibilidad Publicitaria',
      content: (
        <div className="space-y-6">
          <p  className="text-balance">
            Algoritmos de posicionamiento basados en <strong className="text-[#FFCC00]">puntos calientes de atención</strong>. La publicidad deja de ser invasiva para volverse parte del flujo informativo.
          </p>
          <div className="grid grid-cols-1 gap-4 pt-4">
            <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">Precision-Targeting</span>
                <span className="text-bling font-bebas text-xl">99.8% ACCURACY</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">Responsive Ratios</span>
                <span className="text-bling font-bebas text-xl">ANY ASPECT RATIO</span>
            </div>
          </div>
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'catalog',
      title: 'CATÁLOGO',
      subtitle: 'Catálogo Exclusivo para Empresas',
      content: (
        <div className="space-y-6">
          <p  className="text-balance">
            Más que un catálogo, es un <strong className="text-[#FFCC00]">índice de autoridad</strong>. Solo marcas verificadas con altos estándares de calidad editorial pueden acceder a este espacio.
          </p>
          <div className="space-y-4">
            <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-bling w-2/3"></div>
            </div>
            <p className="text-xs font-light text-slate-500 dark:text-slate-400">Saturación del Catálogo Actual: 66% • Espacios limitados por categoría.</p>
          </div>
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'references',
      title: 'REFERENCIAS',
      subtitle: 'Authority through Context',
      content: (
        <div className="space-y-6">
          <p  className="text-balance">
            Integración de marcas en el núcleo de la noticia.<strong className="text-[#FFCC00] font-bold italic"> Una referencia en BlingNews equivale a una recomendación de experto</strong> en tiempo real.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-100 dark:bg-transparent border border-slate-200 dark:border-white/5 rounded-xl text-center">
                <p className="text-3xl font-bebas text-bling">365D</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400">Ciclo de Referencia</p>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-transparent border border-slate-200 dark:border-white/5 rounded-xl text-center">
                <p className="text-3xl font-bebas text-bling">API</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-400">Integración Directa</p>
            </div>
          </div>
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'stats',
      title: 'ANÁLITICAS',
      subtitle: 'Visualización Profunda de Datos',
      content: (
        <div className="space-y-4">
          <p className="text-balance">
            Nuestras métricas van más allá del clic. Medimos el <strong className="text-[#FFCC00] font-bold italic">tiempo de permanencia y la profundidad de scroll</strong> para entender el interés real.
          </p>
          <StatsChart theme={theme} />
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'closing',
      title: 'FUTURO',
      subtitle: 'BlingCompany Group',
      accent: true,
      content: (
        <div className="space-y-10">
          <p className="text-4xl font-extralight leading-tight text-slate-800 dark:text-white text-balance">
            Diseñando el estándar de <span className="italic font-bold text-[#FFCC00]">mañana</span>, para las marcas de <span className="italic font-bold text-[#FFCC00]">hoy</span>.
          </p>
          <div className="flex flex-col space-y-4 pt-10 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-6">
                <div>
                    <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Connect</p>
                    <p className="text-lg font-bebas tracking-[0.2em] text-bling">PARTNERS@BLING.UY</p>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-white/10"></div>
                <div>
                    <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bebas tracking-[0.2em] text-slate-800 dark:text-slate-200">GLOBAL HUB</p>
                </div>
            </div>
          </div>
        </div>
      ),
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  const scrollToSlide = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      scrollToSlide(next);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide, scrollToSlide, slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const index = Math.round(scrollContainerRef.current.scrollLeft / window.innerWidth);
        if (index !== currentSlide) setCurrentSlide(index);
      }
    };
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-1000 min-h-screen relative overflow-hidden selection:bg-bling selection:text-slate-900">
      
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {slides.map((slide, index) => (
          slide.image && (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-20 dark:opacity-10' : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'blur(5px)'
              }}
            />
          )
        ))}
      </div>

      {/* Spotlight interactive background */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-1000 opacity-20 dark:opacity-40"
        style={{
          background: `radial-gradient(circle 50vw at ${mousePos.x}% ${mousePos.y}%, rgba(255, 204, 0, 0.08), transparent)`
        }}
      />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      {/* Navigation Controls (Floating Arrows) */}
      <div className="fixed inset-y-0 left-0 w-16 md:w-24 flex items-center justify-center z-50 group pointer-events-none">
        {currentSlide > 0 && (
            <button 
                onClick={() => scrollToSlide(currentSlide - 1)}
                className="pointer-events-auto p-3 md:p-4 transition-all hover:translate-x-2 opacity-20 group-hover:opacity-100 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-slate-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        )}
      </div>
      <div className="fixed inset-y-0 right-0 w-16 md:w-24 flex items-center justify-center z-50 group pointer-events-none">
        {currentSlide < slides.length - 1 && (
            <button 
                onClick={() => scrollToSlide(currentSlide + 1)}
                className="pointer-events-auto p-3 md:p-4 transition-all hover:-translate-x-2 opacity-20 group-hover:opacity-100 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-slate-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        )}
      </div>

      {/* Top Header Fixed */}
      <div className="fixed top-0 left-0 w-full z-[60] p-6 md:p-10 flex justify-between items-start pointer-events-none">
        <div className="flex items-center space-x-4 md:space-x-6 pointer-events-auto group cursor-pointer">
            <Logo 
                darkMode={theme === Theme.DARK} 
                width={120} 
                height={40} 
                className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col hidden md:flex">
                <span className="text-[7px] md:text-[9px] tracking-[0.4em] md:tracking-[0.6em] font-mono text-slate-500 dark:text-slate-400 uppercase mt-1">Online Presentations</span>
            </div>
        </div>
        
        <div className="flex flex-col items-end space-y-1 md:space-y-2 pointer-events-auto">
            <div className="flex items-center space-x-2 text-[8px] md:text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>EN LINEA</span>
            </div>
            <div className="text-right hidden sm:block">
                <p className="text-[8px] md:text-[10px] mb-1 md:mb-2 font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">[BN 03541] - URUGUAY</p>
                <p className="text-bling font-bebas text-lg md:text-xl leading-none">V-4.2 / BLING-PRESENTATIONS</p>
            </div>
        </div>
      </div>

      {/* Main Slider */}
      <div ref={scrollContainerRef} className="slide-container flex overflow-x-auto h-screen relative z-10">
        {slides.map((slide) => <Slide key={slide.id} slide={slide} />)}
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 w-full z-[60] p-6 md:p-10 flex justify-between items-end pointer-events-none">
        
        {/* Left Side: Stats/Branding */}
        <div className="flex items-center space-x-4 md:space-x-8 pointer-events-auto">
            <div className="flex flex-col">
                <p className="text-[7px] md:text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1">Current Session</p>
                <p className="font-bebas text-xl md:text-2xl tracking-[0.1em] text-slate-800 dark:text-white">{time}</p>
            </div>
            <div className="h-6 md:h-8 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
            <div className="hidden md:flex flex-col">
                <p className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-1">Company Group</p>
                <p className="font-bebas text-2xl tracking-[0.1em] text-slate-800/80 dark:text-white/80">BLINGCOMPANY ©26</p>
            </div>
        </div>

        {/* Center: Slide Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-4 md:space-x-8 pb-2 pointer-events-auto">
            <div className="flex items-center space-x-2 md:space-x-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToSlide(idx)}
                        className={`transition-all duration-700 h-[2px] ${
                            currentSlide === idx ? 'w-10 md:w-16 bg-bling' : 'w-2 md:w-4 bg-slate-300 dark:bg-white/10 hover:bg-bling/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            <div className="font-mono text-[8px] md:text-[10px] tracking-widest text-slate-500 dark:text-slate-400">
                PAGE {String(currentSlide + 1).padStart(2, '0')}
            </div>
        </div>

        {/* Right Side: Security/Status */}
        <div className="flex flex-col items-end pointer-events-auto">
            <div className="w-24 md:w-32 h-[2px] bg-slate-200 dark:bg-white/5 mb-2 md:mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-bling transition-all duration-700" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-[6px] md:text-[8px] font-mono tracking-[0.3em] md:tracking-[0.5em] text-slate-400 dark:text-slate-500 uppercase">Encrypted Presentation Mode</p>
        </div>
      </div>

    </div>
  );
};

export default App;
