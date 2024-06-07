import "./Offers.css";
import { AiTwotoneShop } from "react-icons/ai";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>exclusive products</h1>
        {/* <button>Click here</button> */}
      </div>
      <div className="offers-right">
      <AiTwotoneShop className="shopHere"/>
      </div>
    </div>
  );
}

export default Offers;
