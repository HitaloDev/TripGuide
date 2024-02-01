import { IoIosSearch } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import './header.css';


function Header() {
  return (
    <header className="header">

      <Link to={'/'} className="logo-link">
        <div className="logo">
        <span className="icon-logo">
          <MdOutlineTravelExplore />
        </span>
          <h1>TripGuide</h1>
        </div>
      </Link>
      <div className="input">
        <input type="text" placeholder="Pesquisar..."/>
          <span className="icon-search">
            <IoIosSearch/>
          </span>
      </div>

      <div className="login">
        <button>Login</button>
      </div>

    </header>
  )
}

export default Header;