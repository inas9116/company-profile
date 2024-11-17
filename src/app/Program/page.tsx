
import Image from "next/image";
import React from "react";

const Program = () => {
  
  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-900">
      <div className="md:mx-60">
        <div className="grid justify-center py-10 text-center rounded-xl border-2 border-solid border-black">
          <h1 className="md:text-6xl">Our Learning System</h1>
          <p className="md:mx-32 py-5 md:text-2xl">
            Students learn from the best teachers using industry-leading course
            materials. At home, they can repeat the lessons with our online
            learning system. They can also practice new skills to build
            confidence. Weekly activities such as Life Club also provide a space
            for children to have an English-speaking environment outside the
            classroom. In addition, at the end of the course, students will
            receive a certificate as an assessment of their progress.
          </p>
        </div>
        <div className="md:my-10 grid md:grid-cols-2 md:gap-20">
          <div className="flex-col rounded-xl border-2 border-solid border-black text-center">
            <Image
              src="/kids2.jpg"
              alt="jpg"
              width={500}
              height={500}
              className="justify-self-center rounded-xl sm:w-250 sm:h250"
            />
            <div className="md:p-10">
              <h1 className="md:text-4xl font-bold">TENOR KIDS</h1>
              <p className="pt-5 md:text-2xl">
                Tenor Kids is a comprehensive eight-level English course for
                elementary school children, based on a syllabus that focuses on
                English language skills. Children will enjoy a fun course with
                the adventures of cute animated characters, and they will be
                immersed in a natural English-speaking environment. Each student
                will get exclusive access to Grammar Pro® so they can learn
                English grammar anywhere and anytime.
              </p>
            </div>
          </div>
          <div className="flex-col rounded-xl border-2 border-solid border-black text-center">
            <Image
              src="/teen2.jpg"
              alt="jpg"
              width={500}
              height={500}
              className="justify-self-center rounded-xl"
            />
            <div className="md:p-10">
              <h1 className="md:text-4xl font-bold">TENOR TEEN</h1>
              <p className="pt-5 md:text-2xl">
                Tenor Teen is a comprehensive English course specifically
                designed by TENOR for secondary school students. The course
                syllabus revolves around interesting real-world topics and is
                aligned with the national English curriculum, empowering
                students to excel both in and out of school. Each student will
                receive exclusive access to Grammar Pro® so they can learn
                English grammar anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-20">
          <div className="flex-col rounded-xl border-2 border-solid border-black text-center mb-10">
            <Image
              src="/adult.jpg"
              alt="jpg"
              width={500}
              height={500}
              className="justify-self-center rounded-xl"
            />
            
            <div className="md:p-10">
              <h1 className="md:text-4xl font-bold">TENOR ADULT</h1>
              <p className="pt-5 md:text-2xl">
                Tenor Adults uses a learning system that allows you to learn
                English used in everyday life which is also supported by online
                English learning application devices. This system is a learning
                cycle containing "learn-try-apply-certify" certification which
                aims to help students build and strengthen their confidence in
                English communication.
              </p>
            </div>
          </div>
          <div className="flex-col rounded-xl border-2 border-solid border-black text-center mb-10">
            <Image
              src="/business.jpg"
              alt="jpg"
              width={500}
              height={500}
              className="justify-self-center rounded-xl"
            />
            <div className="md:p-10">
              <h1 className="md:text-4xl font-bold">TENOR BUSINESS</h1>
              <p className="pt-5 md:text-2xl">
                Whatever your business needs, it starts with your teams talking.
                combines the best teachers with the most advanced technology. We
                create a highly interactive online learning experience that
                simulates real-life business scenarios, just like learning in a
                country where the language is spoken.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Program;
