import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/accesorio"}>Accesorios</Link>
        </li>
        <li>
          <Link to={"/category/repuesto"}>Repuestos</Link>
        </li>
      </ul>
    </nav>
  )
}
