
import './Background.css';
import cart2 from '../../Assets/cart2.png';
import { BsEarbuds } from 'react-icons/bs';
import { FaLongArrowAltDown } from "react-icons/fa";

function Background() {
  return (
    <div>
      <div className="background">
        <div className="background-left">
          <div>
            <div className="hand-hand-icon">
              <p>Ali Shop</p>
              <div className="bsEer">
              <BsEarbuds />
              </div>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="background-last-btn">
            <div>The best products</div>
            {/* <img src={arrow} alt="arrow" /> */}
            <FaLongArrowAltDown className='' />
          </div>
        </div>
        <div className="background-right">
          <img src={cart2} alt="cart2" />
        </div>
      </div>
    </div>
  );
}

export default Background;
