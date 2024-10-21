// src/components/HeroSection.tsx

'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Multiskillian</h1>
        <p className="text-xl md:text-2xl mb-8">
          Your place for the Latest Tech Tools, Tips, and Innovations
        </p>
        <Link
          href="https://www.youtube.com/@multiskillian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Visit Our YouTube Channel
          </button>
        </Link>
      </div>
    </section>
  );
}
