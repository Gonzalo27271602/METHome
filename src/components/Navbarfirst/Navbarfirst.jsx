import "./Navbarfirst.css";
import metlogo from "../../assets/logo2.png";
import { Form, Link } from "react-router-dom";
import CartWidget from "../CartWidget2/CartWidget";

const Navbarfirst = () => {
    return(
        <header>
            <div className="primeralinea"></div>
            <div className="recuadro"></div>
            <nav className="navbar">
                <Link className="logo" to="/">
                        <img src= {metlogo} width="120" height="120" alt="Logo MET" />
                </Link>
                <div className="navgral">
                    <ul className="navlinks">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Service">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/category">Productos</Link>
                        </li>
                        <li>
                            <Link to="/Nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/Contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="navcart">
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default Navbarfirst;
