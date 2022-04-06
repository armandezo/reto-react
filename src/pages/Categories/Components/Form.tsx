import { AppContext } from 'context/AppContext';
import {  useContext, useRef } from 'react';
import { toast } from 'react-toastify';   
import categoryService from '../Services/category.service';
export const Form = () => {
    const form = useRef(null);
     
    const { state, setDataCat }: any = useContext(AppContext);
   
    const initialState = {
        category: [{  id: "",  name: ""}],
        edit: false,
        refresh: false,
    };

    

    const handleChange = (e: any) => {   
    }
 
     const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = new FormData(form.current!);

         const data = { 
             id: formData.get("id"),
             name: formData.get("name"),
         };

        
          
        categoryService.create(data).then(
            (res) => {
                toast("Categoria creada con exito", { type: "success" }); 
            
                setDataCat(data, false,  true);
            },
            error => {
                toast(error.response.data.error, { type: "error" });
            }
         );
         
    };

     

    const handleCancel = (event: any) => {
        event.preventDefault(); 
        setDataCat(initialState.category, initialState.edit, false);
    };

    const handleUpdate = (event: any) => { 
        event.preventDefault(); 
        const formData = new FormData(form.current!);

        const data = {
            id : state.category.id,
            name: formData.get("name"), 
        }
          
        categoryService.update(data).then(
            async () => {
                toast("Categoria editada con exito", { type: "success" });  
                setDataCat(initialState.category, initialState.edit,  true); 
                
            },
            error => {
                toast(error.response.data.error, { type: "error" });
            }
        );
        
    };

    
  return (
      <form action='/' className='form box_ajust_cat' ref={form} autoComplete="off">
          <h2>Categorias</h2>
          <br />
          <label htmlFor='name' className='label'>
              Nombre de la categoria
          </label>
          <input type='text' name='name' defaultValue={state.category.name} onChange={handleChange}  placeholder='Nombre de la categoria' className='input input-email' />
          <input type='hidden' name='id' defaultValue={state.category.id} onChange={handleChange}    />
          
          {state.edit ?
              <div className="flex-btn"> 
              <button type='submit' onClick={handleUpdate} className='primary-button login-button'>Actualizar</button>
              <button  onClick={handleCancel} className='danger-button-lg login-button'>Cancelar</button>
              </div>

              : <button type='submit' onClick={handleSubmit}   className='primary-button login-button'>Crear</button>
          }
          
      </form>
  )
}
