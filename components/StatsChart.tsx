
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, defs, linearGradient } from 'recharts';
import { Theme } from '../types';

const data = [
  { name: '01', views: 4200 },
  { name: '02', views: 3100 },
  { name: '03', views: 5800 },
  { name: '04', views: 7900 },
  { name: '05', views: 4890 },
  { name: '06', views: 6390 },
  { name: '07', views: 8490 },
];

interface StatsChartProps {
  theme?: Theme;
}

const StatsChart: React.FC<StatsChartProps> = ({ theme = Theme.DARK }) => {
  const isDark = theme === Theme.DARK;

  const colors = {
    grid: isDark ? '#ffffff' : '#000000',
    gridOpacity: isDark ? 0.03 : 0.05,
    tick: isDark ? '#94a3b8' : '#64748b',
    tooltipCursor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)',
    tooltipBg: isDark ? '#020617' : '#ffffff',
    tooltipBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    tooltipText: isDark ? '#fff' : '#020617',
    inactiveBarStart: isDark ? '#475569' : '#94a3b8',
    inactiveBarEnd: isDark ? '#475569' : '#94a3b8',
  };

  return (
    <div className="h-48 md:h-64 w-full mt-6 pointer-events-none md:mt-10 bg-white/60 dark:bg-black/20 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-black/5 dark:border-white/5 relative overflow-hidden group transition-colors duration-500">
      <div className="absolute top-4 left-6 flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-bling animate-pulse"></div>
        <span className="text-[10px] font-mono tracking-widest opacity-50 uppercase text-slate-800 dark:text-white">Live Performance Index</span>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 40, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffcc00" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ffcc00" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="barGradientInactive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.inactiveBarStart} stopOpacity={0.4}/>
              <stop offset="95%" stopColor={colors.inactiveBarEnd} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke={colors.grid} vertical={false} opacity={colors.gridOpacity} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: colors.tick, fontSize: 10, fontFamily: 'JetBrains Mono' }} 
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: colors.tooltipCursor }}
            contentStyle={{ backgroundColor: colors.tooltipBg, border: `1px solid ${colors.tooltipBorder}`, borderRadius: '12px', color: colors.tooltipText, fontSize: '12px' }}
          />
          <Bar dataKey="views" radius={[2, 2, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === 6 ? 'url(#barGradient)' : 'url(#barGradientInactive)'} 
                className="transition-all duration-500"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
