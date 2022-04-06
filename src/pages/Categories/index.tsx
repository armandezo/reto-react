import React, { useContext } from 'react';
import { AnimatedPage } from 'animations/AnimatedPage';
import AuthService from 'services/auth.service';
import { Navigate } from 'react-router-dom';
import "./style.scss";
import { Form } from './Components/Form';
import { TableCat } from './Components/TableCat'; 

export interface ICategoriesPageProps { };

const CategoriesPage: React.FunctionComponent<ICategoriesPageProps> = props => {

    const currentUser = AuthService.getCurrentUser(); 
    if (currentUser.role !== 'admin') return <Navigate replace to="/" />;
 
    return (
        <>
            <AnimatedPage>
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-6">
                            <Form /> 
                        </div>
                        <div className="col-md-6 box_ajust_table">
                            <TableCat />
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );

}

export default CategoriesPage; 
