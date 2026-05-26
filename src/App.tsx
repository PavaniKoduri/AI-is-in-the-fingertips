import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveShowcase from './components/InteractiveShowcase';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('lavender-breeze');

  // Multi-themed subtle background variables corresponding to selected ambient profile
  const themes = [
    { 
      id: 'lavender-breeze', 
      name: 'Lavender Breeze', 
      colors: 'bg-[#faf6ff]', 
      text: 'text-purple-600',
      gradient: 'from-[#d3adf7] to-[#e8d2ff]'
    },
    { 
      id: 'peach-dreams', 
      name: 'Peach Dreams', 
      colors: 'bg-[#fffae6]', 
      text: 'text-amber-600',
      gradient: 'from-[#ffd591] to-[#ffec3d]'
    },
    { 
      id: 'mint-garden', 
      name: 'Mint Garden', 
      colors: 'bg-[#f4ffeb]', 
      text: 'text-emerald-600',
      gradient: 'from-[#b7eb8f] to-[#eaff8f]'
    },
    { 
      id: 'sky-clouds', 
      name: 'Sky Clouds', 
      colors: 'bg-[#f0f8ff]', 
      text: 'text-blue-600',
      gradient: 'from-[#91d5ff] to-[#adc6ff]'
    }
  ];

  const activeThemeObj = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${activeThemeObj.colors} selection:bg-pink-150`}>
      {/* Dynamic top bar color matching active theme profile */}
      <div className={`h-[4px] w-full bg-gradient-to-r ${activeThemeObj.gradient} fixed top-0 left-0 z-51 transition-all duration-1000`} />

      {/* Main glass navigation top screen header */}
      <Navigation />

      {/* Hero layout with gradient heading and teaser visual elements */}
      <Hero />

      {/* Primary crafted features section with rounded minimal cards */}
      <Features />

      {/* Interactive visual sandbox playground workspace */}
      <InteractiveShowcase 
        currentTheme={currentTheme} 
        setTheme={setCurrentTheme} 
        themes={themes} 
      />

      {/* Philosophy split section offering deep core descriptions */}
      <AboutSection />

      {/* Feedback reviews block styled in soft pastel accents */}
      <Testimonials />

      {/* Clean elegant aesthetic footer grid */}
      <Footer />
    </div>
  );
}
