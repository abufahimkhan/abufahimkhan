import ImageShow from "../common/animations/ImageShow";
import Introduction from "./Introduction";
import { Images } from "../utils/Images";
const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-24 px-5 py-12">
      <ImageShow source={Images.hero_dark} />
      <Introduction />
    </div>
  );
};

export default HeroSection;
