import React from 'react'; 
import { AnimatedPage } from 'animations/AnimatedPage';
import AuthService from 'services/auth.service';
import { useNavigate , Navigate} from 'react-router-dom';
import "./style.scss";
import { toast } from "react-toastify"; 

export interface IOrdersPageProps {}; 

const OrdersPage: React.FunctionComponent<IOrdersPageProps> = props => {

    const currentUser = AuthService.getCurrentUser(); 
	if(currentUser.role !== 'admin') return <Navigate replace to="/" />;

    return (
      <> 
            <AnimatedPage>
                <h1>productos admin</h1>
            </AnimatedPage>
      </> 
  );  

} 

export default OrdersPage; 
