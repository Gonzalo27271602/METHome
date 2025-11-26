import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import CountCart from "../CountCart/CountCart";
import "./cart.css";

const Cart = () => {
    const {cart, totalPrice, eliminarproductoById, deleteCart} = useContext(Context);

    if (cart.length === 0) {
        return (
            <div>
                <h2>El carrito está vacio</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cartmax">
            <h2>Mi carrito de productos</h2>
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className="cart-conteiner">
                        <div>
                            <img src={productCart.image} alt="imagen" width={100}/>
                        </div>
                        <div>
                            <p>{productCart.name}</p>
                        </div>
                        <div>
                            <p>Precio unitario: ${productCart.price}</p>
                        </div>
                        <div>
                            <CountCart id={productCart.id} quantity={productCart.quantity} stock={productCart.stock}/>
                        </div>
                        <div>
                            <p>Precio parcial: ${productCart.price * productCart.quantity}</p>
                        </div>
                        <div>
                            <button onClick={ () => {eliminarproductoById(productCart.id)}}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
            <p className="total-price">Precio total: u$d{totalPrice()}</p>
            <Link to="/CheckOut">Continuar con la compra</Link>
            <button onClick={deleteCart}>Vaciar carrito</button>
        </div>
    )
};

export default Cart;