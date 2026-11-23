import {Facebook, Instagram, Youtube} from 'lucide-react';
import {PROGRAMS} from '../data/gymData';
import {BrandLogo} from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectProgramGoal: (programTitle: string) => void;
}

const QUICK_LINKS = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About Us'},
  {id: 'founder', label: 'Founder'},
  {id: 'programs', label: 'Programs'},
  {id: 'trainers', label: 'Trainers'},
  {id: 'facilities', label: 'Facilities'},
  {id: 'membership', label: 'Membership'},
  {id: 'contact', label: 'Contact'},
];

export function Footer({onNavigate, onSelectProgramGoal}: FooterProps) {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              aria-label="IRON VAULT FITNESS Home"
              className="inline-block"
            >
              <BrandLogo size="lg" showSubtext />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
              An international-standard athletic training sanctuary built for disciplined strength, hypertrophy, conditioning, and restorative recovery.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#A1A1AA] hover:border-[#E50914] hover:text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMS.map((program) => (
                <li key={program.id}>
                  <a
                    href="#programs"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectProgramGoal(program.title);
                    }}
                    className="text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-4">
              Club Concierge
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              <li>42 Residency Road, Ashok Nagar</li>
              <li>Bengaluru, KA 560025</li>
              <li className="pt-1">
                <a href="tel:+918041298800" className="text-white hover:text-[#E50914] tabular-nums">
                  +91 80 4129 8800
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@ironvaultfitness.in"
                  className="text-white hover:text-[#E50914]"
                >
                  concierge@ironvaultfitness.in
                </a>
              </li>
              <li className="pt-1 text-xs">Mon–Sat: 5 AM – 11 PM · Sun: 6 AM – 9 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <p>&copy; {new Date().getFullYear()} IRON VAULT FITNESS. All rights reserved.</p>
          <p>Train · Transform · Thrive</p>
        </div>
      </div>
    </footer>
  );
}
