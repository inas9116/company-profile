import CardComp from "@/components/CardComp";
import Image from "next/image";


const About = () => {
  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-900">
      <div className="pt-5 md:mx-60">
        <div className="md:flex-rows-2 mx-1 flex rounded-xl border-2 border-black">
          <div className="flex-col pt-20">
            <Image
              src="/images/icon-cwo.png"
              alt="img"
              width={500}
              height={500}
            />
            <h1 className="text-center font-bold md:text-2xl">Tenor Mc Bush</h1>
            <h1 className="text-center md:text-xl">
              Founder of TENOR English Course
            </h1>
          </div>
          <div className="flex flex-col py-10 text-center">
            <h1 className="md:text-5xl">HISTORY</h1>
            <h1 className="py-5 font-bold md:text-2xl">2013</h1>
            <p className="md:px-36 md:text-xl">
              Tenor Mc Bush founded an English study group consisting of
              students and the general public in Yogyakarta. This study group
              became the forerunner to the establishment of TENOR English
              Course.
            </p>
            <h1 className="py-5 font-bold md:text-2xl">2015</h1>
            <p className="text-xl md:px-36">
              TENOR collaborated with several universities to design an English
              learning curriculum.
            </p>
            <h1 className="py-5 font-bold md:text-2xl">2017</h1>
            <p className="text-xl md:px-36">
              TENOR introduced its first curriculum, which was designed in
              collaboration with several universities.
            </p>
            <h1 className="py-5 font-bold md:text-2xl">2020</h1>
            <p className="text-xl md:px-36">
              TENOR launched a series of books called English@TENOR, which have
              received several awards
            </p>
          </div>
        </div>
        <div className="mx-1 mt-10 flex-col rounded-xl border-2 border-black px-20 text-center">
          <h1 className="py-5 md:text-5xl">Our Vision</h1>
          <p className="pb-5 md:text-2xl">
            Our dream is to make Indonesian children part of global citizens,
            able to interact with people around the world and explore the world
            without being hindered by language.
          </p>
          <h1 className="py-5 md:text-5xl">Our Mision</h1>
          <p className="pb-5 md:text-2xl">
            We are committed to providing the best professional teachers, the
            best learning system and the best facilities. Our academic team is
            also required to always upgrade the learning curriculum we have, so
            that students will get the best results in learning English at TENOR
            English Cours.
          </p>
        </div>
      </div>
      {/* <div className="mx-60 mt-10 grid grid-cols-3 gap-10">
        <CardComp />
        <CardComp />
        <CardComp program={undefined} />
      </div> */}
    </div>
  );
};

export default About;
