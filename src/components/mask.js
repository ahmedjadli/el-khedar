import React from "react";
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const Intro = ({ children }) => {
  return (
    <MDBContainer style={{ marginTop: "25vh", marginBottom: "50vh" }}>
      <MDBRow>
        <MDBCol md="12" className="white-text text-center">
          <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">
            EL KHEDAR
          </h2>
          <hr className="hr-light my-4 w-75" />
          <h4 className="subtext-header h4-responsive mt-2 mb-4">
            Le BIO pour tous : des produits du quotidien du ferme à vos main{" "}
            <span style={{ fontSize: "18pt" }} className="green-text">
              à prix reduit !
            </span>
          </h4>
          <MDBBtn color="green">
            <MDBIcon icon="chevron-down" className="mr-2" /> Savoir plus
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Intro;
