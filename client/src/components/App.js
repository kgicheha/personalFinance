import "../App.css";
import BudgetSummary from "./BudgetSummary";
import ExpenseContainer from "./ExpenseContainer";
import IncomeContainer from "./IncomeContainer";
import NewInputContainer from "./NewInputContainer";

function App() {
  return (
    <div className="App">
      <BudgetSummary />
      <NewInputContainer />
      <IncomeContainer />
      <ExpenseContainer />
    </div>
  );
}

export default App;
