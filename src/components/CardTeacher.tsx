import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface CardComProps {
  imageSrc: string;
  altText: string;
  name: string;
  description: string;
}

export const CardTeacher: React.FC<CardComProps> = ({
  imageSrc,
  altText,
  name,
  description,
}) => {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <Image
          src={imageSrc}
          alt={altText}
          width={600}
          height={600}
          className="object-cover"
        />
      </CardHeader>
      <CardDescription className="text-center text-2xl font-bold">
        {name}
      </CardDescription>
      <CardContent className="my-10 text-center text-xl">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};