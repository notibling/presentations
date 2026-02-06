import React from 'react';
import { clsx } from 'clsx';

interface LogoProps {
  className?: string;
  darkMode?: boolean;
  width?: number;
  height?: number;
  color?: 'light' | 'dark';
  style?: React.CSSProperties;
  variant?: 'full' | 'bell';
  service?: string;
  link?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  style = {},
  darkMode = true,
  width = 100,
  height = 100,
  variant = 'full',
  service,
  link = '/',
}) => {
  const fullLogoPath = darkMode ? '/images/svg/BlingLogoWhite.svg' : '/images/svg/BlingLogoBlack.svg';

  const bellPath = '/images/svg/BlingBellNoBg.svg';
  const imagePath = variant === 'bell' ? bellPath : fullLogoPath;

  const content = (
    <>
      <img
        width={width}
        height={height}
        alt={variant === 'bell' ? 'Bling Bell' : 'Bling Logo'}
        src={imagePath}
        className="flex-shrink-0"
      />
      {/* Show 'service' text if provided */}
      {service && (
        <div className="flex flex-row items-center justify-start pointer-events-none gap-2 select-none">
          <span className={`font-[Montserrat] text-xs font-bold ${darkMode ? '!text-white' : '!text-slate-800'}`}>
            |
          </span>
          <span className="font-[Montserrat] text-xs font-bold !text-white !bg-bling px-1">
            {service.toUpperCase()}
          </span>
        </div>
      )}
    </>
  );

  return (
    <div
      style={style}
      className={clsx(
        'w-auto flex-shrink-0 grow flex gap-2 flex-row items-center justify-start flex-nowrap',
        className
      )}
    >
      {link ? (
        <a href={link} className="flex items-center">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export { Logo };
