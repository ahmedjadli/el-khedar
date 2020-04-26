import React, { useState } from "react";
import Layout from "../layouts";
import CartList from "../components/cart";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import OrderValidationModal from "../components/orderValidationModal";

const Cart = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
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
            <h2>My cart</h2>
            <br />
            <br />
            <CartList />
            <br />
            <MDBBtn
              // onClick={onClick}
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
            <OrderValidationModal isOpen={isOpen} setisOpen={setisOpen} />
          </MDBContainer>
        </main>
      </Layout>
    </div>
  );
};

export default Cart;
