import {Check} from 'lucide-react';
import {MEMBERSHIP_PLANS, type PlanId} from '../data/gymData';
import {ScrollReveal} from './ScrollReveal';

interface PricingProps {
  selectedPlan: PlanId;
  onSelectPlan: (planId: PlanId) => void;
}

export function Pricing({selectedPlan, onSelectPlan}: PricingProps) {
  return (
    <section id="membership" className="bg-[#080808] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
            Membership Pricing
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
            TRANSPARENT TIERS. ZERO COMPROMISE.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA]">
            Select your monthly tier below to prefill your membership registration. Every plan includes full climate-controlled training floor access during club hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;
            const isSelected = selectedPlan === plan.id;

            return (
              <ScrollReveal key={plan.id} delayMs={idx * 70}>
                <div
                  className={`relative flex h-full flex-col justify-between border p-8 transition-colors duration-200 ${
                    isPopular
                      ? 'border-[#E50914] bg-[#151515]'
                      : isSelected
                      ? 'border-white/40 bg-[#151515]'
                      : 'border-white/10 bg-[#151515]/65 hover:border-white/25'
                  }`}
                >
                  {isPopular && (
                    <div className="bg-[#E50914] px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase text-white self-start mb-4">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl font-extrabold uppercase tracking-wide text-white">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-medium text-[#A1A1AA]">
                        {plan.tagline}
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline gap-1.5 border-b border-white/10 pb-6">
                      <span className="font-display text-5xl font-extrabold tracking-tight text-white tabular-nums">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-sm text-[#A1A1AA]">/month</span>
                    </div>

                    <ul className="mt-6 space-y-3.5" aria-label={`${plan.name} plan features`}>
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-zinc-200"
                        >
                          <Check className="h-4 w-4 text-[#E50914] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-4 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isPopular
                          ? 'bg-[#E50914] hover:bg-[#ff1e29] text-white'
                          : 'bg-[#080808] hover:bg-[#E50914] text-white border border-white/20 hover:border-[#E50914]'
                      }`}
                    >
                      JOIN NOW
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
