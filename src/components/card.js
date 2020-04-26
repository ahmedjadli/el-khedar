import React, { useState } from "react";
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

const CardExample = ({ infos, setIsShown }) => {
  const onClick = () => {
    let CartItems = JSON.parse(sessionStorage.getItem("CartItems"));
    let verif = CartItems.find((F_item) => {
      return F_item.product.name === infos.name;
    });
    let item = {};
    if (verif) {
      CartItems = CartItems.filter((D_item) => {
        return D_item.product.id !== verif.product.id;
      });
      item = {
        product: verif.product,
        qt: verif.qt + 1,
      };
    } else {
      item = {
        product: infos,
        qt: 1,
      };
    }

    CartItems.push(item);
    sessionStorage.setItem("CartItems", JSON.stringify(CartItems));
    setIsShown(true);
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
            <b style={{ color: "#000" }}>Price :</b> {infos.price} MAD
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
