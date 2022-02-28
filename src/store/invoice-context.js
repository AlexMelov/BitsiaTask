import React, { useState } from "react";

const AuthContext = React.createContext({
  invoiceArr: [],
  itemObj: (obj) => {},
  invoice: [],
  postHandler: () => {},
  delHandler: () => {},
  // addNewObj: () => {},
  // invLineArr: [],
  // reducedSum: 0,
  // formObj: [],
});

export const AuthContextProvider = (props) => {
  const [invoiceArr, setInvoiceArr] = useState([]);
  // const [invPart, setInvPart] = useState([]);
  // const [invLineArr, setInvLineArr] = useState([
  //   { price: 0, sum: 0, value: 0 },
  // ]);
  // const [reducedArray, setReducedArray] = useState([]);
  // const [reducedSum, setReducedSum] = useState(0);
  // const [formObj, setFormObj] = useState([]);

  let objIn = {};

  const itemObj = (obj) => {
    objIn = obj;
  };

  const delHandler = (arr) => {
    setInvoiceArr(arr);
  };

  // const addNewObj = (prodObj) => {
  //   if (invLineArr.length >= 1) {
  //     setInvLineArr([...invLineArr, prodObj]);
  //   } else {
  //     setInvLineArr([prodObj]);
  //   }
  //   const reducedSum = invLineArr.reduce((prev, next) => {
  //     return +prev + +next.price;
  //   }, 0);
  //   console.log(reducedSum, invLineArr);
  // };

  const postHandler = () => {
    setInvoiceArr([...invoiceArr, objIn]);
  };

  return (
    <AuthContext.Provider
      value={{
        invoiceArr,
        itemObj,
        postHandler,
        delHandler,
        // addNewObj,
        // invLineArr,
        // reducedSum,
        // formObj,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
