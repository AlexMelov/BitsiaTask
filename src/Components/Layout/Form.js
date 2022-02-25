import React, { useContext, useReducer } from "react";
import AuthContext from "../../store/invoice-context";
import InvoiceLine from "../UI/InvoiceLine";
import classes from "./Form.module.scss";

const FormComponent = () => {
  const ctx = useContext(AuthContext);
  //

  const initialState = {
    customerNo: "",
    address: "",
    name: "",
    zip: "",
    contact: "",
    location: "",
    invoiceNo: "",
    invoiceData: "",
    period: "",
    dueDate: "",
  };

  const reducerHandler = (state, action) => {
    if (action.type === "CUSTOMER_NO") {
      return {
        ...state,
        customerNo: action.customerNo,
      };
    }
    if (action.type === "ADDRESS") {
      return {
        ...state,
        address: action.address,
      };
    }
    if (action.type === "NAME") {
      return {
        ...state,
        name: action.name,
      };
    }
    if (action.type === "ZIP") {
      return {
        ...state,
        zip: action.zip,
      };
    }
    if (action.type === "LOCATION") {
      return {
        ...state,
        location: action.location,
      };
    }
    if (action.type === "CONTACT") {
      return {
        ...state,
        contact: action.contact,
      };
    }
    if (action.type === "INVOICE_NO") {
      return {
        ...state,
        invoiceNo: action.invoiceNo,
      };
    }
    if (action.type === "INVOICE_DATA") {
      return {
        ...state,
        invoiceData: action.invoiceData,
      };
    }
    if (action.type === "PERIOD") {
      return {
        ...state,
        period: action.period,
      };
    }
    if (action.type === "DUE_DATE") {
      return {
        ...state,
        dueDate: action.dueDate,
      };
    }
    return initialState;
  };
  const [allState, dispatchState] = useReducer(reducerHandler, initialState);

  const customerNoHandler = (e) => {
    dispatchState({ type: "CUSTOMER_NO", customerNo: e.target.value });
  };
  const addressHandler = (e) => {
    dispatchState({ type: "ADDRESS", address: e.target.value });
  };
  const nameHandler = (e) => {
    dispatchState({ type: "NAME", name: e.target.value });
  };
  const zipHandler = (e) => {
    dispatchState({ type: "ZIP", zip: e.target.value });
  };
  const contactHandler = (e) => {
    dispatchState({ type: "CONTACT", contact: e.target.value });
  };
  const locationHandler = (e) => {
    dispatchState({ type: "LOCATION", location: e.target.value });
  };
  const invNoHandler = (e) => {
    dispatchState({ type: "INVOICE_NO", invoiceNo: e.target.value });
  };
  const invDataHandler = (e) => {
    dispatchState({ type: "INVOICE_DATA", invoiceData: e.target.value });
  };
  const periodHandler = (e) => {
    dispatchState({ type: "PERIOD", period: e.target.value });
  };
  const dueDateHandler = (e) => {
    dispatchState({ type: "DUE_DATE", dueDate: e.target.value });
  };

  const removeHandler = (e) => {
    e.preventDefault();
    console.log("Remove");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.postHandler();
    console.log(allState);
    dispatchState(initialState);
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>General Data</h3>
      <div className={classes.generalData}>
        <label htmlFor="customerNo">Customer no.</label>
        <input
          id="customerNo"
          value={allState.customerNo}
          onChange={customerNoHandler}
        />
        <label htmlFor="Address">Address</label>
        <input
          id="Address"
          value={allState.address}
          onChange={addressHandler}
        />
        <label htmlFor="name">Name</label>
        <input id="name" value={allState.name} onChange={nameHandler} />
        <label htmlFor="ZIP">ZIP</label>
        <input id="ZIP" value={allState.zip} onChange={zipHandler} />
        <label htmlFor="contactPerson">Contact Person</label>
        <input
          id="contactPerson"
          value={allState.contact}
          onChange={contactHandler}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={allState.location}
          onChange={locationHandler}
        />
      </div>
      <h2>Invoice Data</h2>
      <div className={classes.generalData}>
        <label htmlFor="invoiceNo">Invoice no.</label>
        <input
          id="invoiceNo"
          value={allState.invoiceNo}
          onChange={invNoHandler}
        />
        <label htmlFor="invoiceData">Invoice Data</label>
        <input
          id="invoiceData"
          value={allState.invoiceData}
          onChange={invDataHandler}
        />
        <label htmlFor="Period">Period</label>
        <input id="Period" value={allState.period} onChange={periodHandler} />
        <label htmlFor="dueDate">Due date</label>
        <input
          id="dueDate"
          value={allState.dueDate}
          onChange={dueDateHandler}
        />
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
      {ctx.invLineArr.map((item, idx) => (
        <InvoiceLine removeHandler={removeHandler} key={idx} />
      ))}
      <button type="button" onClick={ctx.addNewObj}>
        +
      </button>
      <button type="submit">Save</button>
      <div className={classes.allNet}>
        <div className={classes.sum}>
          <p>Net</p>
          <p>At.St.(19%)</p>
          <p>Gross</p>
        </div>
        <div className={classes.sum}>
          <p>{ctx.reducedSum}</p>
          <p>{"ddv"}</p>
          <p>{"Gross"}</p>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
