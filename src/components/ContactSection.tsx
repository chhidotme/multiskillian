// src/components/ContactSection.tsx

'use client';

import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl mb-8">Have questions or suggestions? We'd love to hear from you!</p>
        <div className="flex justify-center items-center space-x-4">
          <Mail className="h-6 w-6" />
          <a href="mailto:contact@multiskillian.com" className="text-lg hover:underline">
            contact@multiskillian.com
          </a>
        </div>
      </div>
    </section>
  );
}
