// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card";
//   import React, { FC } from "react";
//   import Image from "next/image";
//   import { program } from "@/types/program";
  
//   interface CardProgramProps {
//     program: program;
//   }
  
//   const CardProgram: FC<CardProgramProps> = ({ program }) => {
//     return (
//       <Card className="bg-gradient-to-br from-teal-300 to-blue-900">
//         <CardHeader>
//           <div className="relative h-[220px] w-full">
//             <Image src={program.thumbnail} alt="thumbnail" fill className="" />
//           </div>
//         </CardHeader>
//         <div className="flex justify-center">
//           <CardTitle>{program.title}</CardTitle>
//         </div>
//         <div className="flex justify-center font-black md:text-xl">
//           <CardDescription>{program.description}</CardDescription>
//         </div>
//         <CardContent>{program.content}</CardContent>
//         <div className="flex justify-center md:text-xl">
//           <CardFooter>{}</CardFooter>
//         </div>
//       </Card>
//     );
//   };
  
//   export default CardProgram;
  