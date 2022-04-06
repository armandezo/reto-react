 import { useState } from "react";
 import { toast } from "react-toastify"; 

 const initialState = {
		cart: [],  
		toggle: false,
		toggleCat: false,
		toggleOrder: false,
		category: { id: "", name: ""},
		edit: false,
		refresh: false
 };

 const useInitialState = () => {
		const [state, setState] = useState(initialState);
		const [toggle, setToggle] = useState(initialState.toggle);
		const [toggleCat, setToggleCat] = useState(initialState.toggleCat);
		const [toggleOrder, setOrder] = useState(initialState.toggleOrder);
		const [formStateCat, setFormStateCat] = useState(initialState.category);

		const notify = () => toast("Item agregado al carrito");

		const addToCart = (payload) => {
			notify(); 
			
			setState({
				...state,
				cart: [...state.cart, payload],
			});
		};

		const removeFromCart = (payload) => { 
			setState({
				...state,
				cart: state.cart.filter(item => item.id !== payload.id),
			});
		}

		const toggleMenu = () => { 
			setToggle( state.toggle = !toggle );
		};

		const toggleMenuCat = () => { 
			setToggleCat((state.toggleCat = !toggleCat));
		};

		const toggleMenuOrder = () => { 
			 setOrder((state.toggleOrder = !toggleOrder));
		};

		const setDataCat = (category, edit, refresh) => {    
			setFormStateCat( state.category = { id: category[0].id, name: category[0].name }, state.edit = edit, state.refresh = refresh );
		};

		return {
			state,
			addToCart,
			removeFromCart,
			toggleMenu,
			toggleMenuCat,
			toggleMenuOrder,
			setDataCat,
		};
 };

 export default useInitialState;