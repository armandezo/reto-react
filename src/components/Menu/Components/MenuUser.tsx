import { Link } from "react-router-dom"

export const MenuUser = () => {
    return (
      <> 
        <li>
            <Link to="/order" className="title">Ordenes</Link>
        </li> 
        <li>
            <Link to="/checkout" className="title">Checkout</Link>
        </li> 
        <li>
            <Link to="/create-account" className="title">Create Account</Link>
        </li> 
        <li>
            <Link to="/my-account" className="title">My Account</Link>
        </li> 
        <li>
            <Link to="/new-password" className="title">New Password</Link>
        </li> 
        <li>
                <Link to="/send-email" className="title">Send Email</Link>
        </li>
      </>
  )
}