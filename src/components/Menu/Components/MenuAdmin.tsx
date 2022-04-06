import { Link } from "react-router-dom"

export const MenuAdmin = () => {
    return (
      <> 
        <li>
            <Link to="/categorias" className="title">Categorias</Link>
        </li> 
        <li>
            <Link to="/productos" className="title">Productos</Link>
        </li>  
      </>
  )
}

