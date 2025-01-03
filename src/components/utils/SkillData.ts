import { StaticImageData } from "next/image";
import { Images } from "./Images";

interface CardProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  badge: string[];
}
export const SkillData: CardProps[] = [
  {
    id: 1,
    image: Images.web_dev,
    title: "Web Development",
    description:
      "Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.",
    badge: [
      "Html",
      "CSS",
      "Javascript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "UI Libraries",
      "Node.js",
      "Nest.js",
    ],
  },
  {
    id: 2,
    image: Images.database_dev,
    title: "Database & Restful API",
    description:
      "Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.",
    badge: ["My SQL", "NOSQL", "Prisma ORM", "GraphQL", "Node.js", "Nest.js"],
  },
  {
    id: 3,
    image: Images.mobile_dev,
    title: "Mobile Development",
    description:
      "Mobile Development entails crafting apps for smartphones and tablets that are both visually appealing and highly functional. It includes a variety of technologies, frameworks, and best practices to provide a seamless user experience on mobile devices.",
    badge: [
      "Html",
      "CSS",
      "Javascript",
      "React.js",
      "Java, XML",
      "UI Libraries",
      "Tamagui",
      "React Native",
      "Android Studio",
    ],
  },
  {
    id: 4,
    image: Images.web_dev,
    title: "Web Design",
    description:
      "Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.",
    badge: ["Html", "CSS", "Javascript", "Tailwind CSS", "UI Libraries"],
  },
];
