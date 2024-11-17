"use client";
import { useEffect, useState } from "react";
import { fetchRandomUsers, RandomUser } from "../OurTeam/randomUser";
import { Button } from "@/components/ui/button";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<RandomUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const members = await fetchRandomUsers(6);
        setTeamMembers(members);
      } catch (err) {
        setError("No data.");
      } finally {
        setLoading(false);
      }
    };

    getTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-900 pt-2 md:pb-10 md:pt-10">
      <div className="md:mx-60">
        <div className="grid justify-center rounded-xl border-2 border-solid border-black md:py-10 text-center">
          <h1 className="md:text-3xl font-bold"> The Backbone of Our English Language Center</h1>
          <p className="md:text-2xl md:pt-5 md:px-20 ">
            We believe that collaboration is the key to success. Every staff
            member at TONER English Course is committed to supporting students,
            creating a nurturing atmosphere that motivates and inspires.
            Together, we work tirelessly to deliver an exceptional learning
            experience, empowering students to achieve their language goals.
          </p>
        </div>
        <div className="container mx-auto p-4 px-10">
          <h1 className="mb-8 text-center text-3xl font-bold">
            {" "}
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-white bg-gray-800 p-4 text-center shadow-md"
              >
                <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  className="mx-auto mb-4 h-24 w-24 rounded-full"
                />
                <h2 className="text-lg font-semibold">
                  {member.name.first} {member.name.last}
                </h2>
                <p className="text-sm text-gray-500">{member.email}</p>
                <p className="text-sm text-gray-500">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid justify-center rounded-xl border-2 border-solid border-black py-10 text-center">
          <p className="md:text-2xl md:px-20">
            By fostering a supportive and inclusive environment, we empower both
            students and team members to achieve their best. At TENOR English
            Cours, we’re not just teaching English; we’re building a community
            of lifelong learners and leaders. Ready to join us and experience a
            unique blend of professionalism and warmth? Let’s learn, grow, and
            celebrate together!
          </p>
          <div>
            <Button variant="outline" className="md:text-2xl mt-1 md:mt-5">
              come join us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
