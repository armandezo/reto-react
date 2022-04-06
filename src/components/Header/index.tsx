import { Link } from "react-router-dom"; 
import "./style.scss"; 
import menu from 'assets/images/icons/icon_menu.svg';
 

const Header = () => {  
	return (
	 <nav>
			<img src={menu} width='100' height='50' alt='menu' className='menu' />
			 
			<div className='navbar-left'> 
				<Link to='/'>
				<img src="https://realplaza.vtexassets.com/arquivos/logo_rp_blanco.svg" width='237' height='41' alt='logo' className='nav-logo' />
				</Link>
			</div>
			<div className='navbar-right'>
				<ul>
					<li>
						<a href='https://www.agora.pe' target="_blank" rel="noreferrer" >Agora</a>
					</li>
					<li> 
						<a href='https://tarjetaoh.pe/afiliacion-digital/?utm_source=realplaza&utm_medium=card&utm_campaign=captaciontoh&utm_content=toh' target="_blank" rel="noreferrer">Financiera Oh! </a>
					</li>
					<li>
						<a href='https://www.oechsle.pe' target="_blank" rel="noreferrer">Oechsle  </a>
					</li>
					<li>
						<a href='https://www.promart.pe' target="_blank" rel="noreferrer">Promart </a>
					</li>
					<li>
						<a href='https://www.plazavea.com.pe' target="_blank" rel="noreferrer">PlazaVea </a>
					</li>
					<li>
						<a href='https://www.vivanda.com.pe' target="_blank" rel="noreferrer">Vivanda </a>
					</li>
					<li>
						<a href='https://inkafarma.pe' target="_blank" rel="noreferrer">Inkafarma </a>
					</li>
					<li>
						<a href='https://www.mifarma.com.pe' target="_blank" rel="noreferrer">Mifarma </a>
					</li> 
				</ul> 
			</div> 
		</nav>
	);
};

export default Header;
 
