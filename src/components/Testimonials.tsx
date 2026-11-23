import {useState} from 'react';
import {ChevronLeft, ChevronRight, Quote, Star} from 'lucide-react';
import {TESTIMONIALS} from '../data/gymData';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="bg-[#080808] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
              Member Transformations
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
              PROVEN RESULTS INSIDE THESE WALLS.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-[#151515] text-white hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-mono-num text-xs text-[#A1A1AA] px-2">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-[#151515] text-white hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#151515] items-stretch">
            <div className="lg:col-span-4 relative aspect-square lg:aspect-auto min-h-[300px] overflow-hidden bg-[#080808]">
              <SafeImage
                key={current.id}
                src={current.image}
                alt={`${current.name} transformation portrait`}
                fallbackLabel={current.name}
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#151515]/50"
              />
            </div>

            <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({length: current.rating}).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#E50914] text-[#E50914]"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E50914]">
                    {current.outcome}
                  </span>
                </div>

                <Quote className="mt-6 h-8 w-8 text-white/15" />

                <blockquote className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-100">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold uppercase text-white">
                    {current.name}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A1A1AA]">
                    {current.role} · {current.program}
                  </p>
                </div>

                <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
                  {TESTIMONIALS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`View story from ${item.name}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 transition-all cursor-pointer ${
                        idx === activeIndex
                          ? 'w-8 bg-[#E50914]'
                          : 'w-4 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
