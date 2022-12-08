import "../App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BudgetSummary from "./BudgetSummary";
import ExpenseContainer from "./ExpenseContainer";
import IncomeContainer from "./IncomeContainer";
import NewInputContainer from "./NewInputContainer";
import MenuBar from "./MenuBar";

function App() {
  return (
    <>

      <div className="App">
        <NavBar />
        <MenuBar />
      </div>
    </>
  );
}

export default App;
