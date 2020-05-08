import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const FeaturesPage = ({ setIsOpen }) => {
  return (
    <MDBContainer
      style={{ padding: "2em 0 6em " }}
      tag="section"
      className="text-center my-5"
    >
      <h2 className="h1-responsive font-weight-bold my-5">Nos Services</h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">
        Dans le cadre de satisfaire nos client , EL KHEDAR engage à vous
        garentir :{" "}
      </p>
      <br />
      <MDBRow>
        <MDBCol md="4">
          <MDBIcon icon="leaf" size="4x" className="green-text" />
          <h5 className="font-weight-bold my-4">Produits 100% BIO</h5>
          <p className="grey-text mb-md-0 mb-5">
            Des Légumes et fruits frais d’une meilleure qualité, 100% BIO et
            soigneusement sélectionnés du ferme à vos mains. vous pouvez aussi{" "}
            <strong
              onClick={() => {
                setIsOpen(true);
              }}
              style={{ cursor: "pointer" }}
              className="green-text"
            >
              visiter l'un de nos fermes
            </strong>
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon icon="truck" size="4x" className="cyan-text" />
          <h5 className="font-weight-bold my-4">Livraison à domicile</h5>
          <p className="grey-text mb-md-0 mb-5">
            On vous livre jusqu'à chez vous vos panier sur mesures du{" "}
            <strong>Lundi</strong> au <strong>Dimanche</strong> de{" "}
            <strong>9h00</strong> à <strong>19h00</strong> rapidement et
            gratuitement pour chaque commande qui dépasse 200dhs
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon icon="headset" size="4x" className="light-green-text" />
          <h5 className="font-weight-bold my-4">
            Un support post et pré-livraison
          </h5>
          <p className="grey-text mb-md-0 mb-5">
            Un support actif de 9h à 19h qui repond a toutes vos demandes, par
            nos numéros de Téléphone, Email, et reseaux sociaux.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FeaturesPage;
