import React, { useState } from "react";

const AuthContext = React.createContext({
  invoiceArr: [],
  itemObj: (obj) => {},
  invoice: [],
  postHandler: () => {},
  delHandler: () => {},
  addNewObj: () => {},
  addObj: [],
});
export const AuthContextProvider = (props) => {
  const [invoiceArr, setInvoiceArr] = useState([]);
  const [invPart, setInvPart] = useState([]);
  const [addObj, setAddObj] = useState([]);

  let objIn = {};

  const itemObj = (obj) => {
    objIn = obj;
    console.log(objIn);
  };

  const postHandler = () => {
    setInvPart([...invPart, objIn]);
    setInvoiceArr([...invoiceArr, objIn]);
  };
  const delHandler = (arr) => {
    setInvoiceArr(arr);
  };
  const addNewObj = () => {
    setAddObj([objIn]);
    //Plus BUTTON

    console.log("Sucess");
    if (
      objIn.name !== "" ||
      objIn.desc !== "" ||
      objIn.value !== 0 ||
      objIn.price !== 0 ||
      objIn.sum !== 0
    ) {
      console.log("Much bigger sucess");
      setAddObj([...addObj, objIn]);
    } else {
      setAddObj([...addObj]);
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
        addObj,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
