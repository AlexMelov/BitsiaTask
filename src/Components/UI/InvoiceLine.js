import React, { useContext, useState } from "react";
import AuthContext from "../../store/invoice-context";

const InvoiceLine = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [quant, setQuant] = useState(null);
  const [price, setPrice] = useState(null);
  const ctx = useContext(AuthContext);

  const nameHandler = (e) => {
    setName(e.target.value);
    setId(props.id);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const quantHandler = (e) => {
    setQuant(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  ctx.onSave(name, desc, quant, price, id);
  return (
    <>
      <tbody>
        <tr>
          <td>
            <p>Num</p>
          </td>
          <td>
            <input type="text" onChange={nameHandler} />
          </td>
          <td>
            <input type="text" onChange={descHandler} />
          </td>
          <td>
            <input type="number" onChange={quantHandler} />
          </td>
          <td>
            <input type="number" onChange={priceHandler} />
          </td>
          <td>
            <p>{(+price * +quant) / 100}</p>
          </td>
          <td></td>
          <td>
            <button onClick={props.removeHandler}>-</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default InvoiceLine;
