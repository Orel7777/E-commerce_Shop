// import logo from '../../assets/logo.png';
// eslint-disable-next-line no-unused-vars
import './Navbar.css';
import { FcShop } from 'react-icons/fc';
import cart_icon from '../../Assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AliShopContext } from '../Context/AliShopContext';
import { FaArrowDown } from 'react-icons/fa6';
import  { useRef } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState('shop');
  const [showLinks, setShowLinks] = useState(false);
  const menuRef = useRef();
  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const onShowMas = () => {
    toast.success('Welcome to our amazing store', {
      position: 'bottom-center',
      theme: 'colored',
    });
  };

  const { getTotalItems } = useContext(AliShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <FcShop className="FcShop" />
        <p>Ali Shop</p>
      </div>
      <FaArrowDown className="nav-dropdown" onClick={dropDown_toggle} />
      <ul
        ref={menuRef}
        className={`nav-menu ${showLinks ? 'show-nav' : 'hide-nav'}`}
      >
        <li
          onClick={() => {
            setMenu('shop');
            onShowMas();
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('pets');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/pets">
            pets
          </Link>
          {menu === 'pets' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('electric');
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/electric"
          >
            electric
          </Link>
          {menu === 'electric' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('clothes');
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/clothes"
          >
            clothes
          </Link>
          {menu === 'clothes' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to="/login"><button>Login </button> </Link>}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
        <div className="burger_nav" onClick={handleShowLinks}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
