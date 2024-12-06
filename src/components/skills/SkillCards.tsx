"use client";
import Image from "next/image";
import Link from "next/link";
import CardMotion from "../common/animations/CardMotion";
import { SkillData } from "../utils/SkillData";

const SkillCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {SkillData.map((data) => (
        <CardMotion id={data.id} key={data.id}>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4">
              <Image
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              {data.title}
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl text-white">
              <Link href="#" className="hover:underline">
                {data.title}
              </Link>
            </h3>

            <p className="mt-2 text-sm text-gray-400">{data.description}</p>
          </div>
        </CardMotion>
      ))}
    </div>
  );
};

export default SkillCards;
