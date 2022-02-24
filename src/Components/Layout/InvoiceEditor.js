import React, { useContext } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceItem from "../UI/InvoiceItem";
import classes from "./invoiceEditor.module.scss";

const InvoiceEditor = (props) => {
  const ctx = useContext(AuthContext);
  let arr = ctx.invoiceArr;
  console.log(arr);

  const deleteHandler = (id) => {
    const filtered = arr.filter((item) =>
      +item.id !== +id ? console.log(id) : null
    );
    console.log(filtered);
  };

  const reducedNet = ctx.invoiceArr.reduce((prev, next) => {
    return +prev + +next.price;
  }, 0);

  const atSt = (reducedNet * 19) / 100;
  const gross = +reducedNet + +atSt;

  return (
    <div className={classes.container}>
      <h4>InvoiceEditor</h4>
      <h5>Invoices</h5>
      {ctx.invoiceArr.map(({ name, price }, idx) => (
        <InvoiceItem
          key={idx}
          id={idx}
          name={name}
          price={price}
          deleteHandler={() => deleteHandler(idx)}
        />
      ))}
      <button className={classes.container__addBtn}>+</button>
      <div className={classes.allNet}>
        <div>
          <p>Net</p>
          <p>At.St. (19%)</p>
          <p>Gross</p>
        </div>
        <div>
          <p>{reducedNet}</p>
          <p>{atSt}</p>
          <p>{gross}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEditor;
