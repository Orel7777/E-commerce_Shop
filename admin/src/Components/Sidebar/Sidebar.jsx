import './Sidebar.css'
import {Link} from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar'>
    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
        <BsCartPlus />
        <p>Add Product</p>
        </div>
    </Link>
    <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
        <FaFolder />
        <p>Product list</p>
        </div>
    </Link>
    </div>
  )
}

export default Sidebar