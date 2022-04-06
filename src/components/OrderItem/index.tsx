import {useContext} from 'react';
import {AppContext} from "context/AppContext";
import './style.scss';
import icon_close from 'assets/images/icons/icon_close.png';
const OrderItem = ({product} : any) => {

	const {removeFromCart} : any = useContext(AppContext);

	const handleRemove = (product: any) => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p className='title-prod-cart '>{product.title}</p> 
			<p>{product.price}</p>
			<img src={icon_close} className='removeToCard' width="14" height="14" alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
