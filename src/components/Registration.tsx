import {type FormEvent, useEffect, useState} from 'react';
import {CheckCircle2, AlertCircle, RotateCcw} from 'lucide-react';
import {MEMBERSHIP_PLANS, PROGRAMS, type PlanId} from '../data/gymData';
import {ScrollReveal} from './ScrollReveal';

interface RegistrationProps {
  selectedPlan: PlanId;
  selectedGoal: string;
  onPlanChange: (plan: PlanId) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  plan: PlanId;
  fitnessGoal: string;
  preferredTime: string;
  acceptedTerms: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const TIME_SLOTS = [
  'Early Morning (5:30 AM – 8:30 AM)',
  'Morning (8:30 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 4:30 PM)',
  'Evening Peak (4:30 PM – 8:30 PM)',
  'Late Night (8:30 PM – 11:00 PM)',
];

const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

export function Registration({selectedPlan, selectedGoal, onPlanChange}: RegistrationProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    plan: selectedPlan,
    fitnessGoal: selectedGoal || PROGRAMS[0].title,
    preferredTime: TIME_SLOTS[0],
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<FormState | null>(null);

  useEffect(() => {
    setForm((prev) => ({...prev, plan: selectedPlan}));
  }, [selectedPlan]);

  useEffect(() => {
    if (selectedGoal) {
      setForm((prev) => ({...prev, fitnessGoal: selectedGoal}));
    }
  }, [selectedGoal]);

  const validate = (state: FormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!state.fullName.trim() || state.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!state.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(state.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const cleanedPhone = state.phone.replace(/[\s\-().+]/g, '');
    if (!state.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10,15}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Enter a valid 10 to 15 digit phone number.';
    }

    const ageNum = Number(state.age);
    if (!state.age.trim()) {
      nextErrors.age = 'Age is required.';
    } else if (!Number.isInteger(ageNum) || ageNum < 14 || ageNum > 90) {
      nextErrors.age = 'Please enter a valid age between 14 and 90.';
    }

    if (!state.gender) {
      nextErrors.gender = 'Please select a gender option.';
    }

    if (!state.fitnessGoal) {
      nextErrors.fitnessGoal = 'Please select a primary fitness goal.';
    }

    if (!state.preferredTime) {
      nextErrors.preferredTime = 'Please select a preferred training window.';
    }

    if (!state.acceptedTerms) {
      nextErrors.acceptedTerms = 'You must agree to the club terms and waiver to continue.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedRecord({...form});
    }
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setErrors({});
    setForm((prev) => ({
      ...prev,
      fullName: '',
      email: '',
      phone: '',
      age: '',
      acceptedTerms: false,
    }));
  };

  const activePlanObj =
    MEMBERSHIP_PLANS.find((p) => p.id === (submittedRecord?.plan ?? form.plan)) ||
    MEMBERSHIP_PLANS[1];

  return (
    <section
      id="registration"
      className="bg-[#151515] py-24 md:py-32 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
                Membership Registration
              </p>
              <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
                CLAIM YOUR PLACE ON THE FLOOR.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A1A1AA]">
                Complete your athlete profile below. Selecting a membership tier automatically locks in your preferred plan and training window for club onboarding.
              </p>

              <div className="mt-8 border border-white/10 bg-[#080808] p-6">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Selected Tier
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold uppercase text-white">
                      {activePlanObj.name} PLAN
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-3xl font-extrabold text-[#E50914] tabular-nums">
                      {activePlanObj.priceFormatted}
                    </span>
                    <span className="block text-xs text-[#A1A1AA]">per month</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {activePlanObj.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="text-[#E50914] font-bold">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal>
              {submittedRecord ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="border border-emerald-500/40 bg-[#080808] p-8 sm:p-10"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                        Registration Validated
                      </p>
                      <h3 className="mt-1 font-display text-3xl font-extrabold uppercase text-white">
                        WELCOME TO IRON VAULT, {submittedRecord.fullName.toUpperCase()}.
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                        Your membership application summary has been validated and prepared on-screen. Present this confirmation at the IRON VAULT FITNESS front desk or via concierge to finalize your club pass activation.
                      </p>
                    </div>
                  </div>

                  <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/10 py-6 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                        Selected Plan
                      </dt>
                      <dd className="mt-1 font-semibold text-white">
                        {activePlanObj.name} ({activePlanObj.priceFormatted}/month)
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                        Fitness Goal
                      </dt>
                      <dd className="mt-1 font-semibold text-white">
                        {submittedRecord.fitnessGoal}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                        Preferred Window
                      </dt>
                      <dd className="mt-1 font-semibold text-white">
                        {submittedRecord.preferredTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                        Contact Details
                      </dt>
                      <dd className="mt-1 font-semibold text-white">
                        {submittedRecord.email} · {submittedRecord.phone}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 border border-white/20 bg-[#151515] hover:border-white/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Submit Another Registration</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="border border-white/10 bg-[#080808] p-6 sm:p-10 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="reg-fullname"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Full Name <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="reg-fullname"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({...form, fullName: e.target.value});
                          if (errors.fullName) setErrors({...errors, fullName: undefined});
                        }}
                        placeholder="e.g. Rohan Sharma"
                        aria-invalid={Boolean(errors.fullName)}
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] transition-colors ${
                          errors.fullName ? 'border-[#E50914]' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Email <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({...form, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: undefined});
                        }}
                        placeholder="rohan@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] transition-colors ${
                          errors.email ? 'border-[#E50914]' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Phone Number <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="reg-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({...form, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: undefined});
                        }}
                        placeholder="+91 98765 43210"
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] transition-colors ${
                          errors.phone ? 'border-[#E50914]' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-age"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Age <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="reg-age"
                        type="number"
                        min={14}
                        max={90}
                        value={form.age}
                        onChange={(e) => {
                          setForm({...form, age: e.target.value});
                          if (errors.age) setErrors({...errors, age: undefined});
                        }}
                        placeholder="26"
                        aria-invalid={Boolean(errors.age)}
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] transition-colors tabular-nums ${
                          errors.age ? 'border-[#E50914]' : 'border-white/15'
                        }`}
                      />
                      {errors.age && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.age}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-gender"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Gender <span className="text-[#E50914]">*</span>
                      </label>
                      <select
                        id="reg-gender"
                        value={form.gender}
                        onChange={(e) => setForm({...form, gender: e.target.value})}
                        className="w-full bg-[#151515] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                      >
                        {GENDERS.map((g) => (
                          <option key={g} value={g} className="bg-[#151515]">
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="reg-plan"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Membership Plan <span className="text-[#E50914]">*</span>
                      </label>
                      <select
                        id="reg-plan"
                        value={form.plan}
                        onChange={(e) => {
                          const nextPlan = e.target.value as PlanId;
                          setForm({...form, plan: nextPlan});
                          onPlanChange(nextPlan);
                        }}
                        className="w-full bg-[#151515] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                      >
                        {MEMBERSHIP_PLANS.map((plan) => (
                          <option key={plan.id} value={plan.id} className="bg-[#151515]">
                            {plan.name} – {plan.priceFormatted}/month
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="reg-goal"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Fitness Goal <span className="text-[#E50914]">*</span>
                      </label>
                      <select
                        id="reg-goal"
                        value={form.fitnessGoal}
                        onChange={(e) => setForm({...form, fitnessGoal: e.target.value})}
                        className="w-full bg-[#151515] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#151515]">
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="reg-time"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                      >
                        Preferred Training Time <span className="text-[#E50914]">*</span>
                      </label>
                      <select
                        id="reg-time"
                        value={form.preferredTime}
                        onChange={(e) => setForm({...form, preferredTime: e.target.value})}
                        className="w-full bg-[#151515] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#151515]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.acceptedTerms}
                        onChange={(e) => {
                          setForm({...form, acceptedTerms: e.target.checked});
                          if (errors.acceptedTerms) {
                            setErrors({...errors, acceptedTerms: undefined});
                          }
                        }}
                        className="mt-0.5 h-4 w-4 accent-[#E50914] bg-[#151515] border-white/25 cursor-pointer"
                      />
                      <span className="text-xs leading-relaxed text-[#A1A1AA]">
                        I agree to the IRON VAULT FITNESS club rules, safety orientation guidelines, and membership terms &amp; conditions.
                      </span>
                    </label>
                    {errors.acceptedTerms && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.acceptedTerms}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E50914] hover:bg-[#ff1e29] active:scale-[0.99] py-4 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    COMPLETE MEMBERSHIP REGISTRATION
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
