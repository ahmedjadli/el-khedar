import React from "react";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";

const OrderValidationModal = ({ isOpen, setisOpen }) => {
  return (
    <MDBModal isOpen={isOpen} fullHeight position="right">
      <MDBModalHeader>Valider votre commande:</MDBModalHeader>
      <MDBModalBody>
        <form>
          <label htmlFor="email" className="grey-text">
            Email :
          </label>
          <input type="email" id="email" className="form-control" />
          <br />
          <label htmlFor="nom" className="grey-text">
            Nom Complet :
          </label>
          <input type="text" id="nom" className="form-control" />
          <br />
          <label htmlFor="phone" className="grey-text">
            N° de Telephone :
          </label>
          <input type="text" id="phone" className="form-control" />
          <br />
          <label htmlFor="phone" className="grey-text">
            Votre commande :
          </label>
          <table></table>
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn
          onClick={() => {
            setisOpen(!isOpen);
          }}
          color="light-green"
        >
          Retour
        </MDBBtn>
        <MDBBtn color="green">Valider</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default OrderValidationModal;
