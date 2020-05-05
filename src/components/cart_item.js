import React from "react";
import { MDBCloseIcon } from "mdbreact";

function CartItem({ item, deleteItem }) {
  return (
    <tr
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
      key={item.product.id}
    >
      <td style={{ width: "16%" }}>
        <img
          style={{ width: "90%" }}
          // className="img-fluid"
          src={item.product.image.url}
          alt={`product: ${item.product.name}`}
          waves
        />
      </td>
      <td className="smaller-th" style={{ width: "16%" }}>
        {item.product.name}
      </td>
      <td className="smaller-th" style={{ width: "16%" }}>
        {item.product.price} MAD
      </td>
      <td className="smaller-th" style={{ width: "16%" }}>
        {item.qt}
      </td>
      <td className="smaller-th" style={{ width: "16%" }}>
        {item.product.price * item.qt} MAD
      </td>
      <td style={{ width: "4%" }}>
        <MDBCloseIcon
          size="5"
          ariaLabel="supprimer"
          onClick={() => {
            deleteItem(item.product.name);
          }}
        />
      </td>
    </tr>
  );
}

export default CartItem;
