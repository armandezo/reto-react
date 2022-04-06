import Header from 'components/Header';
import NavBar from 'components/NavBar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children } : any) => {
	return ( 
		<div className="Layout">
			<Header />
			<NavBar />
			<ToastContainer />
			{children}
		</div>
	);
}

export default Layout;
