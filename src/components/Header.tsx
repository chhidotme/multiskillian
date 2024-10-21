// src/components/Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Multiskillian Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-gray-900">Multiskillian</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300">
            About
          </Link>
          <Link href="#youtube" className="text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300">
            YouTube
          </Link>
        </nav>
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="#home" className="block text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="block text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#youtube" className="block text-gray-600 hover:text-teal-500 hover:underline font-medium transition duration-300" onClick={() => setIsOpen(false)}>
              YouTube
            </Link>
            
          </div>
        </nav>
      )}
    </header>
  );
}
