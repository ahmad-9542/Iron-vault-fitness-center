import {AnimatedCounter} from './AnimatedCounter';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';
import {ABOUT_IMAGE, GYM_STATS} from '../data/gymData';

const PHILOSOPHY_PILLARS = [
  {
    index: '01',
    title: 'Fitness Philosophy',
    description:
      'Progressive overload, disciplined movement mechanics, and measurable recovery cycles built for lifelong durability rather than short-term burnout.',
  },
  {
    index: '02',
    title: 'Professional Coaching',
    description:
      'Every floor coach holds accredited strength, biomechanics, or conditioning credentials, delivering real-time cueing and periodized programming.',
  },
  {
    index: '03',
    title: 'Modern Environment & Community',
    description:
      'Calibrated competition iron, acoustic-treated training zones, and a focused community of athletes who hold each other to an uncompromising standard.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-[#080808] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-4">
                About Iron Vault Fitness
              </p>
              <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
                WE DON&apos;T JUST BUILD BODIES. WE BUILD CONFIDENCE.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#A1A1AA]">
                Founded as a sanctuary for serious physical development, IRON VAULT FITNESS merges the precision of an elite athletic performance lab with the architectural calm of a private luxury club. Whether you are stepping onto a lifting platform for the first time or preparing for stage and podium competition, every square foot is engineered to elevate your focus.
              </p>
              <a
                href="#founder"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-white hover:text-[#E50914] transition-colors"
              >
                <span>Meet the Founder</span>
                <span aria-hidden="true" className="text-[#E50914]">→</span>
              </a>
            </ScrollReveal>

            <div className="mt-10 divide-y divide-white/10 border-t border-b border-white/10">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <ScrollReveal key={pillar.index} delayMs={idx * 70}>
                  <div className="py-5 flex gap-5 items-start">
                    <span className="font-mono-num text-xs font-semibold text-[#E50914] pt-1 shrink-0">
                      {pillar.index}.
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#A1A1AA]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <ScrollReveal className="w-full h-full">
              <div className="relative h-full min-h-[380px] lg:min-h-full overflow-hidden border border-white/10 bg-[#151515]">
                <SafeImage
                  src={ABOUT_IMAGE}
                  alt="IRON VAULT FITNESS luxury dark architectural strength training floor"
                  fallbackLabel="IRON VAULT TRAINING FLOOR"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E50914]">
                      Flagship Sanctuary
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold uppercase text-white">
                      24,000 Sq. Ft. Performance Floor
                    </p>
                  </div>
                  <p className="text-xs font-medium text-zinc-300">
                    Competition Spec · Climate Controlled
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#151515] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {GYM_STATS.map((stat, idx) => (
            <ScrollReveal key={stat.label} delayMs={idx * 60}>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-[#A1A1AA]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
