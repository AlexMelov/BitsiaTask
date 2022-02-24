import React, { useContext, useState } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceLine from "../UI/InvoiceLine";
import classes from "./GeneralData.module.scss";

const GeneralData = () => {
  const ctx = useContext(AuthContext);
  const [count, setCount] = useState([]);
  const [num, setNum] = useState(0);

  const addItemHandler = () => {
    setNum(num + 1);
    setCount([...count, num]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const removeHandler = (e) => {
    e.target.parentElement.parentElement.remove();
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
      <div className={classes.linesContainer}>
        <table className={classes.tableDiv}>
          {count.length > 0 && (
            <thead>
              <tr>
                <td>Pos.</td>
                <td>Name.</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Unit Price</td>
                <td>Sum</td>
                <td></td>
              </tr>
            </thead>
          )}
          {count.map((item, idx) => (
            <InvoiceLine
              key={idx}
              id={idx}
              tableDiv={classes.tableDiv}
              removeHandler={removeHandler}
            />
          ))}
        </table>
      </div>
      <button onClick={addItemHandler}>+</button>
      <button type="submit" onClick={ctx.sendData}>
        Save
      </button>
    </form>
  );
};

export default GeneralData;
