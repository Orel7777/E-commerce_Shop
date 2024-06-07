/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AliShopContext } from '../Componets/Context/AliShopContext';
import { useParams } from 'react-router-dom';
import ArrowNituv from '../Componets/ArrowNituv/ArrowNituv';
import ProductDisplay from '../Componets/ProductDisplay/ProductDisplay';
import InfoPrucuct from '../Componets/InfoProduct/InfoProduct';
import RealtedProducts from '../Componets/RealtedProducts/RealtedProducts';

function Product() {
  const { all_product } = useContext(AliShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <ArrowNituv product={product} />
      <ProductDisplay product={product} />
      <InfoPrucuct />
      <RealtedProducts />
    </div>
  );
}

export default Product;
