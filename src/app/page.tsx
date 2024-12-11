import HeroSection from "@/components/hero/HeroSection";
import ProjectCards from "@/components/projects/ProjectCards";
import SkillCards from "@/components/skills/SkillCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="*:mt-12">
        <SkillCards />
        <ProjectCards />
      </div>
    </>
  );
}
