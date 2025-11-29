import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <nav className="navbarproduct">
                <div className="recuadro0"></div>
                <div className="recuadro1"></div>
                <div className="recuadro2"></div>
                <div className="recuadro3"></div>
                <div className="navgralproduct">
                    <ul className="navlinks">
                        <li>
                            <Link to="/category">Todos</Link>
                        </li>
                        <li>
                            <Link to="/category/gas">Gas</Link>
                        </li>
                        <li>
                            <Link to="/category/aire">Aire</Link>
                        </li>
                        <li>
                            <Link to="/category/fueloil">Fuel Oil</Link>
                        </li>
                        <li>
                            <Link to="/category/programadores">Programadores</Link>
                        </li>
                        <li>
                            <Link to="/Category/quemadores">Quemadores</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
