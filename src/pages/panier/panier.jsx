import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Vos articles : </h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total : {totalAmount} € </p>
          <button onClick={() => navigate("/")}> Continuez vos achats </button>

          <hr></hr><br></br>
      <h1>Votre profil : </h1><br></br>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" aria-required>
      <Form.Label>Nom : </Form.Label>
        <Form.Control type="text" placeholder="Votre nom" /><br></br><br></br>
        <Form.Label>Email : </Form.Label>
        <Form.Control type="email" placeholder="Votre email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"><br></br>
        <Form.Label>Adresse : </Form.Label>
        <Form.Control type="text" placeholder="Votre adresse" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <div className="form-group"><br></br>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        placeholder="Commentaire"
      />
    </div>
    <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Commander{" "}
          </button>
    </Form>
        </div>
        
      ) : (
        <h1> Votre panier est vide. </h1>
      )}
    </div>
  );
};