// src/components/AboutSection.tsx

'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Multiskillian</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              Multiskillian is your go-to source for cutting-edge tech insights, tutorials, and reviews.
              Our mission is to empower tech enthusiasts and professionals with the knowledge and skills
              needed to thrive in the ever-evolving digital landscape.
            </p>
            <p className="text-lg">
              From the latest software tools to innovative hardware solutions, we cover it all.
              Join us on our YouTube channel for in-depth analyses, practical tips, and exciting tech discoveries.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/logo.png"
              alt="Multiskillian Brand"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
