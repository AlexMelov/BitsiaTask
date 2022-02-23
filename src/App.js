import { useContext } from "react";
import classes from "./App.module.scss";
import GeneralData from "./Components/Layout/GeneralData";
import InvoiceEditor from "./Components/Layout/InvoiceEditor";
import AuthContext from "./store/invoice-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <main className={classes.App}>
        {!ctx.isLoggedIn && <InvoiceEditor />}
        <GeneralData />
      </main>
    </>
  );
}

export default App;
