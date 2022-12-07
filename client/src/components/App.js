import "../App.css";
import NavBar from "./NavBar";
import BudgetSummary from "./BudgetSummary";
import ExpenseContainer from "./ExpenseContainer";
import IncomeContainer from "./IncomeContainer";
import NewInputContainer from "./NewInputContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BudgetSummary />
      <NewInputContainer />
      <IncomeContainer />
      <ExpenseContainer />
    </div>
  );
}

export default App;
