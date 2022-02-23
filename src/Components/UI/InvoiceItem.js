import React from "react";
import classes from "./invoiceItem.module.scss";
const InvoiceItem = (props) => {
  const clickHandler = () => {
    props.deleteHandler(props.id);
  };
  return (
    <div className={classes.container}>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button onClick={clickHandler}>Trash </button>
    </div>
  );
};

export default InvoiceItem;
