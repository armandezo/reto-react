import { AppContext } from "context/AppContext";
import { useContext } from "react";
import { TableColumn } from "react-data-table-component";    
import {IDataRow} from "../Interfaces/DataRow";
import categoryService from "../Services/category.service"; 
const Columns = () => {  
	const { setDataCat } : any  = useContext(AppContext); 
	
	const initialState = {
        category: [{  id: "",  name: ""}],
        edit: false,
        refresh: false,
    };


    const handleClickInfo = async (id: string) => { 
		const response = await categoryService.show(id); 
		setDataCat(response, true, false);  
	};  

	const handleClickRemove = async (id: string) => { 
		const response = await categoryService.delete(id); 
	
		setDataCat(initialState.category, false, true);
    };
    

    const columns: TableColumn<IDataRow>[] = [
		{
			name: "Nombre",
			selector: (row) => row.name,
		},
		{
			button: true,
			cell: (row) => (
				<>
					<button onClick={() => handleClickInfo(row.id)} className='info-button'>
						Editar
					</button>
				</>
			),
		},
		{
			button: true,
			cell: (row) => (
				<>
					<button onClick={() => handleClickRemove(row.id)} className='danger-button'>
						Eliminar
					</button>
				</>
			),
		},
	];

	return columns;
};

export default Columns;


