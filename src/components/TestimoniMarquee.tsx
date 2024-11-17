import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";

const reviews = [
  {
    name: "Jack",
    username: "TENOR KIDS Student",
    body: " The instructors are incredibly supportive, and their teaching methods are clear and interactive. I've gained confidence in speaking and writing, and my vocabulary has significantly improved.",
    img: "/images/icon-cwo.png",
  },
  {
    name: "Jill",
    username: " TENOR TEEN Student",
    body: "I enrolled in this English course with the hope of improving my communication skills, and I couldn't be happier with the results.",
    img: "/images/icon-cwe.png",
  },
  {
    name: "John",
    username: "TENOR ADULT Student",
    body: "The teachers are approachable and always willing to help, and the learning environment is very encouraging.",
    img: "/images/icon-cwo.png",
  },
  {
    name: "Jane",
    username: "TENOR BUSINESS Student",
    body: " I used to struggle with grammar and pronunciation, but now I feel much more confident when speaking with others.",
    img: "/images/icon-cwe.png",
  },
  {
    name: "Jenny",
    username: "TENOR BUSINESS Student",
    body: "Joining this English course has been one of the best decisions I’ve made. The lessons are well-structured and focus on practical language skills that I can use every day.",
    img: "/images/icon-cwe.png",
  },
  {
    name: "James",
    username: "TENOR ADULT Student",
    body: "The real-life practice exercises and engaging lessons made learning enjoyable. I highly recommend this course to anyonlooking to master English!",

    img: "/images/icon-cwo.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username?: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )} 
    >
      <div className="flex flex-row items-center gap-2 bg-gradient-to-br from-teal-300 to-blue-900 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-lg font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-lg">{body}</blockquote>
    </figure>
  );
};

export function TestimoniMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
