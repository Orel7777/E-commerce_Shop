/* eslint-disable react/jsx-key */
import { useContext } from "react";
import "./CartItems.css";
import { AliShopContext } from "../Context/AliShopContext";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";


function CartItems() {
    const { all_product, cartItems, deleteFromCart,getTotalCartAmount } = useContext(AliShopContext);
    const notify = () => {
        toast.info("🦄 WOW, on your next purchase you will get a 20% discount", {
          position: "bottom-center",
          theme: "light"
        });
      };

      const onCheckout = () =>{
        toast.success("Thank you very much for the order, the purchase was made successfully", {
          position: "bottom-center",
          theme: "light"
        });
      }

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItems-format cartItems-format-main">
                <img
                  src={e.image}
                  alt="img"
                  className="carticon-product-icon"
                />
                <p className="id_">{e.name}</p>
                <p className="id_">${e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="id_">${e.new_price * cartItems[e.id]}</p>
                <CiCircleRemove
                  id="cartItems-delete"
                  onClick={() => {
                    deleteFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Sub Total:</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>t{" "}
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={onCheckout}>Checkout</button>
        </div>
        <div className="cartItems-code">
          <p>If you hame a promo code, Enter it here please</p>
          <div className="cartItem-promobox">
            <input type="text" placeholder="promo code" />
            <button onClick={notify}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
