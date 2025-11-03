import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to={"/"}><h2>Ang<span>Dev.</span></h2></Link>
        <Nav />
      </div>
    </header>
  )
}
