import { Button } from "@/components/ui/button";
import React from "react";

function OurTeam() {
  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-900">
      <div className="md:mx-60">
        <div className="grid justify-center rounded-xl border-2 border-solid border-black py-10 text-center">
          <h1> The Backbone of Our English Language Center</h1>
          <p>
            We believe that collaboration is the key to success. Every staff
            member at TONER English Course is committed to supporting students,
            creating a nurturing atmosphere that motivates and inspires.
            Together, we work tirelessly to deliver an exceptional learning
            experience, empowering students to achieve their language goals.
          </p>
        </div>
        <div> 
          
        </div>
        <div className="grid justify-center rounded-xl border-2 border-solid border-black py-10 text-center">
          <h1></h1>
          <p>
            By fostering a supportive and inclusive environment, we empower both
            students and team members to achieve their best. At TENOR English
            Cours, we’re not just teaching English; we’re building a community
            of lifelong learners and leaders. Ready to join us and experience a
            unique blend of professionalism and warmth? Let’s learn, grow, and
            celebrate together!
          </p>
          <div>
            <Button variant="outline" className="md:text-2xl">
              come join us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
