import './RealtedProducts.css';
import data_product from '../../Assets/data';
import Item from '../Item/Item';

function RealtedProducts() {
  return (
    <div className="RealtedProducts">
      <h1>More Products</h1>
      <hr />
      <div className="RealtedProducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RealtedProducts;
