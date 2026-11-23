import {useEffect, useState} from 'react';
import {ArrowRight, Clock, Layers, X} from 'lucide-react';
import {PROGRAMS, type ProgramItem} from '../data/gymData';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';

interface ProgramsProps {
  onSelectProgramForRegistration: (programTitle: string) => void;
}

const CATEGORIES = ['All', 'Strength', 'Conditioning', 'Coaching & Mobility'] as const;

export function Programs({onSelectProgramForRegistration}: ProgramsProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProgram(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredPrograms =
    activeCategory === 'All'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="bg-[#151515] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
              Workout Programs
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
              ENGINEERED FOR EVERY TRAINING DISCIPLINE.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter workout programs"
            className="inline-flex flex-wrap items-center gap-1 bg-[#080808] p-1 border border-white/10 self-start lg:self-auto"
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] ${
                    active
                      ? 'bg-[#E50914] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, idx) => (
            <ScrollReveal key={program.id} delayMs={idx * 50}>
              <article className="group flex h-full flex-col border border-white/10 bg-[#080808] transition-colors duration-200 hover:border-white/25">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101010]">
                  <SafeImage
                    src={program.image}
                    alt={`${program.title} training session at IRON VAULT FITNESS`}
                    fallbackLabel={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA]">
                      <span className="text-[#E50914] font-semibold uppercase tracking-wider">
                        {program.difficulty}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{program.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{program.schedule}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {program.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white hover:text-[#E50914] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] py-1"
                    >
                      <span>EXPLORE MORE</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="program-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="relative w-full max-w-2xl border border-white/15 bg-[#080808] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close program details"
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center bg-[#080808]/85 border border-white/20 text-white hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#151515] relative">
              <SafeImage
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fallbackLabel={selectedProgram.title}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#A1A1AA]">
                <span className="text-[#E50914] font-bold uppercase tracking-wider">
                  {selectedProgram.difficulty}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#E50914]" />
                  {selectedProgram.duration}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#E50914]" />
                  {selectedProgram.schedule}
                </span>
              </div>

              <h3
                id="program-modal-title"
                className="mt-3 font-display text-3xl sm:text-4xl font-extrabold uppercase text-white"
              >
                {selectedProgram.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                {selectedProgram.fullOverview}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/10 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Primary Focus
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-white">
                    {selectedProgram.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#E50914] font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Equipment & Coaching
                  </p>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {selectedProgram.equipment}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#A1A1AA] hover:text-white border border-white/15 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProgram.title;
                    setSelectedProgram(null);
                    onSelectProgramForRegistration(title);
                  }}
                  className="bg-[#E50914] hover:bg-[#ff1e29] px-6 py-3 text-xs font-bold tracking-[0.14em] uppercase text-white transition-colors cursor-pointer"
                >
                  Enroll With This Goal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
