import React, { useContext } from 'react'; 
import { AnimatedPage } from 'animations/AnimatedPage';
import AuthService from 'services/auth.service';
import { useNavigate , Navigate} from 'react-router-dom';
import "./style.scss";
import { toast } from "react-toastify";  

export interface IProductsPageProps {}; 

const ProductsPage: React.FunctionComponent<IProductsPageProps> = props => {
     
    const currentUser = AuthService.getCurrentUser(); 
	if(currentUser.role !== 'admin') return <Navigate replace to="/" />;

    return (
      <> 
            <AnimatedPage>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            a
                        </div>
                        <div className="col-md-6">
                            b
                        </div>
                    </div>
                </div>
            </AnimatedPage>
      </> 
  );  

} 

export default ProductsPage; 
