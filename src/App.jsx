import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import PermissionSystem from './components/PermissionSystem';
import InterfaceShowcase from './components/InterfaceShowcase';
import UseCases from './components/UseCases';
import SkillEcosystem from './components/SkillEcosystem';
import Community from './components/Community';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('EN');
  const [theme, setTheme] = useState('dark');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'EN' ? 'CN' : 'EN');

  // Prop drilling state to children components for translation maps would happen here.
  // We'll pass `lang` down to components to render EN/CN content.

  return (
    <div className="app-container">
      <Navbar lang={lang} toggleLang={toggleLang} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero lang={lang} />
        <TrustLogos lang={lang} />
        <HowItWorks lang={lang} />
        <FeaturesGrid lang={lang} />
        <PermissionSystem lang={lang} />
        <InterfaceShowcase lang={lang} />
        <UseCases lang={lang} />
        <SkillEcosystem lang={lang} />
        <Community lang={lang} />
        <Pricing lang={lang} />
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
