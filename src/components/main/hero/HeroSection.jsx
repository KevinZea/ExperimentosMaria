import "./styles.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/heroimage.png";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
