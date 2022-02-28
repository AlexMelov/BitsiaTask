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
  };
  const descrHandler = (e) => {
    dispatchState({ type: "DESC", desc: e.target.value });
  };
  const quantityHandler = (e) => {
    dispatchState({ type: "VALUE", value: e.target.value });
  };
  const priceHandler = (e) => {
    dispatchState({ type: "PRICE", price: e.target.value });
  };

  let sum = (+allState.price * +allState.value) / 100;

  const obj = {
    ...allState,
    sum: sum,
  };
  ctx.itemObj(obj);
  props.getProductObj(allState);

  const resetState = () => {
    return dispatchState(initialState);
  };

  // ctx.itemObj(obj, resetState);

  return (
    <div className={classes.inputs}>
      <p>{props.number + 1}</p>
      <input type="text" value={allState.name} onChange={nameHandler} />
      <input type="text" value={allState.desc} onChange={descrHandler} />
      <input type="number" value={allState.value} onChange={quantityHandler} />
      <div className={classes.unitPrice}>
        <input type="number" value={allState.price} onChange={priceHandler} />
        <span>Cents</span>
      </div>
      <p className={classes.sumPara}>{sum}</p>
      <button className={classes.trashBtn} onClick={props.removeHandler}>
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
    </div>
  );
};

export default InvoiceLine;
