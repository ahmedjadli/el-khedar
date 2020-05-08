/* global gapi */
import React, { useState, useEffect } from "react";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { v4 as uuidv4 } from "uuid";

// Initialize google sheet API
const SPREADSHEET_ID = "1EaVjpkihUbodvHIkSNRheUINmJwkwP7-UK32v63C-Kw";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const API_KEY = "AIzaSyBumM5H3dnzyurQaNvui2qxR2i0R70brSU";
const CLIENT_ID =
  "855551190630-rv217squ1bv5k404jg0ca48bne0sv27s.apps.googleusercontent.com";

// initializing google client
const initClient = () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
    })
    .then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.isSignedInStatus);
      this.updateSignedInStatus(
        window.gapi.auth2.getAuthInstance().isSignedIn.get()
      );
    });
};

// ****** Component ********
const OrderValidationModal = ({
  isOpen,
  setisOpen,
  cartItems,
  setCartItems,
  setId,
  setTotal,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [pay, setPay] = useState(2);

  useEffect(() => {
    gapi.load("client:auth2", initClient());
    console.log(cartItems);
  }, []);

  //total cart calculation
  const totalCart = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.qt * item.product.price;
    });
    setTotal(total);
    return total;
  };

  //Retreiving values to submit and put them in array
  const submissionValues = () => {
    let values = [];
    let ref = uuidv4();
    setId(ref);
    let commande = "";
    cartItems.forEach((item) => {
      commande += item.qt + "x" + item.product.name + "/";
    });
    let payment =
      pay === 1 ? "paiment par carte validé" : "paiment à la livraison";
    values.push(ref, email, name, tel, adresse, commande, payment, totalCart());
    return values;
  };

  //after submit
  const postSubmit = () => {
    setisOpen(false);
    setName("");
    setEmail("");
    setAdresse("");
    setTel("");
    setCartItems([]);
    sessionStorage.setItem("CartItems", JSON.stringify([]));
  };

  //submiting method
  const clickHandle = (e) => {
    e.preventDefault();
    const params = {
      spreadsheetId: SPREADSHEET_ID,
      range: "sheet1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
    };

    const valueRangeBody = {
      values: [submissionValues()],
    };

    let request = window.gapi.client.sheets.spreadsheets.values.append(
      params,
      valueRangeBody
    );
    request.then(
      (res) => {
        console.log(res.result);
        postSubmit();
      },
      (reason) => {
        console.log("error: " + reason.result.error.message);
      }
    );
  };

  return (
    <MDBModal isOpen={isOpen} fullHeight position="right">
      <MDBModalHeader>Valider votre commande:</MDBModalHeader>
      <form onSubmit={clickHandle}>
        <MDBModalBody>
          <label htmlFor="email" className="grey-text">
            Email :
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="form-control"
          />
          <div className="invalid-feedback">
            Veuillez entrer votre Email correctement
          </div>
          <br />
          <label htmlFor="nom" className="grey-text">
            Nom Complet :
          </label>
          <input
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="nom"
            className="form-control"
          />
          <br />
          <label htmlFor="phone" className="grey-text">
            N° de Telephone :
          </label>
          <input
            required
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
            type="number"
            id="phone"
            className="form-control"
          />
          <br />
          <label htmlFor="adresse" className="grey-text">
            Adresse :
          </label>
          <textarea
            required
            value={adresse}
            onChange={(e) => {
              setAdresse(e.target.value);
            }}
            type="number"
            id="adresse"
            className="form-control"
          />
          <br />
          <label htmlFor="payment" className="grey-text">
            méthode de paiment :
          </label>
          <br />
          <input
            onClick={() => {
              setPay(2);
            }}
            checked={pay === 2 ? true : false}
            type="radio"
          />{" "}
          Paiment à la livraison
          <br />
          <input
            onClick={() => {
              setPay(1);
            }}
            checked={pay === 1 ? true : false}
            type="radio"
            value="paiment par carte"
          />{" "}
          Paiment par carte
          <br />
          <div hidden={pay === 2 ? true : false}>
            <br />
            <input
              pattern="[\d| ]{16,22}"
              required={pay === 1 ? true : false}
              type="number"
              placeholder="N° de carte"
              className="form-control"
            />
            <br />
            <input
              pattern="\d\d/\d\d"
              required={pay === 1 ? true : false}
              style={{ width: "49%", display: "inline" }}
              type="text"
              placeholder="Date (MM/YY)"
              className="form-control"
            />
            {"  "}
            <input
              placeholder="CVC"
              required={pay === 1 ? true : false}
              style={{ width: "49%", display: "inline" }}
              type="number"
              placeholder="CCV"
              className="form-control"
            />
            <br />
            <br />
          </div>
          <br />
          <label htmlFor="" className="grey-text">
            Votre commande :
          </label>
          <table>
            {cartItems.map((item) => (
              <tr key={item.product.id}>
                <td>
                  {item.qt}x{item.product.name}
                </td>
              </tr>
            ))}
          </table>
          <br />
          <label htmlFor="phone" className="grey-text">
            Le total en MAD :
          </label>
          <p style={{ fontSize: "140%" }}>{totalCart()} MAD</p>
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
          <MDBBtn type="submit" color="green">
            Valider
          </MDBBtn>
        </MDBModalFooter>
      </form>
    </MDBModal>
  );
};

export default OrderValidationModal;
