import CardComp from "./CardComp";
import Link from "next/link";
import { FC } from "react";
import { program } from "@/types/program";

interface ProgramSectionProps {
  programs: program[];
}

const ProgramSection: FC<ProgramSectionProps> = ({ programs }) => {
  return (
    <div>
      <div className="mx-1 mt-2 flex-col rounded-xl bg-gradient-to-br from-teal-300 to-blue-900 text-center md:mx-60 md:mt-10">
        <h1 className="py-5 text-xl md:text-6xl"> English Course</h1>
        <h2 className="text-base md:text-4xl">
          Professional teachers with the best teaching system and facilities
        </h2>
        <p className="text-sm md:px-20 md:py-5 md:text-2xl">
          Based on the language learning patterns of TENOR students in
          Indonesia, TENOR has specialized in developing new teaching systems
          and methods to help students become fluent in English more effectively
          and build their confidence in speaking English. Our 4 best programs
          that will help you become fluent in English.
        </p>
      </div>
      <div className="mx-1 mt-2 md:mx-60 md:mt-10">
        <div className="">
          <Link href="/Program" className="grid grid-cols-none md:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <CardComp key={index} program={program} />
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
