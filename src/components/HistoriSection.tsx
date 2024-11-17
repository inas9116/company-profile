import { CardTeacher } from "./CardTeacher";



const HistorySection = () => {
  return (
    <div>
      <div className="mx-1 md:mx-60 mt-10 rounded-xl">
        <div className="flex w-full rounded-xl border-2 border-black bg-gradient-to-br from-teal-300 to-blue-900">
          <div className="flex-col justify-items-center md:mx-60 mt-10">
          <h1 className="md:text-4xl font-bold">
            TENOR English Course
          </h1>
          <p className="text-sm md:text-3xl md:mt-10 p-5 text-center">TENOR is the best English school in the world, we have a mission to
            make everyone a global citizen, so that there will be interaction
            without barriers. Therefore, we are determined to provide language
            training that combines 3 elements of professional teachers, the best
            curriculum and the best facilities.
            </p>
            
          </div>
        </div>
        <div className="mt-10 border-2 border-black rounded-xl bg-gradient-to-br from-teal-300 to-blue-900">
          <div className="flex my-10 justify-self-center">
          <h1 className="md:text-4xl font-bold">Our Teachers</h1>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            <CardTeacher imageSrc={"/images/tc1.png"} altText={"jpg"} name={"Dian Sastro"} description={"Kids Teacher"} />
            <CardTeacher imageSrc={"/images/tc2.jpg"} altText={"jpg"} name={"Duta Modjo"} description={"Teen Teacher"} />
            <CardTeacher imageSrc={"/images/tc3.jpg"} altText={"jpg"} name={"Wika Salim"} description={"Adult Teacher"} />
            <CardTeacher imageSrc={"/images/tc4.jpg"} altText={"jpg"} name={"Ariel Tatum"} description={"Business Teacher"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
