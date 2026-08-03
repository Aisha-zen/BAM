import React from "react";
import { Instagram, X } from "lucide-react";
function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="w-[95%] mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-xl font-light">MabArchitect</h2>
          <p className="text-gray-500 mt-2 max-w-sm">
            Award-winning architectural studio creating timeless,
            functional, and innovative spaces.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3">Quick Links</p>

          <div className="flex flex-col gap-2 text-gray-600">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-3">Connect</p>

          <div className="flex gap-4">
            Instagram
            LinkedIn
            Behance
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MabArchitect. All rights reserved.</p>

        <p>Designed with precision.</p>
      </div>
    </footer>
  );
}

export default Footer;