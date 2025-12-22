'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/home" className="flex items-center">
          <Image
            src="/optimum-seniors-logo.svg"
            alt="OptimumSeniors Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <li>
            <Link href="/home" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/home#about" className="text-gray-700 hover:text-blue-700 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/home#services" className="text-gray-700 hover:text-blue-700 font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-blue-700 font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-700 hover:text-blue-700 font-medium">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/home#contact" className="text-gray-700 hover:text-blue-700 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

