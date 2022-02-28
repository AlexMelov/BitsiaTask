import React, { useContext } from "react";
import AuthContext from "../../store/invoice-context";
import classes from "./invoiceItem.module.scss";

const InvoiceItem = (props) => {
  const ctx = useContext(AuthContext);

  const deleteHandler = (e) => {
    e.preventDefault();
    const filterDel = ctx.invoiceArr.filter((item) =>
      item.name !== props.id && item.customerNo !== props.customerNo
        ? item
        : null
    );

    ctx.delHandler(filterDel);
  };

  return (
    <div className={classes.container}>
      <h3>{props.name}</h3>
      <p>{props.reducedSum}€</p>
      <button className={classes.trashBtn} onClick={deleteHandler}>
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

export default InvoiceItem;
