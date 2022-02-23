import React, { useContext, useState } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceItem from "../UI/InvoiceItem";
import classes from "./invoiceEditor.module.scss";
const DUMMY_ARR = [
  { id: 0, name: "Invoice1", price: 29.55 },
  { id: 1, name: "Invoice2", price: 39.55 },
  { id: 2, name: "Invoice3", price: 569.55 },
];
const InvoiceEditor = (props) => {
  const [invoices, setInvoices] = useState(DUMMY_ARR);

  const deleteHandler = (id) => {
    const filtered = invoices.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setInvoices([...filtered]);
  };
  const ctx = useContext(AuthContext);

  const reducedNet = invoices.reduce((prev, next) => {
    return prev + next.price;
  }, 0);

  const atSt = ((reducedNet * 19) / 100).toFixed(2);
  const gross = (+reducedNet + +atSt).toFixed(2);

  return (
    <div className={classes.container}>
      {!ctx.isLoggedIn && <h4>InvoiceEditor</h4>}
      <h5>Invoices</h5>
      {invoices &&
        invoices.map(({ id, name, price }) => (
          <InvoiceItem
            key={id}
            id={id}
            name={name}
            price={price}
            deleteHandler={() => deleteHandler(id)}
          />
        ))}
      <button className={classes.container__addBtn} onClick={ctx.onLogout}>
        +
      </button>
      <div className={classes.allNet}>
        <div>
          <p>Net</p>
          <p>At.St. (19%)</p>
          <p>Gross</p>
        </div>
        <div>
          <p>{reducedNet.toFixed(2)}</p>
          <p>{atSt}</p>
          <p>{gross}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEditor;
