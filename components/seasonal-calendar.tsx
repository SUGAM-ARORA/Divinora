"use client";

import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Snowflake, Sun, CloudRain } from 'lucide-react';
import { useAudio } from '@/components/audio-provider';

const yatraEvents = [
  { month: 'April', event: 'Kedarnath & Badrinath Opening', desc: 'The portals of the highest Char Dham shrines open after winter.', type: 'opening', icon: Sun, color: 'text-yellow-500' },
  { month: 'July', event: 'Amarnath Yatra Commences', desc: 'The sacred ice lingam forms in the Pahalgam/Baltal route caves.', type: 'peak', icon: CloudRain, color: 'text-blue-500' },
  { month: 'October', event: 'Navratri & Shakti Peethas', desc: 'Peak visitation for all 52 Shakti Peethas across the subcontinent.', type: 'festival', icon: Sun, color: 'text-orange-500' },
  { month: 'November', event: 'Char Dham Closing (Diwali)', desc: 'The portals close for the winter. Utsav Murtis move down.', type: 'closing', icon: Snowflake, color: 'text-sky-300' }
];

export function SeasonalCalendar() {
  const { playSoftBell } = useAudio();

  return (
    <div className="py-8">
      <div className="flex items-center gap-3 mb-8">
        <CalendarIcon className="w-6 h-6 text-orange-500" />
        <h3 className="text-2xl font-serif text-white">Yatra & Festival Timeline</h3>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[39px] top-0 bottom-0 w-px bg-slate-800" />
        
        <div className="space-y-8 relative">
          {yatraEvents.map((item, idx) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onMouseEnter={playSoftBell}
              className="flex gap-6 group cursor-default"
            >
              <div className="w-20 pt-1 shrink-0 text-right">
                <span className="text-sm font-bold text-slate-300 font-serif">{item.month}</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-orange-500 transition-colors z-10`} />
                <div className="absolute top-4 bottom-[-2rem] w-px bg-slate-800" />
              </div>
              <div className="bg-[#020617] border border-slate-800 group-hover:border-slate-700 rounded-xl p-5 flex-1 transition-colors shadow-lg shadow-black/50">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <h4 className="font-bold text-white tracking-wide">{item.event}</h4>
                </div>
                <p className="text-sm text-slate-400 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
