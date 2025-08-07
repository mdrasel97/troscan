import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-10 pb-4">
      {/* Upper Logo */}
      <div className="flex justify-center mb-8">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Column - Nav Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Column - Socials */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-gray-700 dark:hover:text-white" />
            </a>
          </div>
          <p className="text-sm">MyLogo</p>
        </div>

        {/* Right Column - More Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">More Info</h3>
          <p className="text-sm">
            We provide reliable solutions to help your business grow online.
            Contact us for custom development or consultation.
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        © 2025, All rights reserved.
      </div>
    </footer>
  );
}
