import React, { useContext } from "react";
import AuthContext from "../../store/invoice-context";
import classes from "./invoiceItem.module.scss";

const InvoiceItem = (props) => {
  const ctx = useContext(AuthContext);
  const deleteHandler = (e) => {
    const filterDel = ctx.invoiceArr.filter((item) =>
      item.name !== props.id && item.descr !== props.descr ? item : null
    );
    ctx.delHandler(filterDel);
  };
  const reducedSum = (props.price * props.quantity) / 100;

  return (
    <div className={classes.container}>
      <h3>{props.name}</h3>
      <p>{reducedSum}€</p>
      <button onClick={deleteHandler}>Trash </button>
    </div>
  );
};

export default InvoiceItem;
