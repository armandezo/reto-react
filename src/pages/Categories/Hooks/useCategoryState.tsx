import { useEffect, useState } from "react"; 
import categoryService from "../Services/category.service";

const useCategoryState = (refresh : any )  => {
	const [categories, setCategories] = useState([]); 
    useEffect( () => { 
      (async () => { 
          const response = await categoryService.listAll();
          setCategories(response);
        })();
    }, [refresh]);

	return categories;
};

export default useCategoryState;