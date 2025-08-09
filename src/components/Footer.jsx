import Link from "next/link";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8d493a] min-h-screen pt-10 pb-4">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div>
          {/* Upper Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Troscan
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 justify-between md:grid-cols-3 gap-10 px-6">
            {/* Left Column - Nav Links */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Sitemap</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Projects" className="hover:text-blue-600">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-blue-600">
                    News
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
                <a
                  href="https://web.facebook.com/mollarasel24/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rasel-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 hover:text-blue-400" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 hover:text-pink-500" />
                </a>
                <a
                  href="https://github.com/mdrasel97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 hover:text-gray-700 dark:hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right Column - More Info */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">More Info</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="hover:text-blue-600">
                    License
                  </Link>
                </li>
                <li>
                  <Link href="/Projects" className="hover:text-blue-600">
                    Grainient
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-blue-600">
                    Inspirux
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600">
                    Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom line */}
      <div className="text-center mt-8 text-sm text-gray-300 dark:text-gray-300">
        © 2025, All rights reserved.
      </div>
    </footer>
  );
}
