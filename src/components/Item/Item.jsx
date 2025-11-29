import { Link } from "react-router-dom";
import './Item.css';

//conviene desestructurarlo para no tener que colocar props. y cada dato del producto tambien colocar props.product....
const Item = ({product}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img className="item-img" src={product.image} alt="image product" />
            </div>
            <div>
                <ul>
                    <li>{product.name}</li>
                    <li>{product.description}</li>
                    <li>{product.price}</li>
                    <Link to={"/detail/" + product.id}>
                        <li>Detalle del producto</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Item;