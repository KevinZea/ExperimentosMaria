import "./Styles.css";
import "./ResponsiveContact.css";
import ContactPic from "../../../assets/family.png";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contatWrapper">
        <div className="leftContact">
          <div className="infosContact">
            <h2>Especial Agradecimiento</h2>
            <div className="btnContact">
              <ul>
                <li>Maria</li>
                <li>Flor</li>
                <li>Erika</li>
                <li>Karen</li>
                <li>Andres</li>
                <li>Enith</li>
                <li>Cesar</li>
                <li>Julieth</li>
                <li>Johan</li>
                <li>Edward</li>
                <li>Jesus</li>
                <li>Cupitra</li>
                <li>Mosquera</li>
                <li>Fransis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rigthContact">
          <img src={ContactPic} alt="draw of two persons doing a hand shek" />
        </div>
      </div>
    </section>
  );
};
