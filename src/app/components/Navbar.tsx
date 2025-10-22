"use client";

import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react"; // Assuming lucide-react is available or will be installed

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center bg-[#F9F5EC] px-4 py-4 shadow-md md:px-8 md:py-6 lg:px-12">
      <div className="flex w-full max-w-[1280px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            width={122}
            height={38}
            src="/logo.svg"
            alt="Plana AdHoc Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/demo" passHref>
            <Button title="Teste Agora!" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform bg-[#F9F5EC] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          <Link href="/demo" passHref>
            <Button title="Teste Agora!" onClick={toggleMenu} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
