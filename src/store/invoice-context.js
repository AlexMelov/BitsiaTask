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
  formObjHandler: () => {},
});
export const AuthContextProvider = (props) => {
  const [invoiceArr, setInvoiceArr] = useState([]);
  const [invPart, setInvPart] = useState([]);
  const [invLineArr, setInvLineArr] = useState([{ price: 0, sum: 0 }]);
  const [reducedArray, setReducedArray] = useState([]);
  const [reducedSum, setReducedSum] = useState(0);
  const [formObj, setFormObj] = useState({});

  let objIn = {};
  let objBack = {};
  let resetAllFunc;

  const itemObj = (obj, resetState) => {
    objIn = obj;
    objBack = obj;
    resetAllFunc = resetState;
  };

  const postHandler = () => {
    setInvLineArr([{ price: 0, sum: 0 }]);
    resetAllFunc();
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
    setInvLineArr([{ price: 0, sum: 0 }]);
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
  const formObjHandler = (obj) => {
    setFormObj({ ...obj, invoiceLine: [...reducedArray, objBack] });
    console.log(formObj, "From Context");
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
        formObjHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
