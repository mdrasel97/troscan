"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
  ];

  return (
    <nav className="bg-background mt-2 fixed top-0 left-0 right-0 md:w-4/6 w-11/12 mx-auto shadow-md rounded z-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-3xl font-bold text-[#8d493a]">Troscan</span>
            </Link>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#8d493a] font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="hidden md:inline-block bg-[#8d493a] text-white px-6 font-bold py-3 rounded hover:bg-[#ad5744]"
            >
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white bg-[#8d493a] p-2 rounded focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 text-center space-y-4 bg-white dark:bg-gray-900 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-[#8d493a] text-white text-center px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
