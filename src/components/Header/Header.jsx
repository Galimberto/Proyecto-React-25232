import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to={"/"}><img src="./public/logo.svg"/></Link>
        <Nav />
      </div>
    </header>
  )
}
