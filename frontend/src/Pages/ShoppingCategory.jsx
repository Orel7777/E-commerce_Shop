/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './css/ShopCategory.css';
import React, { useContext } from 'react';
import { AliShopContext } from '../Componets/Context/AliShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Componets/Item/Item'
import { toast } from 'react-toastify';

function ShoppingCategory(props) {
  const { all_product } = useContext(AliShopContext);
  const onShowInfoBtn =() =>{
    toast.info("Special surprises coming soon"),{
      position: "bottom-center",
      theme: "colored",
    }
  }
  return (
    <div className="Shopping-Category">
      <img className='shop_categry_alternative' src={props.alternative} alt="img" />
      <div className='Shopping-Category-indexSort'>
        <p>
          <span>Show 12</span> from of 36 products
        </p>
      </div>
      <div className='Shopping-Category-Sort'>
      <IoIosArrowDropdown />
      </div>
      <div className='Shopping-Category-Products'>
          {all_product.map((item,i)=>{
           if(props.category===item.category){
              return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
           }
           else{
            return null;
           }
          })}
      </div>
      <div onClick={()=>{
        onShowInfoBtn();
      }}  className="explore">
      explore More
      </div>
    </div>
  );
}

export default ShoppingCategory;
