import { slide_first, slide_second, slide_third } from "./Imports/images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselPrincipal = () => {
	return (
		<Carousel showThumbs={false} swipeable={true} autoPlay={true}>
			<div>
                <img src={slide_first} alt={slide_first}/> 
			</div>
			<div>
				<img src={slide_second} alt={slide_second} /> 
			</div>
			<div>
				<img src={slide_third} alt={slide_third} /> 
			</div>
		</Carousel>
	);
};

export default CarouselPrincipal;
