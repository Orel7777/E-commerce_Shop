import "./Navbar.css";
import { FaShopLock } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";

function Navbar() {
  return (
    <div className="navbar">
      <FaShopLock className="nav-logo" />
      <FcBusinessman className="nav-profile"/>
    </div>
  );
}

export default Navbar;
