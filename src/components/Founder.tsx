import {Facebook, Instagram, Linkedin, Quote} from 'lucide-react';
import {FOUNDER_PROFILE} from '../data/gymData';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';

export function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#080808] py-24 md:py-32 border-t border-white/10"
    >
      {/* Subtle architectural red accent lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#E50914]/14 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#E50914]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Large Founder Portrait */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal className="w-full h-full">
              <div className="relative flex h-full w-full aspect-[3/4] lg:aspect-auto lg:min-h-[560px] flex-col justify-end overflow-hidden rounded-2xl border border-[#E50914]/30 bg-[#151515] shadow-[0_0_55px_-16px_rgba(229,9,20,0.4)]">
                <SafeImage
                  src={FOUNDER_PROFILE.image}
                  alt={FOUNDER_PROFILE.imageAlt}
                  loading="eager"
                  fallbackLabel={FOUNDER_PROFILE.name}
                  className="absolute inset-0 h-full w-full object-cover object-[center_top]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                />

                <div className="relative z-10 p-6 sm:p-7 flex items-end justify-between gap-4 border-t border-white/10 bg-[#080808]/75 backdrop-blur-sm">
                  <div>
                    <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#E50914]">
                      {FOUNDER_PROFILE.designation}
                    </p>
                    <p className="mt-1 font-display text-3xl font-extrabold uppercase tracking-wide text-white">
                      {FOUNDER_PROFILE.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={FOUNDER_PROFILE.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${FOUNDER_PROFILE.name} on Instagram`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#151515] text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={FOUNDER_PROFILE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${FOUNDER_PROFILE.name} on LinkedIn`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#151515] text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={FOUNDER_PROFILE.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${FOUNDER_PROFILE.name} on Facebook`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#151515] text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Name, Designation, Intro, Philosophy & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914]">
                Meet the Founder
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
                THE VISION BEHIND IRON VAULT
              </h2>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
                  {FOUNDER_PROFILE.name}
                </h3>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E50914]">
                  {FOUNDER_PROFILE.designation}
                </span>
              </div>
            </ScrollReveal>

            <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
              <ScrollReveal delayMs={60}>
                <div>
                  <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                    Personal Introduction
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-zinc-300">
                    {FOUNDER_PROFILE.introduction}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={100}>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                    Fitness Philosophy
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-[#A1A1AA]">
                    {FOUNDER_PROFILE.philosophy}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delayMs={140}>
              <figure className="mt-8 border border-[#E50914]/35 bg-[#151515] p-6 sm:p-8">
                <Quote className="h-6 w-6 text-[#E50914] mb-3" />
                <blockquote className="font-display text-2xl sm:text-3xl font-bold uppercase leading-snug tracking-wide text-white [text-wrap:balance]">
                  &ldquo;{FOUNDER_PROFILE.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1AA]">
                  — {FOUNDER_PROFILE.name}, {FOUNDER_PROFILE.designation}
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
