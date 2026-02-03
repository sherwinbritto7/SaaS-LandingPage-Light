"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 w-full">
      {/* Top Banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center hover:gap-2 transition-all cursor-pointer">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Main Navbar */}
      {/* Dynamic Background Class: Turns white when menu is open */}
      <div
        className={`py-5 relative transition-colors duration-300 ${
          isMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-1 text-black/80 hover:text-black transition-colors z-50"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center font-medium">
              <a href="#" className="hover:text-black transition-colors">
                About
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Customers
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Updates
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Help
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/80 transition-all">
                Get for free
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-black/5 p-6 md:hidden animate-in slide-in-from-top-2 duration-300 h-screen pb-40 overflow-y-auto">
            {/* Note: Added h-screen and overflow-y-auto to ensure it covers the screen properly on small devices */}
            <nav className="flex flex-col gap-4 text-lg font-medium text-black/80">
              <a
                href="#"
                className="py-2 border-b border-black/5 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#"
                className="py-2 border-b border-black/5 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#"
                className="py-2 border-b border-black/5 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                Customers
              </a>
              <a
                href="#"
                className="py-2 border-b border-black/5 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                Updates
              </a>
              <a
                href="#"
                className="py-2 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                Help
              </a>

              <button
                className="mt-4 bg-black text-white w-full py-3 rounded-lg font-medium tracking-tight hover:scale-[1.02] transition-transform shadow-lg"
                onClick={toggleMenu}
              >
                Get for free
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
