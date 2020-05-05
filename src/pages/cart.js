import React, { useState, useEffect } from "react";
import Layout from "../layouts";
import CartList from "../components/cart";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import OrderValidationModal from "../components/orderValidationModal";

const Cart = () => {
  const [isOpen, setisOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("CartItems")));
  }, []);
  return (
    <div>
      <Layout>
        <main
          style={{
            paddingTop: "8rem",
            backgroundColor: "rgba(221, 221, 221, 0.5)",
            height: "100%",
          }}
        >
          <MDBContainer>
            <h2>Mon Panier</h2>
            <br />
            <br />
            <CartList setCartItems={setCartItems} />
            <br />
            <span>Total : </span>
            <MDBBtn
              style={{ fontSize: "11px" }}
              color="green"
              center
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              Commander <MDBIcon icon="cart-plus" />
            </MDBBtn>
            <br />
            <br />
            <br />

            <OrderValidationModal
              isOpen={isOpen}
              setisOpen={setisOpen}
              cartItems={cartItems}
            />
          </MDBContainer>
        </main>
      </Layout>
    </div>
  );
};

export default Cart;
