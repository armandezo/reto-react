import { useContext } from 'react';
import {AppContext} from "context/AppContext";
import './style.scss';
import bt_add_to_cart from 'assets/images/icons/bt_add_to_cart.svg';

const ProductItem = ({product} : any) => {

	const { addToCart } : any = useContext(AppContext);
	 
	const handleClick = (item: any) => { 
		addToCart(item);
	}
 
	return (
		<div className="ProductItem">
			<img src={product.images[0]} width="650" height="940"  alt={product.title} />
			<div className="product-info">
				<div>
					<p>S/ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className='addToCard' onClick={() => handleClick(product)} >
					<img src={bt_add_to_cart}  width="650" height="940" alt="add to card" />
				</figure>
			 
			</div>
		</div>
	);
}

export default ProductItem;
