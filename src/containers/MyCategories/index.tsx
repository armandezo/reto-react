import { Link } from "react-router-dom"; 
import "./style.scss";

const MyCategories = () => {
	return (
		<aside className='MyCategories'>
            <h4 className="list-cat">Lista de Categorias</h4>
			<ul className='sub-menu'>
				<li >
					<Link to='/'>Home 1</Link>
				</li>
				<li >
					<Link to='/'>Home 2</Link>
				</li>
				<li >
					<Link to='/'>Home 3</Link>
				</li>
				<li >
					<Link to='/'>Home 4</Link>
				</li>
				<li >
					<Link to='/'>Home 5</Link>
				</li>
				<li >
					<Link to='/'>Home 6</Link>
				</li>
				<li >
					<Link to='/'>Home 7</Link>
				</li>
				 
			</ul>
		</aside>
	);
};

export default MyCategories;