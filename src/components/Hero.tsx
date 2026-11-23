import {ArrowRight, ChevronDown} from 'lucide-react';
import {SafeImage} from './SafeImage';
import {HERO_IMAGE} from '../data/gymData';

interface HeroProps {
  onStartJourney: () => void;
  onExplorePrograms: () => void;
  onScrollToAbout: () => void;
}

export function Hero({onStartJourney, onExplorePrograms, onScrollToAbout}: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#080808] pt-16"
    >
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={HERO_IMAGE}
          alt="Athlete gripping a chalked steel barbell under dramatic overhead spotlight at IRON VAULT FITNESS"
          loading="eager"
          fallbackLabel="IRON VAULT FITNESS"
          className="h-full w-full object-cover object-center scale-[1.02]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#E50914]/15 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs sm:text-sm font-semibold tracking-[0.26em] uppercase text-[#E50914]">
              IRON VAULT FITNESS · TRAIN · TRANSFORM · THRIVE
            </p>

            <h1 className="font-display text-[clamp(3rem,6.2vw,5.5rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-white [text-wrap:balance]">
              UNLEASH YOUR INNER STRENGTH.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300">
              Stronger bodies. Sharper minds. Limitless possibilities. Your transformation starts here.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartJourney}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#E50914] hover:bg-[#ff1e29] active:scale-[0.99] px-7 py-4 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-white transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>START YOUR JOURNEY</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center border border-zinc-400/30 bg-[#151515]/75 hover:bg-white hover:text-[#080808] hover:border-white backdrop-blur-sm px-7 py-4 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-white transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              >
                EXPLORE PROGRAMS
              </button>
            </div>

            <div className="mt-12 pt-7 border-t border-white/10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs sm:text-sm text-[#A1A1AA]">
              <span>Calibrated Powerlifting Platforms</span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <span>Certified Performance Coaches</span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <span>Infrared Sauna &amp; Cold Plunge</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl border border-zinc-400/20 bg-[#080808]/80 p-2 shadow-[0_0_70px_-18px_rgba(229,9,20,0.55)] backdrop-blur-sm">
              <img
                src="/images/iron-vault-logo.png"
                alt="IRON VAULT FITNESS official metallic A emblem and brand lockup"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onScrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] p-2"
      >
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce text-[#E50914]" />
      </button>
    </section>
  );
}
