import "./styles.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/heroimage.png";
import imgtwon from "../../../assets/family.png"

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <img src={imgtwon} alt="" srcset="" />
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
