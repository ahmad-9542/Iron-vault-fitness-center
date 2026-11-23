import {Instagram, Linkedin, Twitter} from 'lucide-react';
import {TRAINERS} from '../data/gymData';
import {SafeImage} from './SafeImage';
import {ScrollReveal} from './ScrollReveal';

export function Trainers() {
  return (
    <section id="trainers" className="bg-[#080808] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
            Professional Trainers
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
            COACHED BY PROVEN SPECIALISTS.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA]">
            Train alongside certified strength coaches, physique specialists, CrossFit competitors, and mobility practitioners dedicated to measurable progression.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer, idx) => (
            <ScrollReveal key={trainer.id} delayMs={idx * 65}>
              <article className="group flex h-full flex-col border border-white/10 bg-[#151515] transition-colors duration-200 hover:border-white/25">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#101010]">
                  <SafeImage
                    src={trainer.image}
                    alt={`${trainer.name} — ${trainer.role} at IRON VAULT FITNESS`}
                    fallbackLabel={trainer.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA]">
                      <span className="text-[#E50914] font-semibold uppercase tracking-wider">
                        {trainer.experience}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{trainer.credentials}</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {trainer.name}
                    </h3>

                    <p className="text-sm font-medium text-zinc-300">{trainer.role}</p>

                    <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                      {trainer.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#A1A1AA]">Connect</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={trainer.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${trainer.name} on Instagram`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href={trainer.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${trainer.name} on X`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={trainer.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${trainer.name} on LinkedIn`}
                        className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
