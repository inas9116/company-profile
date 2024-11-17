import Link from "next/link";
import { Button } from "./ui/button";


const HeroSection = () => {
  return (
    <section className="container mx-auto">
      <div className="relative h-screen md:w-full">
        <video
          className="absolute -z-10 h-full w-full rounded-xl object-cover opacity-100"
          autoPlay
          muted
          loop
          src="/Background.mp4"
        ></video>
        <div className="flex md:justify-end pt-14 md:mr-10">
          <Button asChild className="bg-blue-500 bg-opacity-50 rounded-xl md:text-3xl">
            <Link href="https://www.efset.org/" passHref target="_blank">
            <p>Check your english level here</p>
            </Link>
          </Button>
        </div>
        <div className="md:mt-50 mt-4 flex flex-col items-center justify-center gap-4">
          <h1 className="bg-gradient-to-br from-teal-300 to-blue-900 bg-clip-text text-transparent text pt-60 text-2xl font-bold md:text-8xl pb-2">
            Make English Part of your life
          </h1>
          <p className="text-center md:text-3xl bg-white bg-opacity-40 px-2">
            more than just opening a window to the world,we will guide you to
            explore the world
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
