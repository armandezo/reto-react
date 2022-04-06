import React, { useContext } from "react";
import DataTable from "react-data-table-component"; 
import useCategoryState from "../Hooks/useCategoryState";
import {paginationComponentOptions} from "constants/config-table";
import { IDataRow } from "../Interfaces/DataRow";
import Columns from "../Common/Columns";
import { AppContext } from "context/AppContext";
 
export const TableCat = () => { 

	const { state }: any = useContext(AppContext);
	 
    const categories = useCategoryState(state.refresh);  
    
    const data: IDataRow[] = categories;
    
    const columns = Columns();

	return (
		<>
			<DataTable columns={columns} data={data} pagination fixedHeader fixedHeaderScrollHeight='300px' paginationComponentOptions={paginationComponentOptions} />
		</>
	);
};
