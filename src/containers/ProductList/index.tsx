import ProductItem from "components/ProductItem"; 
import useGetProducts from "./Hooks/useGetProducts";
import "./style.scss";
// import { ApiGetProduct } from "@constants/Urls";
const ApiGetProduct = "https://api.escuelajs.co/api/v1/products";
 

const ProductList = () => {
	
	const products = useGetProducts(ApiGetProduct);

	return (
		<section className='main-container'>
			<div className='ProductList'>
				{products.map((product, index) => ( 
					<ProductItem 
						indexValue={`productItem-${index}`}
						key={`productItem-${index}`}  
						product={product}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductList;
