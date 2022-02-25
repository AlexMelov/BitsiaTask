import React, { useContext } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceLine from "../UI/InvoiceLine";
import classes from "./Form.module.scss";

const FormComponent = () => {
  const ctx = useContext(AuthContext);
  //
  const removeHandler = (e) => {
    e.preventDefault();
    console.log("REmove");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.postHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>General Data</h3>
      <div className={classes.generalData}>
        <label htmlFor="customerNo">Customer no.</label>
        <input id="customerNo" />
        <label htmlFor="Address">Address</label>
        <input id="Address" />
        <label htmlFor="name">Name</label>
        <input id="name" />
        <label htmlFor="ZIP">ZIP</label>
        <input id="ZIP" />
        <label htmlFor="contactPerson">Contact Person</label>
        <input id="contactPerson" />
        <label htmlFor="location">Location</label>
        <input id="location" />
      </div>
      <h2>Invoice Data</h2>
      <div className={classes.generalData}>
        <label htmlFor="invoiceNo">Invoice no.</label>
        <input id="invoiceNo" />
        <label htmlFor="invoiceData">Invoice Data</label>
        <input id="invoiceData" />
        <label htmlFor="Period">Period</label>
        <input id="Period" />
        <label htmlFor="dueDate">Due date</label>
        <input id="dueDate" />
      </div>
      <div className={classes.titles}>
        <p>Pos.</p>
        <p>Name.</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Unit Price</p>
        <p>Sum</p>
        <p></p>
      </div>
      {ctx.addObj.map((item, idx) => (
        <InvoiceLine removeHandler={removeHandler} key={idx} />
      ))}
      <button type="button" onClick={ctx.addNewObj}>
        +
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormComponent;
