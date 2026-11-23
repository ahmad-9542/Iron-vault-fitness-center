import {useCallback, useEffect, useState} from 'react';
import {ArrowUp} from 'lucide-react';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Facilities} from './components/Facilities';
import {Footer} from './components/Footer';
import {Founder} from './components/Founder';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {Pricing} from './components/Pricing';
import {Programs} from './components/Programs';
import {Registration} from './components/Registration';
import {Testimonials} from './components/Testimonials';
import {Trainers} from './components/Trainers';
import {type PlanId, PROGRAMS} from './data/gymData';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('pro');
  const [selectedGoal, setSelectedGoal] = useState<string>(PROGRAMS[0].title);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, []);

  const handleSelectPlanFromPricing = useCallback(
    (planId: PlanId) => {
      setSelectedPlan(planId);
      scrollToSection('registration');
    },
    [scrollToSection]
  );

  const handleSelectProgramForRegistration = useCallback(
    (programTitle: string) => {
      setSelectedGoal(programTitle);
      scrollToSection('registration');
    },
    [scrollToSection]
  );

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar
        onNavigate={scrollToSection}
        onJoinNow={() => scrollToSection('registration')}
      />

      <main>
        <Hero
          onStartJourney={() => scrollToSection('registration')}
          onExplorePrograms={() => scrollToSection('programs')}
          onScrollToAbout={() => scrollToSection('about')}
        />

        <About />

        <Founder />

        <Programs onSelectProgramForRegistration={handleSelectProgramForRegistration} />

        <Trainers />

        <Facilities />

        <Pricing
          selectedPlan={selectedPlan}
          onSelectPlan={handleSelectPlanFromPricing}
        />

        <Registration
          selectedPlan={selectedPlan}
          selectedGoal={selectedGoal}
          onPlanChange={setSelectedPlan}
        />

        <Testimonials />

        <Contact />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectProgramGoal={handleSelectProgramForRegistration}
      />

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-[#151515]/95 text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
