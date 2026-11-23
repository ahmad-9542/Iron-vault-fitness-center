import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {BrandLogo} from './BrandLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onJoinNow: () => void;
}

const NAV_LINKS = [
  {id: 'home', label: 'HOME'},
  {id: 'about', label: 'ABOUT'},
  {id: 'founder', label: 'FOUNDER'},
  {id: 'programs', label: 'PROGRAMS'},
  {id: 'trainers', label: 'TRAINERS'},
  {id: 'facilities', label: 'FACILITIES'},
  {id: 'membership', label: 'MEMBERSHIP'},
  {id: 'contact', label: 'CONTACT'},
];

export function Navbar({onNavigate, onJoinNow}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      const scrollPos = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-[#080808]/85 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          aria-label="IRON VAULT FITNESS Home"
          className="whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-sm"
        >
          <BrandLogo size="sm" />
        </a>

        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative py-1 text-xs font-semibold tracking-[0.14em] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-sm ${
                  isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#E50914] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onJoinNow();
            }}
            className="hidden sm:inline-flex items-center justify-center bg-[#E50914] hover:bg-[#ff1e29] active:scale-[0.98] text-white text-xs font-bold tracking-[0.14em] px-5 py-2.5 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            JOIN NOW
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-[#151515] text-white hover:border-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#080808]/98 backdrop-blur-xl px-4 py-5">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`flex items-center justify-between px-3 py-3 text-sm font-semibold tracking-[0.12em] transition-colors ${
                    isActive
                      ? 'text-white bg-[#151515]'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-[#151515]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-6 bg-[#E50914]" aria-hidden="true" />}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinNow();
              }}
              className="w-full bg-[#E50914] hover:bg-[#ff1e29] text-white text-sm font-bold tracking-[0.14em] py-3.5 transition-colors cursor-pointer"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
