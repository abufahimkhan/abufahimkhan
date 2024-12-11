"use client";
import Image from "next/image";
import CardMotion from "../common/animations/CardMotion";
import ImageShow from "../common/animations/ImageShow";
import Badges from "../common/custom-element/Badges";
import { Images } from "../utils/Images";
import { SkillData } from "../utils/SkillData";

const ProjectCards = () => {
  return (
    <div className="p-5">
      {/* Title Section */}
      <div className="flex justify-center items-center gap-2 py-5 mb-5">
        <ImageShow source={Images.Showcase_project} CustomCss="w-14 h-14 mb-5" />
        <div className="uppercase text-gray-500 dark:text-white font-black text-md glow">
          My Projects
        </div>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {SkillData.map((data) => (
          <CardMotion id={data.id} key={data.id}>
            <div className="flex flex-col items-center text-justify tracking-normal gap-2">
              <div className="w-20 h-20">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <strong className="rounded border border-indigo-500 bg-sky-500  px-3 py-1.5 text-[10px] font-medium text-white">
                {data.title}
              </strong>

              <p className="mt-2 text-sm text-gray-400">{data.description}</p>
              <Badges title={data.badge} />
            </div>
          </CardMotion>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
