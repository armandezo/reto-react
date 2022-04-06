import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import AuthService from "services/auth.service";
import { MenuAdmin } from "./Components/MenuAdmin";
import { MenuUser } from "./Components/MenuUser";
import {AppContext} from "context/AppContext";
import './style.scss';

const Menu = () => { 

	const currentUser = AuthService.getCurrentUser();
	const menuFilter = currentUser ? currentUser.role === 'admin' ? 'menu-admin' : 'menu-user' : '';
    const navigate = useNavigate();
	const { toggleMenu } : any  = useContext(AppContext); 

	const handleClick = (event: any) => {
		event.preventDefault();   
		AuthService.logout().then(
			() => {
				toast("Session Cerrada", { type: "success" });
				toggleMenu();   
				navigate('/'); 
			},
			error => {
				toast(error.message, { type: "error" }); 
			}
		); 
	};

	return (
		<div className="Menu">
			<ul>
				{menuFilter === 'menu-admin' ? <MenuAdmin /> : <MenuUser />}
				
				<li>
					<Link to="/" className="title" onClick={handleClick}>Cerrar session</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
