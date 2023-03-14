import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./order";
import Placeorder from "./placeorder";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <div className="d-flex mb-2">
        <p className="summa">
          {" "}
          Сумма: {new Intl.NumberFormat().format(summa)}₽
        </p>
        <NavLink className="Orderbtn" to="/ordering">
          Оформить заказ
        </NavLink>
      </div>
    </div>
  );
};

const showNorthing = () => {
  return (
    <div className="empty">
      <h2>Вы еще не добавили товары в корзину</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className=" container shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNorthing()}
          </div>
        )}
      </div>
    </header>
  );
}
