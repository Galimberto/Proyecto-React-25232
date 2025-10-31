import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <Link to={"/"}><h2>Ang<span>Dev.</span></h2></Link>
      <Nav />
    </header>
  )
}
