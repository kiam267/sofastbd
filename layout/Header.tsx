'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NavLinks } from '@/constants/content';
import { Button } from '@/components/ui/button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener(
        'click',
        handleClickOutside
      );
    }
    return () =>
      document.removeEventListener(
        'click',
        handleClickOutside
      );
  }, [isMenuOpen]);

  return (
    <header className="px-3 pt-3 pb-1 border-b border-gray-200 flex justify-between items-center h-20 relative">
      {/* Logo */}
      <div className="px-2">
        <Link href="/">
          <Image
            className="object-cover"
            src="/sofast.png"
            alt="Sofastbd Logo"
            width={170}
            height={170}
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6 text-gray-700 font-semibold">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hover:text-violet-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        type="button"
        variant="outline"
        className="lg:hidden p-2 text-gray-700 "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </Button>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md lg:hidden animate-slideDown"
        >
          <ul className="flex flex-col items-start p-4 space-y-3 text-gray-700 font-medium">
            {NavLinks.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                  className="block w-full py-2 px-2 rounded-md hover:bg-gray-100 transition font-bold hover:text-violet-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
export default Header;
