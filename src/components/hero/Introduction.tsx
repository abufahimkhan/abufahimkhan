import ContentMotion from "../common/animations/ContentMotion";
import ResumeSection from "../hero/ResumeSection";

const Introduction = () => {
  return (
    <div>
      <ContentMotion
        designation="Software Developer"
        name="A.Fahim Khan"
        description="I am a passionate and creative Software Developer with a love for beautiful
            and functional [`Websites & Mobile Applications`]."
      />
      <ResumeSection />
    </div>
  );
};

export default Introduction;
