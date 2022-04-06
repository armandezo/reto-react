import Menu from "components/Menu";
import MyCategories from "containers/MyCategories";
import MyOrder from "containers/MyOrder";
import { useContext } from "react"; 
import {AppContext} from "context/AppContext";
import { menu, icon_shopping_cart } from "./Imports/images";
import "./style.scss";
import AuthService from "services/auth.service";  
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate(); 
	const { state, toggleMenu, toggleMenuCat, toggleMenuOrder } : any  = useContext(AppContext);
	const currentUser = AuthService.getCurrentUser(); 
	const sectionLogin = currentUser ? currentUser.email : 'Iniciar Sesion';

	const handleToggle = () => {  
		if (currentUser) { 
			toggleMenu();    
		} else {
			navigate('/login');
		}  
	};

	const handleToggleCat = () => {
		toggleMenuCat();
	};
 
	return (
		<div className='container bg-primary'>
			<div className='row'>
				<div className='col-md-3'>
					<h2 className='widget-categoria' onClick={handleToggleCat}>
						<img src={menu} width='100' height='50' alt='menu' className='menu-categoria' />
						Categorias
					</h2>
				</div>
				<div className='col-md-6'>
					<div className='search-box'>
						<input type='text' className='search-input' placeholder='Hola, ¿qué estás buscando? ' />
						 
					</div>
				</div>
				<div className='col-md-3 '>
					<ul className="widget-cart">
						<li className='navbar-email' onClick={handleToggle}>
							{sectionLogin} 
						</li>
						<li className='navbar-shopping-cart' onClick={toggleMenuOrder}>
							<img src={icon_shopping_cart} width='120' height='26' alt='shopping cart' />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul> 
					{state.toggle && <Menu />}
					{state.toggleOrder && <MyOrder />}
					{state.toggleCat && <MyCategories />}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
