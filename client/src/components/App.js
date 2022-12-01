import "../App.css";
import ExpenseContainer from "./ExpenseContainer";
import IncomeContainer from "./IncomeContainer";
import NewInputContainer from "./NewInputContainer";


function App() {

  return (
    <div className="App">
      <NewInputContainer/>
      <IncomeContainer/>
      <ExpenseContainer/>
    </div>
  );
}

export default App;
