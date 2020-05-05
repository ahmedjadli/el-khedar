import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-0">
      <MDBContainer>
        <MDBRow style={{ paddingTop: "1em" }} className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <MDBIcon
                fab
                icon="facebook-f"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
              <MDBIcon
                fab
                icon="twitter"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
              <MDBIcon
                fab
                icon="whatsapp"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
              <MDBIcon
                fab
                icon="linkedin-in"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
              <MDBIcon
                fab
                icon="instagram"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
            </div>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow
          style={{ paddingBottom: "2em" }}
          className="d-flex text-left justify-content-center mb-md-0 mb-4"
        >
          <MDBCol md="5" sm="12" className="mt-5">
            <h4>À propos de nous</h4>
            <br />
            <br />
            <p style={{ lineHeight: "1.7rem" }}>
              EL KHEDAR est une plateforme de vente des légumes et fruits BIO en
              ligne. Nous vous offrons un accès à des produits 100% BIO, frais
              et d’une meilleure qualité avec une livraison à domicile pour
              promouvoir et soutenir une vie saine d’une manière consciente et
              durable qui respecte l’environnement, et soutient les fermes
              locales qui pratiquent l'agriculture BIO.
            </p>
          </MDBCol>
          <MDBCol md="2" sm="0"></MDBCol>
          <MDBCol md="5" sm="12" className="mt-5">
            <h4>Contactez-nous</h4>
            <br />
            <form style={{ lineHeight: "1.7rem" }}>
              <label htmlFor="email" className="white-text">
                Email :
              </label>
              <input
                required
                type="email"
                id="email"
                className="form-control"
              />

              <label htmlFor="name" className="white-text">
                Nom complet :
              </label>
              <input required type="text" id="name" className="form-control" />

              <label htmlFor="msg" className="white-text">
                Message :
              </label>
              <textarea
                required
                type="text"
                id="msg"
                className="form-control"
              />
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: EL KHEDAR
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
