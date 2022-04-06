import React from "react"; 
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "core/global.css";

import Layout from "containers/Layout";
import {AppContext} from "context/AppContext";
import useInitialState from "hooks/useInitialState";
 
const HomePage = React.lazy(() => import("pages/Home"));
const LoginPage = React.lazy(() => import("pages/Login"));
const RegistroPage = React.lazy(() => import("pages/Registro"));
const ProductsPage = React.lazy(() => import("pages/Products"));
const CategoriesPage = React.lazy(() => import("pages/Categories"));
const OrdersPage = React.lazy(() => import("pages/Orders"));

export interface IAppRouterProps { }

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
	const initialState = useInitialState();

	const location = useLocation();

	return (
		<AppContext.Provider value={initialState}>
			<Layout>
				<AnimatePresence exitBeforeEnter initial={false}>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/registro' element={<RegistroPage />} />
						<Route path='/productos' element={<ProductsPage />} />
						<Route path='/categorias' element={<CategoriesPage />} />
						<Route path='/ordenes' element={<OrdersPage />} />
					</Routes>
				</AnimatePresence>
			</Layout>
		</AppContext.Provider>
	);
};

export default AppRouter;
