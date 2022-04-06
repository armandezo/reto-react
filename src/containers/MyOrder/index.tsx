import React, {useContext} from 'react';
import OrderItem from 'components/OrderItem';
import {AppContext} from "context/AppContext"; 
import './style.scss';

const MyOrder = () => {

	const { state } : any = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator: any, currentValue: { price: any; }) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container"> 
				<p className="title">Mi Carrito</p>
			</div> 
			<div className="my-order-content">
				{state.cart.map((product: any,index: any) => (
					<OrderItem 
						indexValue={`orderItem-${index}`}
						key={`orderItem-${index}`} 
						product={product}
					/>
				))} 
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>S/ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					<span>Comprar</span>
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
