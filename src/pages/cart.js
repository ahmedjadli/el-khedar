import React, { useState, useEffect } from "react";
import Layout from "../layouts";
import CartList from "../components/cart";
import { MDBContainer, MDBBtn, MDBIcon, MDBAlert } from "mdbreact";
import OrderValidationModal from "../components/orderValidationModal";
import SEO from "../components/seo";

const Cart = () => {
  const [isOpen, setisOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState("");
  const [total, setTotal] = useState(0);
  let isEmpty = !cartItems || !cartItems.length;

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem("CartItems")));
  }, []);
  return (
    <div>
      <Layout>
        <SEO
          title="Panier"
          keywords={[
            `gatsby`,
            `MDBReact`,
            `react`,
            `Material Design For Bootstrap`,
          ]}
        />
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

            {id !== "" ? (
              <MDBAlert color="success">
                <h4 className="alert-heading">Commande validé !</h4>
                <hr />
                <p>
                  le ID de votre commande est : <strong>{id}</strong> <br />
                  vous allez recevoir un appel du livreur pour valider le temps
                  de livraison <br />
                  pour toute sorte d'informations ou reclamation veuillez nous
                  contactez l'ID de votre commande pour que nous pouvons vous
                  aider .
                  <br />
                  <br />
                  Bon Journée !
                </p>
              </MDBAlert>
            ) : (
              ""
            )}

            <center>
              <span hidden={isEmpty ? true : false}>
                Total :{"  "}
                <strong
                  style={{
                    margin: "40px 5px 0px 5px",
                    borderColor: "LightGray",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: "0.6em 2em 0.8em 2em",
                    backgroundColor: "white",
                  }}
                >
                  {total} MAD
                </strong>{" "}
              </span>

              <MDBBtn
                hidden={isEmpty ? true : false}
                style={{ fontSize: "11px" }}
                color="green"
                center
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              >
                Commander <MDBIcon icon="cart-plus" />
              </MDBBtn>
            </center>
            <br />
            <CartList cartItems={cartItems} setCartItems={setCartItems} />
            <br />

            <br />
            <br />
            <br />

            <OrderValidationModal
              total={total}
              setTotal={setTotal}
              setId={setId}
              isOpen={isOpen}
              setisOpen={setisOpen}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </MDBContainer>
        </main>
      </Layout>
    </div>
  );
};

export default Cart;
