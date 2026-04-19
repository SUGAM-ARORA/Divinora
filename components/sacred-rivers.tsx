"use client";

import { motion } from 'framer-motion';
import { Waves, Droplet } from 'lucide-react';
import { useAudio } from '@/components/audio-provider';

const rivers = [
  { name: 'Ganga', desc: 'The most sacred river, descending from Shiva’s locks. Gives Moksha.', color: 'from-sky-400 to-blue-600' },
  { name: 'Yamuna', desc: 'Sister of Yama, flowing past Vrindavan and Mathura. Devotion incarnate.', color: 'from-emerald-400 to-teal-600' },
  { name: 'Saraswati', desc: 'The invisible river of wisdom and knowledge, merging at Prayagraj.', color: 'from-indigo-400 to-purple-600' },
  { name: 'Godavari', desc: 'Dakshin Ganga. Originating from Trimbakeshwar, nourishing the South.', color: 'from-amber-400 to-orange-600' },
  { name: 'Krishna', desc: 'Originating in Mahabaleshwar, the site of the great Srisailam.', color: 'from-cyan-400 to-blue-500' }
];

export function SacredRivers() {
  const { playSoftBell } = useAudio();

  return (
    <section className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Waves className="w-8 h-8 text-cyan-500" />
        <h2 className="text-3xl font-serif text-white">The Sacred Rivers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {rivers.map((river, idx) => (
          <motion.div
            key={river.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onMouseEnter={playSoftBell}
            className="group cursor-pointer"
          >
            <div className={`h-2 bg-gradient-to-r ${river.color} rounded-t-xl opacity-80 group-hover:opacity-100 transition-opacity`} />
            <div className="p-6 bg-slate-900 border border-slate-800 border-t-0 rounded-b-xl hover:bg-slate-800 transition-colors h-[180px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif flex items-center justify-between">
                  {river.name}
                  <Droplet className="w-4 h-4 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" />
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-3">{river.desc}</p>
              </div>
              <p className="text-xs text-cyan-400 uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">Trace Flow →</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
