import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Maximize2, X} from 'lucide-react';
import {FACILITIES} from '../data/gymData';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';

export function Facilities() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<string>(FACILITIES[0].id);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % FACILITIES.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + FACILITIES.length) % FACILITIES.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const activeFacility =
    FACILITIES.find((f) => f.id === activeId) || FACILITIES[0];

  return (
    <section id="facilities" className="bg-[#151515] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
              Gym Facilities
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
              SIX PURPOSE-BUILT TRAINING &amp; RECOVERY ZONES.
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {FACILITIES.map((facility) => {
              const isSelected = facility.id === activeFacility.id;
              return (
                <button
                  key={facility.id}
                  type="button"
                  onClick={() => setActiveId(facility.id)}
                  className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors border whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] ${
                    isSelected
                      ? 'bg-[#E50914] border-[#E50914] text-white'
                      : 'bg-[#080808] border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/25'
                  }`}
                >
                  {facility.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Featured Spotlight + 6-Zone Gallery Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#080808] mb-8 items-stretch">
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              <SafeImage
                src={activeFacility.image}
                alt={activeFacility.name}
                fallbackLabel={activeFacility.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label={`Expand ${activeFacility.name} photo`}
                onClick={() =>
                  setSelectedIndex(FACILITIES.findIndex((f) => f.id === activeFacility.id))
                }
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[#080808]/85 border border-white/20 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:border-[#E50914] transition-colors cursor-pointer"
              >
                <Maximize2 className="h-3.5 w-3.5 text-[#E50914]" />
                <span>Inspect Zone</span>
              </button>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E50914]">
                  Zone Spotlight · {activeFacility.dimensions}
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
                  {activeFacility.name}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                  {activeFacility.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[#A1A1AA]">Key Equipment</span>
                  <span className="text-white font-medium text-right">
                    {activeFacility.equipmentHighlight}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#A1A1AA]">Access</span>
                  <span className="text-white font-medium text-right">
                    {activeFacility.accessTier}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((facility, idx) => {
            const isActive = facility.id === activeFacility.id;
            return (
              <ScrollReveal key={facility.id} delayMs={idx * 45}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveId(facility.id);
                    setSelectedIndex(idx);
                  }}
                  className={`group relative w-full text-left overflow-hidden border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] ${
                    isActive
                      ? 'border-[#E50914]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#080808]">
                    <SafeImage
                      src={facility.image}
                      alt={`${facility.name} at IRON VAULT FITNESS`}
                      fallbackLabel={facility.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/30 to-transparent"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-[#A1A1AA]">
                        {facility.dimensions}
                      </p>
                      <h3 className="mt-0.5 font-display text-xl font-bold uppercase text-white">
                        {facility.name}
                      </h3>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center border border-white/20 bg-[#080808]/70 text-white group-hover:border-[#E50914] group-hover:text-[#E50914] transition-colors shrink-0">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={FACILITIES[selectedIndex].name}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl border border-white/15 bg-[#080808]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close facility gallery"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center bg-[#080808]/85 border border-white/20 text-white hover:border-[#E50914] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-[#151515]">
              <SafeImage
                src={FACILITIES[selectedIndex].image}
                alt={FACILITIES[selectedIndex].name}
                fallbackLabel={FACILITIES[selectedIndex].name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Previous facility"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + FACILITIES.length) % FACILITIES.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center bg-[#080808]/80 border border-white/20 text-white hover:border-[#E50914] transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next facility"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % FACILITIES.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center bg-[#080808]/80 border border-white/20 text-white hover:border-[#E50914] transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E50914]">
                  {FACILITIES[selectedIndex].dimensions} · {FACILITIES[selectedIndex].accessTier}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase text-white">
                  {FACILITIES[selectedIndex].name}
                </h3>
                <p className="mt-1 text-sm text-[#A1A1AA]">
                  {FACILITIES[selectedIndex].description}
                </p>
              </div>
              <span className="font-mono-num text-xs text-[#A1A1AA] shrink-0">
                {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                {String(FACILITIES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
