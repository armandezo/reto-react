import React from 'react';
import './style.scss';
import flechita from 'assets/images/icons/flechita.svg';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={flechita} width="7" height="12" alt="arrow" />
		</div>
	);
}

export default Order;
