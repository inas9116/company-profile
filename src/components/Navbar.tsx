"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-teal-300 to-blue-900 sticky z-10 top-0 bg-opacity-10">
      <nav className="container mx-auto md:px-10">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          </Link>
          <div className="flex items-center md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={30} color="white" />
            ) : (
              <GiHamburgerMenu size={30} color="white" />
            )}
          </div>
          <div
            className={`md:flex ${isOpen ? "block" : "hidden"} flex items-center md:gap-6 md:text-2xl`}
          >
            <Link href="/" className="text-white hover:text-teal-500">
              Home
            </Link>
            <Link href="/Program" className="text-white hover:text-teal-500">
              Program
            </Link>
            <Link href="/About" className="text-white hover:text-teal-500">
              About Us
            </Link>
            <Link href="/OurTeam" className="text-white hover:text-teal-500">
              Our Team
            </Link>
          </div>

          <div>
            <Button variant="outline" className="text-black md:text-2xl">
              Contact
            </Button>
          </div>
        </div>

        <div
          className={`flex flex-col items-center bg-blue-800 text-white md:hidden ${isOpen ? "block" : "hidden"}`}
        >
          <Link href="/" className="w-full py-2 text-center hover:bg-teal-500">
            Home
          </Link>
          <Link
            href="/Program"
            className="w-full py-2 text-center hover:bg-teal-500"
          >
            Program
          </Link>
          <Link
            href="/About"
            className="w-full py-2 text-center hover:bg-teal-500"
          >
            About Us
          </Link>
          <Link
            href="/OurTeam"
            className="w-full py-2 text-center hover:bg-teal-500"
          >
            Our Team
          </Link>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .nav-links {
              position: absolute;
              top: 60px;
              left: 0;
              background-color: #1e3a8a; /* Background color of mobile menu */
              width: 100%;
              flex-direction: column;
              align-items: center;
              padding: 10px 0;
            }

            .nav-links a {
              color: white;
              font-size: 18px;
              margin: 10px 0;
            }
          }
        `}</style>
      </nav>
    </nav>
  );
};

export default Navbar;
