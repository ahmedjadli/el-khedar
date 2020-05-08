import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "../style/card.css";

const CardExample = ({ infos, CartItems, setCartItems }) => {
  const [qte, setQte] = useState(1);

  const onClick = () => {
    console.log(CartItems);
    let verif = CartItems.find((F_item) => {
      return F_item.product.name === infos.name;
    });
    let item = {};
    let CT = CartItems;
    if (verif) {
      CT = CartItems.filter((D_item) => {
        return D_item.product.id !== verif.product.id;
      });
      item = {
        product: verif.product,
        qt: parseInt(verif.qt) + parseInt(qte),
      };
    } else {
      item = {
        product: infos,
        qt: qte,
      };
    }
    CT.push(item);
    setCartItems(CT);
    sessionStorage.setItem("CartItems", JSON.stringify(CT));
    console.log(CartItems, CT);
  };
  return (
    <MDBCol size="4" style={{ maxWidth: "20rem", paddingBottom: "1rem" }}>
      <MDBCard key={infos.id} waves>
        <MDBCardImage
          className="img-fluid"
          src={infos.image.url}
          alt=""
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{infos.name}</MDBCardTitle>
          <MDBCardText>
            <b style={{ color: "#000" }}>Price :</b> {infos.price} MAD <br />
            <b style={{ color: "#000" }}>Quantité :</b>{" "}
            <input
              type="number"
              min="1"
              value={qte}
              onChange={(e) => {
                setQte(e.target.value);
              }}
              style={{
                width: "20%",
                background: "light-grey",
                borderColor: "light-grey",
                borderStyle: "solid",
                borderRadius: "10px",
                textAlign: "center",
              }}
            />
            <span> KG</span>
          </MDBCardText>
          <MDBBtn
            onClick={onClick}
            style={{ fontSize: "11px" }}
            color="green"
            center
          >
            Ajouter aux panier <MDBIcon icon="cart-plus" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
