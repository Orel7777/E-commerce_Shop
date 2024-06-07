import { Link } from 'react-router-dom';
import './Item.css';

function Item(prpos) {
  return (
    <div className="item">
      <Link to={`/product/${prpos.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={prpos.image} alt="img" />
      </Link>
      <p className="text-dark">{prpos.name}</p>
      <div className="item-prices">
        <div className="item-price-old text-danger">${prpos.old_price}</div>
        <div className="item-price-new text-success">${prpos.new_price}</div>
      </div>
    </div>
  );
}

export default Item;
