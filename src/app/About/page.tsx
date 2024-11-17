
import { CardTeacher } from "@/components/CardTeacher";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-900">
      <div className="pt-5 md:mx-60">
        <div className="mt-10 grid gap-10 md:mx-60 md:grid-cols-2 justify-between ">
          <div className="flex-col rounded-xl">
            <CardTeacher
              imageSrc={"/images/icon-cwo.png"}
              altText={"jpg"}
              name={"Tenor Verdonk"}
              description={"Founder"}
            />
          </div>
          <div className="flex flex-col text-center rounded-xl border-2 border-black">
            <h1 className="md:text-5xl">HISTORY</h1>
            <h1 className="pt-5 font-bold md:text-2xl">2013</h1>
            <p className="md:px-5 md:text-xl">
              Tenor Mc Bush founded an English study group consisting of
              students and the general public in Yogyakarta. This study group
              became the forerunner to the establishment of TENOR English
              Course.
            </p>
            <h1 className="pt-5 font-bold md:text-2xl">2015</h1>
            <p className="text-xl md:px-5">
              TENOR collaborated with several universities to design an English
              learning curriculum.
            </p>
            <h1 className="pt-5 font-bold md:text-2xl">2017</h1>
            <p className="text-xl md:px-5">
              TENOR introduced its first curriculum, which was designed in
              collaboration with several universities.
            </p>
            <h1 className="pt-5 font-bold md:text-2xl">2020</h1>
            <p className="text-xl md:px-5">
              TENOR launched a series of books called English@TENOR, which have
              received several awards
            </p>
          </div>
        </div>
        <div className="mx-1 my-10 flex-col rounded-xl border-2 border-black md:px-20 text-center">
          <h1 className="md:py-5 md:text-5xl">Our Vision</h1>
          <p className="pb-5 md:text-2xl">
            Our dream is to make Indonesian children part of global citizens,
            able to interact with people around the world and explore the world
            without being hindered by language.
          </p>
          <h1 className="md:py-5 md:text-5xl">Our Mision</h1>
          <p className="pb-5 md:text-2xl">
            We are committed to providing the best professional teachers, the
            best learning system and the best facilities. Our academic team is
            also required to always upgrade the learning curriculum we have, so
            that students will get the best results in learning English at TENOR
            English Cours.
          </p>
        </div>
      </div>
      <div className="mx-2 md:mt-10 grid gap-10 pb-10 md:mx-60 md:grid-cols-3">
        <CardTeacher
          imageSrc={"/images/icon-cwo.png"}
          altText={"jpg"}
          name={"Budi"}
          description={"Co Founder"}
        />
        <CardTeacher
          imageSrc={"/images/icon-cwe.png"}
          altText={"jpg"}
          name={"Siti"}
          description={"Co Founder"}
        />
        <CardTeacher
          imageSrc={"/images/icon-cwo.png"}
          altText={"jpg"}
          name={"Joko"}
          description={"Co Founder"}
        />
      </div>
    </div>
  );
};

export default About;
