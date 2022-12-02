import {useState} from "react";
import Booking from "./Booking";

export default function Basket(props) {
    const [showBasket, setBasket] = useState(false);

    function getTotal() {
        let total = 0;
        // make sure there's a "cart" somewhere:
        props.cart.forEach(item=> {
            total+=item.amount * item.price;
        // do we have an item?
        });
        return total;
    }

    return (
        <section className="Basket">
        <ul>
            <li>{item.name} x {item.amout}, {""} {item.amount * item.price},-
            <button onClick={() => props.removeFromCart(item.name)}>X</button>         
            </li>

        </ul>
        <h3>Total: {getTotal()}</h3>
        {!showBasket && <button onClick={() => setBasket(true)}>Buy now</button>}
        {showBasket && <Booking cart={props.cart}/> }

        </section>
        // Check: do/can we call each thing an "item"? Can we use "amount" and "price"? Can we use "name" instead of "id"? 
    )
}