
import { useState } from "react";
import "./AddProduct.css";

import upload_area from "../../assets/upload_area.png";

function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetalis, setProductDetails] = useState({
    name: "",
    image: "",
    category: "pet",
    new_price: "",
    old_price: ""
    
  });

  const resetForm = () => {
    setImage(false);
    setProductDetails({
      name: "",
      image: "",
      category: "pet",
      new_price: "",
      old_price: ""
    });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const AddProduct = async () => {
    console.log(productDetalis);
    let responseData;
    let product = productDetalis;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'post' ,
        headers: {
          Accept:'application/json',
          'Content-Type':'Application/json',
        },
        body:JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product added successfully!"):alert("Failed to add the Product!");
      })
      resetForm();
    }
  };

  const changeHanler = (e) => {
    setProductDetails({ ...productDetalis, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetalis.name}
          onChange={changeHanler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetalis.old_price}
            onChange={changeHanler}
            type="text"
            name="old_price"
            id="Type here"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetalis.new_price}
            onChange={changeHanler}
            type="text"
            name="new_price"
            id="Type here"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetalis.category}
          onChange={changeHanler}
          name="category"
          className="add-product-selector"
        >
          <option value="pet">pet</option>
          <option value="electric">electric</option>
          <option value="clothes">clothes</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="img"
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          AddProduct();
        }}
        className="addproduct-btn btn btn-info"
      >
        Add product
      </button>
    </div>
  );
}

export default AddProduct;
