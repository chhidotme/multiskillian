import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import YouTubeSection from '../components/YouTubeSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Multiskillian - Tech Insights, Tutorials, Reviews</title>
        <meta name="description" content="Multiskillian offers cutting-edge tech insights, tutorials, and reviews to empower tech enthusiasts and professionals." />
        <meta name="keywords" content="tech, tutorials, reviews, software, hardware, Multiskillian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <YouTubeSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
