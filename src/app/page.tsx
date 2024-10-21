// src/app/page.tsx

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import YouTubeSection from '../components/YouTubeSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <YouTubeSection />
      </main>
      <Footer />
    </div>
  );
}
