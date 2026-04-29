"use client";

import { useState, memo, useRef, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, MapPin, Mountain, Waves, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { indianStates } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

// Accurate India states GeoJSON from public dataset
const INDIA_TOPO_URL = "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

const stateNameToId: Record<string, string> = {
  'Uttarakhand': 'uttarakhand', 'Gujarat': 'gujarat', 'Maharashtra': 'maharashtra',
  'Tamil Nadu': 'tamil-nadu', 'Uttar Pradesh': 'uttar-pradesh',
  'Jammu & Kashmir': 'jammu-kashmir', 'Jammu and Kashmir': 'jammu-kashmir',
  'Madhya Pradesh': 'madhya-pradesh', 'Andhra Pradesh': 'andhra-pradesh',
  'Jharkhand': 'jharkhand', 'Rajasthan': 'rajasthan', 'Karnataka': 'karnataka',
  'Kerala': 'kerala', 'West Bengal': 'west-bengal', 'Odisha': 'odisha',
  'Himachal Pradesh': 'himachal-pradesh', 'Punjab': 'punjab', 'Haryana': 'haryana',
  'Bihar': 'bihar', 'Goa': 'goa', 'Telangana': 'telangana',
  'Chhattisgarh': 'chhattisgarh', 'Assam': 'northeast', 'Meghalaya': 'northeast',
  'Manipur': 'northeast', 'Mizoram': 'northeast', 'Nagaland': 'northeast',
  'Tripura': 'northeast', 'Arunachal Pradesh': 'northeast', 'Sikkim': 'northeast',
  'Ladakh': 'jammu-kashmir', 'Delhi': 'uttar-pradesh',
};

const regionStyles: Record<string, { fill: string; hover: string; selected: string; glow: string }> = {
  north:     { fill: '#1e3a8a', hover: '#3b82f6', selected: '#60a5fa', glow: 'shadow-blue-500/50' },
  south:     { fill: '#7c2d12', hover: '#ea580c', selected: '#fb923c', glow: 'shadow-orange-500/50' },
  east:      { fill: '#064e3b', hover: '#10b981', selected: '#34d399', glow: 'shadow-emerald-500/50' },
  west:      { fill: '#713f12', hover: '#eab308', selected: '#facc15', glow: 'shadow-yellow-500/50' },
  central:   { fill: '#4c1d95', hover: '#8b5cf6', selected: '#a78bfa', glow: 'shadow-violet-500/50' },
  northeast: { fill: '#164e63', hover: '#06b6d4', selected: '#22d3ee', glow: 'shadow-cyan-500/50' },
};

function IndiaMapInner() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState<string>('');
  const mapRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Parallax effect
  const [rotation, setRotation] = useState({ x: 30, y: -5 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Subtly shift the 3D rotation based on mouse position
    setRotation({
      x: 35 - (y / rect.height) * 20, 
      y: -5 + (x / rect.width) * 15
    });
  };

  const handleMouseLeave = () => {
    // Reset near default position smoothly
    setRotation({ x: 35, y: -5 });
    setHoveredState(null);
    setTooltipContent('');
  };

  const selectedData = selectedState ? indianStates.find(s => s.id === selectedState) : null;

  if (!isClient) return null;

  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center rounded-[3rem] overflow-hidden bg-gradient-to-b from-slate-950/40 to-[#020617] border border-blue-900/30 backdrop-blur-md shadow-2xl py-12">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      {/* 3D Map Container */}
      <div 
        ref={mapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[1200px] h-full flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: THICKNESS BORDER (Dark Shadow underneath) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-80 filter blur-[2px] translate-y-10 translate-x-3"
          style={{ transform: "translateZ(-30px)" }}
        >
          <ComposableMap width={1000} height={1000} projection="geoMercator" projectionConfig={{ scale: 1550, center: [82, 22] }} className="w-full h-full drop-shadow-2xl">
            <Geographies geography={INDIA_TOPO_URL}>
              {({ geographies }: any) =>
                geographies.map((geo: any) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#020617" stroke="#000000" strokeWidth={0} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Layer 2: Mid Thickness */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-90 translate-y-5 translate-x-1.5"
          style={{ transform: "translateZ(-15px)" }}
        >
          <ComposableMap width={1000} height={1000} projection="geoMercator" projectionConfig={{ scale: 1550, center: [82, 22] }} className="w-full h-full">
            <Geographies geography={INDIA_TOPO_URL}>
              {({ geographies }: any) =>
                geographies.map((geo: any) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#0a0f24" stroke="#1e293b" strokeWidth={1} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Layer 3: TOP INTERACTIVE LAYER */}
        <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(0px)" }}>
          <ComposableMap width={1000} height={1000} projection="geoMercator" projectionConfig={{ scale: 1550, center: [82, 22] }} className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <Geographies geography={INDIA_TOPO_URL}>
              {({ geographies }: any) =>
                geographies.map((geo: any) => {
                  const stateName = geo.properties.ST_NM || geo.properties.NAME_1 || geo.properties.name;
                  const stateId = stateNameToId[stateName] || null;
                  const stateData = stateId ? indianStates.find(s => s.id === stateId) : null;
                  const region = stateData?.region || 'north';
                  const styles = regionStyles[region] || regionStyles.north;
                  const isHovered = hoveredState === stateId;
                  const isSelected = selectedState === stateId;
                  const isDimmed = selectedState !== null && !isSelected;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (stateId) {
                          setHoveredState(stateId);
                          setTooltipContent(stateName);
                        }
                      }}
                      onClick={() => {
                        if (stateId) setSelectedState(stateId);
                      }}
                      style={{
                        default: {
                          fill: isSelected ? styles.selected : styles.fill,
                          stroke: isSelected ? '#ffffff' : '#334155',
                          strokeWidth: isSelected ? 1.5 : 0.5,
                          outline: 'none',
                          opacity: isDimmed ? 0.3 : 0.9,
                          transition: 'all 0.3s ease',
                          cursor: stateId ? 'pointer' : 'default',
                        },
                        hover: {
                          fill: isSelected ? styles.selected : styles.hover,
                          stroke: '#ffffff',
                          strokeWidth: 2,
                          outline: 'none',
                          opacity: 1,
                          transition: 'all 0.1s ease',
                          cursor: stateId ? 'pointer' : 'default',
                          filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.7))',
                        },
                        pressed: {
                          fill: styles.selected,
                          stroke: '#ffffff',
                          strokeWidth: 2,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      {/* Floating Tooltip */}
      {tooltipContent && !selectedState && (
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-in fade-in slide-in-from-bottom-4">
            <p className="text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-center tracking-wider">{tooltipContent}</p>
            <p className="text-xs text-blue-200/50 text-center uppercase tracking-widest mt-1">Click to reveal details</p>
          </div>
        </div>
      )}

      {/* State Detail Glass Panel */}
      <AnimatePresence>
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-6 bottom-6 right-6 w-[420px] z-30"
          >
            <Card className="h-full w-full border border-slate-700/50 shadow-2xl bg-slate-900/70 backdrop-blur-2xl overflow-hidden flex flex-col">
              {/* Header gradient */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${
                selectedData.region === 'north' ? 'from-blue-500 to-sky-500' :
                selectedData.region === 'south' ? 'from-red-500 to-orange-500' :
                selectedData.region === 'east' ? 'from-emerald-500 to-teal-500' :
                selectedData.region === 'west' ? 'from-yellow-400 to-amber-500' :
                selectedData.region === 'central' ? 'from-purple-500 to-violet-500' :
                'from-cyan-400 to-blue-500'
              }`} />
              
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-serif font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text transition">{selectedData.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <Badge variant="outline" className="border-slate-700 text-slate-300 bg-slate-950/50 capitalize">{selectedData.region} Region</Badge>
                      <span>•</span>
                      <span>Cap: {selectedData.capital}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedState(null)} className="shrink-0 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-10 w-10">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <p className="text-slate-300 text-[15px] leading-relaxed mb-8 font-light italic">
                  "{selectedData.description}"
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedData.highlights.map((h, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="space-y-8">
                  {/* Temples */}
                  <div>
                    <h4 className="font-semibold text-sm mb-4 flex items-center gap-2 text-white uppercase tracking-wider">
                      <MapPin className="h-4 w-4 text-orange-400" />
                      Sacred Temples
                    </h4>
                    <div className="space-y-3">
                      {selectedData.famousTemples.slice(0, 5).map((t, i) => (
                        <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-slate-600 transition-colors">
                          <p className="text-[15px] font-medium text-slate-100 mb-1">{t.name}</p>
                          <p className="text-[12px] text-slate-400 flex items-center gap-2">
                            <span className="text-orange-400">{t.deity}</span> • {t.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedData.sacredRivers && selectedData.sacredRivers.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-white uppercase tracking-wider">
                        <Waves className="h-4 w-4 text-blue-400" /> Holy Rivers
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedData.sacredRivers.map((r, i) => (
                          <span key={i} className="text-[13px] px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-900 text-blue-300">{r}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedData.famousTreks && selectedData.famousTreks.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-white uppercase tracking-wider">
                        <Mountain className="h-4 w-4 text-emerald-400" /> Spiritual Treks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedData.famousTreks.map((t, i) => (
                          <span key={i} className="text-[13px] px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-900 text-emerald-300">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-slate-800 bg-slate-950/80">
                <Link href={`/explore?state=${selectedData.id}`}>
                  <Button className="w-full bg-white hover:bg-slate-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] h-12 text-[15px] font-medium rounded-xl group transition-all">
                    Plan Yatra to {selectedData.name} <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
}

export const IndiaMap = memo(IndiaMapInner);
