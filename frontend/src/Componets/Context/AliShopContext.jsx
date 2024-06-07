/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import all_product from "../../assets/all_product";
import React, { createContext, useEffect, useState } from "react";
export const AliShopContext = createContext(null);

const getDefauleCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const AliShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefauleCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json"
        },
        body: "",
      }).then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    if (!localStorage.getItem("auth-token")) {
      alert("Please log in to add items to the cart.");
      return;
    }
  
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    fetch("http://localhost:4000/addtocart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemId: itemId })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removfromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ itemId: itemId })
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    deleteFromCart,
    getTotalCartAmount,
    getTotalItems
  };

  return (
    <AliShopContext.Provider value={contextValue}>
      {props.children}
    </AliShopContext.Provider>
  );
};

export default AliShopContextProvider;
