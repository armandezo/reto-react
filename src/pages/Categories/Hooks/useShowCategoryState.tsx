 import { useEffect, useState } from "react"; 
import categoryService from "../Services/category.service";

 const initialState = {
		name: '',   
 };

const useInitialStateCat = ({ cat } : any) => {
	const [category, setCategory] = useState(initialState);

    useEffect( () => { 
        (async () => {
          const response = await categoryService.show(cat.id);
          setCategory(response);
        })();
    }, [cat.id]);

	return category;
 };

 export default useInitialStateCat;