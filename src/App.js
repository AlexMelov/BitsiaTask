import classes from "./App.module.scss";
import GeneralData from "./Components/Layout/GeneralData";
import InvoiceEditor from "./Components/Layout/InvoiceEditor";

function App() {
  return (
    <>
      <main className={classes.App}>
        <InvoiceEditor />
        <GeneralData />
      </main>
    </>
  );
}

export default App;
