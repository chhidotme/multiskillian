// src/components/Footer.tsx

'use client';

import Link from 'next/link';
import { Youtube, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Multiskillian. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <Link
              href="https://www.youtube.com/@multiskillian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="https://twitter.com/YOUR_TWITTER"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
