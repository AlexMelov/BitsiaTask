import React, { useState } from "react";

const AuthContext = React.createContext({
  invoiceArr: [],
  itemObj: (obj) => {},
  invoice: [],
  postHandler: () => {},
  delHandler: () => {},
  addNewObj: () => {},
  invLineArr: [],
  reducedSum: 0,
});
export const AuthContextProvider = (props) => {
  const [invoiceArr, setInvoiceArr] = useState([]);
  const [invPart, setInvPart] = useState([]);
  const [invLineArr, setInvLineArr] = useState([]);
  const [reducedArray, setReducedArray] = useState([]);
  const [reducedSum, setReducedSum] = useState(0);

  let objIn = {};
  let objBack = {};

  const itemObj = (obj) => {
    objIn = obj;
    objBack = obj;
  };

  const postHandler = () => {
    setReducedArray([...reducedArray, objBack]);
    const redSum = reducedArray.reduce((prev, next) => {
      return +prev + next.sum;
    }, 0);
    setReducedSum(redSum);

    if (objIn.name && objIn.desc && objIn.value && objIn.price && objIn.sum) {
      setInvPart([...invPart, objIn]);
      setInvoiceArr([...invoiceArr, objIn]);
    } else {
      setReducedSum(0);
    }
    setInvLineArr([]);
  };
  const delHandler = (arr) => {
    setInvoiceArr(arr);
  };
  const addNewObj = () => {
    setInvLineArr([objIn]);

    if (objIn.name && objIn.desc && objIn.value && objIn.price && objIn.sum) {
      setReducedArray([...reducedArray, objBack]);
    }
    const redSum = reducedArray.reduce((prev, next) => {
      return +prev + +next.sum;
    }, 0);
    setReducedSum(redSum);

    if (
      objIn.name !== "" &&
      objIn.desc !== "" &&
      objIn.value !== 0 &&
      objIn.price !== 0 &&
      objIn.sum !== 0
    ) {
      setInvLineArr([...invLineArr, objIn]);
    } else {
      setInvLineArr([...invLineArr]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        invoiceArr,
        itemObj,
        postHandler,
        delHandler,
        addNewObj,
        invLineArr,
        reducedSum,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
