/* eslint-disable react/prop-types */
import './ArrowNituv.css';
import { FaArrowRight } from 'react-icons/fa';

function ArrowNituv(props) {
  const { product } = props;

  return (
    <div className="arrowNituv">
      Home <FaArrowRight /> Shop <FaArrowRight /> {product.category}
      <FaArrowRight /> {product.name}
    </div>
  );
}

export default ArrowNituv;
