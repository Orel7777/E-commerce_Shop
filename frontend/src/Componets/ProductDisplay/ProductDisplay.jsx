/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import './ProductDisplay.css';
import { useContext } from 'react';
import { IoIosStar } from 'react-icons/io';
import { GiRoundStar } from 'react-icons/gi';
import { AliShopContext } from '../Context/AliShopContext';
import { toast } from 'react-toastify';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(AliShopContext);
  const addCart = () => {
    if (!localStorage.getItem("auth-token")) {
      toast.error('Please log in to add items to the cart.', {
        position: 'bottom-right',
        theme: 'dark',
      });
      return;
    }
    toast.success('Added to cart successfully ', {
      position: 'bottom-right',
      theme: 'dark',
    });
  };

  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="prdo" />
          <img src={product.image} alt="prdo" />
          <img src={product.image} alt="prdo" />
          <img src={product.image} alt="prdo" />
        </div>
        <div className="productDisplay-img">
          <img
            className="productDisplay-main-picture"
            src={product.image}
            alt="prd"
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>Product: {product.name}</h1>
        <div className="productDisplay-right-star">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <GiRoundStar />
        </div>
        <p>(101)</p>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">netrali</div>
        <button
          onClick={() => {
            addToCart(product.id);
            addCart();
          }}
          className="btn btn-success btnSucces"
        >
          Add to Cart
        </button>
        <p className="productDisplay-right-category">
          <span>Category:</span>Pet
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
