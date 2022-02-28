import React, { useContext, useReducer, useState } from "react";
import AuthContext from "../../store/invoice-context";
// import InvoiceLine from "../UI/InvoiceLine";
import classes from "./Form.module.scss";
import "./form.scss";

const FormComponent = () => {
  const ctx = useContext(AuthContext);
  const [product, setProduct] = useState([]);

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

  const initialStateForProducts = {
    prodName: "",
    desc: "",
    value: 0,
    price: 0,
  };

  const reducerProductHandler = (state, action) => {
    if (action.type === "PROD_NAME") {
      return {
        ...state,
        prodName: action.prodName,
      };
    }
    if (action.type === "DESC") {
      return {
        ...state,
        desc: action.desc,
      };
    }
    if (action.type === "VALUE") {
      return {
        ...state,
        value: action.value,
      };
    }
    if (action.type === "PRICE") {
      return {
        ...state,
        price: action.price,
      };
    }
    return initialStateForProducts;
  };
  const [productState, dispatchProdState] = useReducer(
    reducerProductHandler,
    initialStateForProducts
  );

  const prodNameHandler = (e) => {
    dispatchProdState({ type: "PROD_NAME", prodName: e.target.value });
  };
  const descrHandler = (e) => {
    dispatchProdState({ type: "DESC", desc: e.target.value });
  };
  const quantityHandler = (e) => {
    dispatchProdState({ type: "VALUE", value: e.target.value });
  };
  const priceHandler = (e) => {
    dispatchProdState({ type: "PRICE", price: e.target.value });
  };

  // Button Handlers

  const removeHandler = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.postHandler();
    dispatchState(initialState);
    dispatchProdState(initialStateForProducts);
    setProduct([]);
  };
  const addNewItem = () => {
    setProduct([...product, obj]);
    dispatchProdState(initialStateForProducts);
    // ctx.addNewObj(prodObj);
  };

  const sumPrice = (+productState.value * +productState.price) / 100;

  const obj = {
    ...productState,
    sum: sumPrice,
  };
  // ctx.itemObj(obj);

  const productReducedSum = product.reduce((prev, next) => {
    return prev + +next.sum;
  }, 0);
  const atSt = (+productReducedSum * 19) / 100;
  const gross = +productReducedSum + +atSt;
  //

  let invObjAll = { ...obj, ...allState, productReducedSum };
  ctx.itemObj(invObjAll);
  // ctx function to send all obj
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
      <h3>Invoice Data</h3>
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
      <h3>Invoice Line</h3>
      <div className={classes.invLine}>
        <div className={"titles"}>
          <p>Pos.</p>
          <p>Name.</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Unit Price</p>
          <p>Sum</p>
          <p></p>
        </div>
        <div className={"inputs"}>
          <p>{1}</p>
          <input
            type="text"
            value={productState.prodName}
            onChange={prodNameHandler}
          />
          <input
            type="text"
            value={productState.desc}
            onChange={descrHandler}
          />
          <input
            type="number"
            value={productState.value}
            onChange={quantityHandler}
          />
          <div className={classes.unitPrice}>
            <input
              type="number"
              value={productState.price}
              onChange={priceHandler}
            />
            <span>Cents</span>
          </div>
          <p className={classes.sumPara}>{sumPrice} €</p>
          <button className={classes.trashBtn} onClick={removeHandler}>
            <svg
              className={classes.svgTrash}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
            </svg>
          </button>
          <ul className={"productItems"}>
            {product.map((item, idx) => {
              return (
                <li key={idx}>
                  <p>{idx}</p>
                  <p>{item.prodName}</p> <p>{item.desc}</p> <p>{item.value}</p>
                  <p>{item.price}</p>
                  <p>Edit</p>
                  <button className={classes.trashBtn} onClick={removeHandler}>
                    <svg
                      className={classes.svgTrash}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.addItemBtn}
          type="button"
          onClick={addNewItem}
        >
          +
        </button>
        <button className={classes.submitBtn} type="submit">
          Save
        </button>
      </div>
      <div className={classes.allNet}>
        <div className={classes.sum}>
          <p>Net</p>
          <p>At.-St.(19%)</p>
          <p>Gross</p>
        </div>
        <div className={classes.sum}>
          <p>{productReducedSum.toFixed(2)} €</p>
          <p>{atSt.toFixed(2)} €</p>
          <p>{gross.toFixed(2)} €</p>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
