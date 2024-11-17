"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="conatiner mx-auto px-10 bg-gradient-to-br from-teal-300 to-blue-900">
      <div className="flex items-center justify-between">
        <Link href="/">
        <Image src="/images/logo.png" alt="img" width={100} height={100}/>
        </Link>

        <div className="md:gap-6 flex items-center md:text-2xl">
          <Link href="/">Home</Link>
          <Link href="/Program">Program</Link>
          <Link href="/About">About Us </Link>
          <Link href="/OurTeam">Our Team </Link>
        </div>
        <div className="text-2xl">
        <Button variant="outline">Contact</Button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
