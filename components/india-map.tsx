"use client";

import { useState, memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, MapPin, Mountain, Waves, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { indianStates } from '@/lib/data';

// Accurate India states GeoJSON from public dataset
const INDIA_TOPO_URL = "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// Map state names from GeoJSON to our data IDs
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

const regionColorMap: Record<string, { base: string; hover: string; selected: string }> = {
  north:     { base: '#FF8C00', hover: '#FF7700', selected: '#E06000' },
  south:     { base: '#E8443A', hover: '#D63228', selected: '#C02018' },
  east:      { base: '#22A855', hover: '#1A9648', selected: '#12843A' },
  west:      { base: '#F5B800', hover: '#E0A800', selected: '#CC9A00' },
  central:   { base: '#8B5CF6', hover: '#7C4FE0', selected: '#6D40CC' },
  northeast: { base: '#06B6D4', hover: '#05A0BB', selected: '#048AA2' },
};

function IndiaMapInner() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState<string>('');
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [82, 22], zoom: 1
  });

  const selectedData = selectedState ? indianStates.find(s => s.id === selectedState) : null;

  const handleZoomIn = () => setPosition(p => ({ ...p, zoom: Math.min(p.zoom * 1.5, 8) }));
  const handleZoomOut = () => setPosition(p => ({ ...p, zoom: Math.max(p.zoom / 1.5, 1) }));
  const handleReset = () => setPosition({ coordinates: [82, 22], zoom: 1 });

  return (
    <div className="relative flex flex-col lg:flex-row gap-6 items-start">
      {/* Map Container */}
      <div className="relative w-full lg:w-3/5">
        <div className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-orange-200/50 dark:border-slate-700">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇮🇳</span>
              <span className="text-white font-bold text-sm tracking-wide">BHARAT — SACRED INDIA MAP</span>
            </div>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" className="h-7 w-7 text-white/80 hover:text-white hover:bg-white/20" onClick={handleZoomIn}><ZoomIn className="h-3.5 w-3.5" /></Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-white/80 hover:text-white hover:bg-white/20" onClick={handleZoomOut}><ZoomOut className="h-3.5 w-3.5" /></Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-white/80 hover:text-white hover:bg-white/20" onClick={handleReset}><RotateCcw className="h-3.5 w-3.5" /></Button>
            </div>
          </div>

          {/* Map */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1000, center: [82, 22] }}
            style={{ width: '100%', height: 'auto' }}
            width={600}
            height={700}
          >
            <ZoomableGroup
              center={position.coordinates}
              zoom={position.zoom}
              onMoveEnd={({ coordinates, zoom }: any) => setPosition({ coordinates, zoom })}
            >
              <Geographies geography={INDIA_TOPO_URL}>
                {({ geographies }: any) =>
                  geographies.map((geo: any) => {
                    const stateName = geo.properties.ST_NM || geo.properties.NAME_1 || geo.properties.name;
                    const stateId = stateNameToId[stateName] || null;
                    const stateData = stateId ? indianStates.find(s => s.id === stateId) : null;
                    const region = stateData?.region || 'north';
                    const colors = regionColorMap[region] || regionColorMap.north;
                    const isHovered = hoveredState === stateId;
                    const isSelected = selectedState === stateId;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setHoveredState(stateId);
                          setTooltipContent(stateName || '');
                        }}
                        onMouseLeave={() => {
                          setHoveredState(null);
                          setTooltipContent('');
                        }}
                        onClick={() => {
                          if (stateId) {
                            setSelectedState(isSelected ? null : stateId);
                          }
                        }}
                        style={{
                          default: {
                            fill: isSelected ? colors.selected : colors.base,
                            stroke: '#FFFFFF',
                            strokeWidth: 0.5,
                            outline: 'none',
                            opacity: isSelected ? 1 : 0.85,
                            cursor: stateId ? 'pointer' : 'default',
                          },
                          hover: {
                            fill: isSelected ? colors.selected : colors.hover,
                            stroke: '#FFFFFF',
                            strokeWidth: 1,
                            outline: 'none',
                            opacity: 1,
                            cursor: stateId ? 'pointer' : 'default',
                          },
                          pressed: {
                            fill: colors.selected,
                            stroke: '#FFFFFF',
                            strokeWidth: 1.5,
                            outline: 'none',
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {/* Hover Tooltip */}
          {tooltipContent && !selectedState && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-2 rounded-xl shadow-xl border border-orange-200 dark:border-slate-700 pointer-events-none z-10">
              <p className="text-sm font-semibold text-center">{tooltipContent}</p>
              <p className="text-[10px] text-muted-foreground text-center">Click to explore sacred places</p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 px-2">
          {Object.entries(regionColorMap).map(([region, colors]) => (
            <div key={region} className="flex items-center gap-1.5 text-xs">
              <div className="w-3 h-3 rounded-sm shadow-sm" style={{ backgroundColor: colors.base }} />
              <span className="capitalize text-muted-foreground">{region === 'northeast' ? 'NE India' : `${region} India`}</span>
            </div>
          ))}
        </div>
      </div>

      {/* State Detail Panel */}
      <div className="w-full lg:w-2/5 lg:sticky lg:top-24">
        {selectedData ? (
          <Card className="border-0 shadow-xl bg-white dark:bg-slate-900 animate-in slide-in-from-right-4 duration-300 overflow-hidden">
            {/* Header gradient */}
            <div className={`h-2 bg-gradient-to-r ${
              selectedData.region === 'north' ? 'from-orange-500 to-amber-500' :
              selectedData.region === 'south' ? 'from-red-500 to-rose-500' :
              selectedData.region === 'east' ? 'from-emerald-500 to-green-500' :
              selectedData.region === 'west' ? 'from-yellow-500 to-amber-500' :
              selectedData.region === 'central' ? 'from-violet-500 to-purple-500' :
              'from-cyan-500 to-teal-500'
            }`} />
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedData.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{selectedData.region} India • Capital: {selectedData.capital}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedState(null)} className="shrink-0">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{selectedData.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedData.highlights.map((h, i) => (
                  <Badge key={i} variant="outline" className="text-[10px]">{h}</Badge>
                ))}
              </div>

              {/* Temples */}
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                Sacred Temples ({selectedData.famousTemples.length})
              </h4>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 mb-5">
                {selectedData.famousTemples.map((t, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.deity} • {t.type} • {t.location}</p>
                  </div>
                ))}
              </div>

              {selectedData.sacredRivers && selectedData.sacredRivers.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Waves className="h-4 w-4 text-blue-500" />Sacred Rivers</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedData.sacredRivers.map((r, i) => <Badge key={i} className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">{r}</Badge>)}
                  </div>
                </div>
              )}

              {selectedData.famousTreks && selectedData.famousTreks.length > 0 && (
                <div className="mb-5">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Mountain className="h-4 w-4 text-emerald-500" />Sacred Treks</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedData.famousTreks.map((t, i) => <Badge key={i} className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">{t}</Badge>)}
                  </div>
                </div>
              )}

              <Link href={`/explore?state=${selectedData.id}`}>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg">
                  View Full State Guide <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Select a State</h3>
              <p className="text-sm text-muted-foreground mb-4">Click any state on the map to discover its sacred temples, rivers, and spiritual treks</p>
              <div className="text-xs text-muted-foreground bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                <p className="font-medium mb-2 text-foreground">Covering all of India:</p>
                <div className="grid grid-cols-2 gap-2 text-left">
                  <span>🛕 {indianStates.reduce((a, s) => a + s.famousTemples.length, 0)}+ temples</span>
                  <span>🏔️ Sacred treks</span>
                  <span>🌊 Holy rivers</span>
                  <span>📍 Pilgrimage routes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export const IndiaMap = memo(IndiaMapInner);
