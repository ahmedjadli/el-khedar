import React, { useState, useEffect } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { Link } from "gatsby";
import CartItem from "./cart_item";
import "../style/global.css";

const CartList = ({ cartItems, setCartItems }) => {
  const deleteItem = (name) => {
    let CT = cartItems.filter((item) => {
      return item.product.name !== name;
    });
    setCartItems(CT);
    sessionStorage.setItem("CartItems", JSON.stringify(CT));
  };

  let isEmpty = !cartItems || !cartItems.length;

  console.log(cartItems);

  return (
    <div>
      {!isEmpty ? (
        <MDBTable striped bordered>
          <MDBTableHead>
            <tr style={{ backgroundColor: "white", textAlign: "center" }}>
              <th className="smaller-th">#</th>
              <th className="smaller-th">Nom</th>
              <th className="smaller-th">Prix unitaire</th>
              <th className="smaller-th">Quantité</th>
              <th className="smaller-th">Totale</th>
              <th></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {cartItems.map((item) => (
              <CartItem item={item} deleteItem={deleteItem} />
            ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <div>
          <center>
            <br />
            <h2>Votre Panier et vide</h2>

            <br />
            <p>visiter notre shop pour remplir votre panier</p>
            <br />
            <MDBIcon size="5x" icon="cart-arrow-down" className="grey-text" />
            <br />
            <br />
            <br />
            <Link
              style={{
                fontSize: "13px",

                padding: "15px 20px 15px 15px",
              }}
              className="white-text light-green"
              to="/shop"
            >
              {" "}
              accéder au Shop <MDBIcon icon="angle-right" />
            </Link>

            <br />
            <br />
            <br />
          </center>
        </div>
      )}
    </div>
  );
};
export default CartList;
