import {type FormEvent, useState} from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Youtube,
} from 'lucide-react';
import {ScrollReveal} from './ScrollReveal';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ContactErrors = Partial<Record<keyof ContactFormState, string>>;

export function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: 'Membership & Club Tour',
    message: '',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState<'street' | 'district'>('street');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: ContactErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message (at least 10 characters).';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-[#151515] py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E50914] mb-3">
            Contact &amp; Location
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-white [text-wrap:balance]">
            VISIT THE CLUB OR SPEAK WITH CONCIERGE.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <ScrollReveal>
              <div className="border border-white/10 bg-[#080808] p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Club Address
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-white">
                      42 Residency Road, Ashok Nagar, Bengaluru 560025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <Phone className="h-5 w-5 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Phone
                    </p>
                    <a
                      href="tel:+918041298800"
                      className="mt-1 inline-block text-sm sm:text-base text-white hover:text-[#E50914] transition-colors tabular-nums"
                    >
                      +91 80 4129 8800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <Mail className="h-5 w-5 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Email
                    </p>
                    <a
                      href="mailto:concierge@ironvaultfitness.in"
                      className="mt-1 inline-block text-sm sm:text-base text-white hover:text-[#E50914] transition-colors"
                    >
                      concierge@ironvaultfitness.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <Clock className="h-5 w-5 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Opening Hours
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Mon – Sat: 5:00 AM – 11:00 PM
                    </p>
                    <p className="text-sm text-[#A1A1AA]">
                      Sunday: 6:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IRON VAULT FITNESS on Instagram"
                      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IRON VAULT FITNESS on Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IRON VAULT FITNESS on YouTube"
                      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Architectural Google Maps Placeholder */}
            <ScrollReveal delayMs={80}>
              <div className="relative overflow-hidden border border-white/10 bg-[#080808] p-6 min-h-[220px] flex flex-col justify-between">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: mapZoom === 'street' ? '32px 32px' : '18px 18px',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 60% 45%, rgba(229,9,20,0.22), transparent 55%)',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1AA]">
                    Map View · {mapZoom === 'street' ? 'Residency Rd' : 'Central District'}
                  </span>
                  <div className="inline-flex border border-white/15 bg-[#151515]">
                    <button
                      type="button"
                      onClick={() => setMapZoom('street')}
                      className={`px-2.5 py-1 text-[11px] font-semibold uppercase cursor-pointer ${
                        mapZoom === 'street' ? 'bg-[#E50914] text-white' : 'text-[#A1A1AA]'
                      }`}
                    >
                      Street
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapZoom('district')}
                      className={`px-2.5 py-1 text-[11px] font-semibold uppercase cursor-pointer ${
                        mapZoom === 'district' ? 'bg-[#E50914] text-white' : 'text-[#A1A1AA]'
                      }`}
                    >
                      District
                    </button>
                  </div>
                </div>

                <div className="relative z-10 my-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#E50914] text-white shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold uppercase text-white">
                      IRON VAULT FITNESS FLAGSHIP
                    </p>
                    <p className="text-xs text-zinc-300">
                      Valet &amp; Basement Member Parking · 400m from MG Road Metro
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs text-[#A1A1AA]">
                  <span className="font-mono-num">12.9716° N, 77.6046° E</span>
                  <a
                    href="https://maps.google.com/?q=42+Residency+Road+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#E50914] transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#E50914]" />
                    <span>Open Directions</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal className="h-full">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="h-full border border-emerald-500/40 bg-[#080808] p-8 sm:p-10 flex flex-col justify-center"
                >
                  <CheckCircle2 className="h-8 w-8 text-emerald-400 mb-4" />
                  <h3 className="font-display text-3xl font-extrabold uppercase text-white">
                    MESSAGE PREPARED FOR CONCIERGE
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                    Thank you, {form.name}. Your inquiry regarding <span className="text-white font-medium">{form.subject}</span> has been validated on-screen. For immediate scheduling, call our front desk at +91 80 4129 8800.
                  </p>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          email: '',
                          subject: 'Membership & Club Tour',
                          message: '',
                        });
                      }}
                      className="border border-white/20 bg-[#151515] hover:border-[#E50914] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="h-full border border-white/10 bg-[#080808] p-6 sm:p-10 flex flex-col justify-between space-y-6"
                >
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                      BOOK A PRIVATE CLUB TOUR OR ASK A QUESTION
                    </h3>
                    <p className="mt-2 text-sm text-[#A1A1AA]">
                      Speak directly with our coaching director or schedule a complimentary floor walkthrough.
                    </p>

                    <div className="mt-6 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                          >
                            Your Name <span className="text-[#E50914]">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={form.name}
                            onChange={(e) => {
                              setForm({...form, name: e.target.value});
                              if (errors.name) setErrors({...errors, name: undefined});
                            }}
                            placeholder="Ananya Verma"
                            className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] ${
                              errors.name ? 'border-[#E50914]' : 'border-white/15'
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                          >
                            Email Address <span className="text-[#E50914]">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => {
                              setForm({...form, email: e.target.value});
                              if (errors.email) setErrors({...errors, email: undefined});
                            }}
                            placeholder="ananya@example.com"
                            className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] ${
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
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                        >
                          Inquiry Topic
                        </label>
                        <select
                          id="contact-subject"
                          value={form.subject}
                          onChange={(e) => setForm({...form, subject: e.target.value})}
                          className="w-full bg-[#151515] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914]"
                        >
                          <option value="Membership & Club Tour" className="bg-[#151515]">
                            Membership &amp; Club Tour
                          </option>
                          <option value="1-on-1 Personal Training" className="bg-[#151515]">
                            1-on-1 Personal Training
                          </option>
                          <option value="Corporate Athletic Passes" className="bg-[#151515]">
                            Corporate Athletic Passes
                          </option>
                          <option value="General Inquiry" className="bg-[#151515]">
                            General Inquiry
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2"
                        >
                          Message <span className="text-[#E50914]">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => {
                            setForm({...form, message: e.target.value});
                            if (errors.message) setErrors({...errors, message: undefined});
                          }}
                          placeholder="Tell us about your training goals or preferred day for a facility tour..."
                          className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#E50914] resize-none ${
                            errors.message ? 'border-[#E50914]' : 'border-white/15'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E50914]">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E50914] hover:bg-[#ff1e29] active:scale-[0.99] py-4 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    SEND MESSAGE
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
