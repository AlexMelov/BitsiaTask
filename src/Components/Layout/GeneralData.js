import React from "react";
import classes from "./GeneralData.module.scss";

const GeneralData = () => {
  const addItemHandler = () => {
    console.log("Adding Item");
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>General Data</h3>
      <div className={classes.generalData}>
        <label htmlFor="customerNo">Customer no.</label>
        <input id="customerNo" />
        <label htmlFor="name">name no.</label>
        <input id="name" />
        <label htmlFor="price">price no.</label>
        <input id="price" />
        <label htmlFor="cust1">Customer no.</label>
        <input id="cust1" />
        <label htmlFor="name2">name no.</label>
        <input id="name2" />
        <label htmlFor="price2">price no.</label>
        <input id="price2" />
      </div>
      <h2>Invoice Data</h2>
      <div className={classes.generalData}>
        <label htmlFor="customerNo">Customer no.</label>
        <input id="customerNo" />
        <label htmlFor="name">name no.</label>
        <input id="name" />
        <label htmlFor="cust1">Customer no.</label>
        <input id="cust1" />
        <label htmlFor="name2">name no.</label>
        <input id="name2" />
      </div>
      <h2>Invoice Lines</h2>
      <div className={classes.generalData}>
        <button onClick={addItemHandler}>+</button>
      </div>
    </form>
  );
};

export default GeneralData;
