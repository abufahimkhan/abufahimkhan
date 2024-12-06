import HeroImage from "../hero/HeroImage";
import Introduction from "../hero/Introduction";
const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-12">
     <Introduction/>
      <HeroImage/>
    </div>
  );
};

export default LandingPage;
