import React, { useContext } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceItem from "../UI/InvoiceItem";
import classes from "./invoiceEditor.module.scss";

const InvoiceEditor = (props) => {
  const ctx = useContext(AuthContext);

  const redSum = ctx.invoiceArr.map((item) => (+item.price * item.value) / 100);

  const netPrice = redSum.reduce((prev, next) => prev + next, 0);

  const atSt = (netPrice * 19) / 100;
  const gross = netPrice + atSt;

  return (
    <div className={classes.container}>
      <h4>InvoiceEditor</h4>
      <h5>Invoices</h5>

      {ctx.invoiceArr.map(({ name, price, value, desc }, idx) => (
        <InvoiceItem
          key={idx}
          id={name}
          desc={desc}
          name={name}
          price={price}
          quantity={value}
        />
      ))}
      <button className={classes.container__addBtn}>+</button>
      <div className={classes.allNet}>
        <div className={classes.sum}>
          <p>Net</p>
          <p>At.St.(19%)</p>
          <p>Gross</p>
        </div>
        <div className={classes.sum}>
          <p>{netPrice.toFixed(2)}</p>
          <p>{atSt.toFixed(2)}</p>
          <p>{gross.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEditor;
