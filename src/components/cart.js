import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import CartItem from "./cart_item";
import "../style/global.css";

const CartList = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    setcartItems(JSON.parse(sessionStorage.getItem("CartItems")));
  }, []);

  const deleteItem = (name) => {
    let CT = cartItems.filter((item) => {
      return item.product.name !== name;
    });
    setcartItems(CT);
    sessionStorage.setItem("CartItems", JSON.stringify(CT));
  };

  let isEmpty = !cartItems || !cartItems.length;

  console.log(cartItems);
  return (
    <MDBTable striped bordered>
      <MDBTableHead>
        <tr>
          <th className="smaller-th">#</th>
          <th className="smaller-th">Nom</th>
          <th className="smaller-th">Prix unitaire</th>
          <th className="smaller-th">Quantité</th>
          <th className="smaller-th">Totale</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {!isEmpty
          ? cartItems.map((item) => (
              <CartItem item={item} deleteItem={deleteItem} />
            ))
          : "Your cart is empty"}
      </MDBTableBody>
    </MDBTable>
  );
};

export default CartList;
