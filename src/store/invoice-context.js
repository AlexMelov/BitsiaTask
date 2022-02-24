import React, { useState } from "react";

const AuthContext = React.createContext({
  invoiceArr: [],
  onSave: (name, desc, quant, price, id) => {},
  sendData: () => {},
  filteredArr: () => {},
});
export const AuthContextProvider = (props) => {
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newQuant, setNewQuant] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newId, setNewId] = useState("");
  const [invoiceArr, setInvoiceArr] = useState([]);

  const saveInvoiceHandler = (name, desc, quant, price, id) => {
    if (name || desc || quant || price || id) {
      setNewName(name);
      setNewDesc(desc);
      setNewQuant(quant);
      setNewPrice(price);
      setNewId(id);
    }
  };

  const sendDataHandler = () => {
    const data = {
      name: newName,
      desc: newDesc,
      quant: newQuant,
      price: newPrice,
      id: newId,
      sum: (newQuant * newPrice) / 100,
    };
    setInvoiceArr([...invoiceArr, data]);
  };

  const filterArrHandler = (arr) => {
    setInvoiceArr(arr);
  };
  return (
    <AuthContext.Provider
      value={{
        invoiceArr: invoiceArr,
        onSave: saveInvoiceHandler,
        sendData: sendDataHandler,
        filteredArr: filterArrHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
