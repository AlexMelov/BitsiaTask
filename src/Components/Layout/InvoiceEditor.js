import React, { useContext, useState } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceItem from "../UI/InvoiceItem";
import classes from "./invoiceEditor.module.scss";

const InvoiceEditor = (props) => {
  const ctx = useContext(AuthContext);

  const allNet = ctx.formObj.reduce((prev, next) => {
    return +prev + +next.sum;
  }, 0);

  const atSt = (+allNet * 19) / 100;
  const gross = +allNet + +atSt;

  return (
    <div className={classes.container}>
      <h4>InvoiceEditor</h4>
      <h5>Invoices</h5>

      {ctx.invoiceArr.map(({ name, custoremrNo }, idx) => (
        <InvoiceItem
          key={idx}
          id={name}
          name={name}
          custoremrNo={custoremrNo}
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
          <p>{allNet.toFixed(2)}</p>
          <p>{atSt.toFixed(2)}</p>
          <p>{gross.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEditor;
