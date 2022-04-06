import { AnimatedPage } from 'animations/AnimatedPage';
import CarouselPrincipal from 'components/Carousel';
import ProductList from 'containers/ProductList';
import React from 'react'; 

export interface IHomePageProps {}; 

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return (
    <> 
     <AnimatedPage> 
				 <CarouselPrincipal />	
				 <ProductList />
			</AnimatedPage> 
    </> 
  );  

} 

export default HomePage; 
