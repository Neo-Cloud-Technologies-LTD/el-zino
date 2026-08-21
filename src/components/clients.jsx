import "./clients.css";
import Tipox from "../assets/tipox.png";
import Excipia from "../assets/excipia.webp";
import Vide from "../assets/vide.webp";
import Dehotel from "../assets/dehotel.webp";
import Umber from "../assets/umber.png";

function Client() {
  return (
    <>
      <div id="client">
        <h2 className="client-text">Our Clients</h2>
        <div className="client-row">
          <div className="cover">
            <img src={Tipox} alt="TIPOX" />
          </div>
          <div className="cover">
            <img src={Excipia} alt="EXCIPIA" />
          </div>
          <div className="cover">
            <img src={Vide} alt="Vide" />
          </div>
          <div className="cover">
            <img src={Dehotel} alt="DEHOTEL" />
          </div>
          <div className="cover">
            <img src={Umber} alt="UMBER & CO" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
