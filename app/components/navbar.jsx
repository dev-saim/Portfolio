"use client";

import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className="transition-all w-full duration-300 bg-transparent"
      style={{ zIndex: 1000 }}
    >
      <div className="flex w-full items-center justify-between py-5 px-2 md:px-4">
        {/* Logo: Center on small screens */}
        <div className="flex w-full justify-center md:justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/saim_logo2.png"
              alt="Saim Asif Logo"
              width={120}
              height={44}
              className="invert brightness-150"
            />
          </Link>
        </div>

        {/* Navigation Menu: hidden on small screens */}
        <ul
          className="hidden md:flex md:flex-row md:items-center space-x-2 md:space-x-4 text-xs md:text-sm"
          id="navbar-default"
        >
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#education">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </a>
          </li>
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#experience">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#skills">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#projects">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a className="block px-2 py-2 no-underline outline-none hover:no-underline" href="#contact">
              <div className="transition-colors text-white duration-300 hover:text-pink-600">
                CONTACT
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
