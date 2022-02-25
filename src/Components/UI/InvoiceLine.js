import React, { useContext, useReducer } from "react";
import AuthContext from "../../store/invoice-context";
import classes from "./InvoiceLine.module.scss";

const InvoiceLine = (props) => {
  const ctx = useContext(AuthContext);

  const initialState = {
    name: "",
    desc: "",
    value: 0,
    price: 0,
  };

  const reducerHandler = (state, action) => {
    if (action.type === "NAME") {
      return {
        ...state,
        name: action.name,
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
    return initialState;
  };
  const [allState, dispatchState] = useReducer(reducerHandler, initialState);

  const nameHandler = (e) => {
    dispatchState({ type: "NAME", name: e.target.value });
    console.log(e.target.value);
  };
  const descrHandler = (e) => {
    dispatchState({ type: "DESC", desc: e.target.value });
  };

  const quantityHandler = (e) => {
    dispatchState({ type: "VALUE", value: e.target.value });
  };
  const priceHandler = (e) => {
    dispatchState({ type: "PRICE", price: e.target.value });
    console.log(allState);
  };

  let sum = (+allState.price * +allState.value) / 100;

  const obj = {
    ...allState,
    sum: sum,
  };
  ctx.itemObj(obj);

  return (
    <div className={classes.inputs}>
      <p>Num</p>
      <input type="text" value={allState.name} onChange={nameHandler} />
      <input type="text" value={allState.desc} onChange={descrHandler} />
      <input type="number" value={allState.value} onChange={quantityHandler} />
      <div className={classes.unitPrice}>
        <input type="number" value={allState.price} onChange={priceHandler} />
        <span>Cents</span>
      </div>
      <p>{sum}</p>
      <button onClick={props.removeHandler}>-</button>
    </div>
  );
};

export default InvoiceLine;
