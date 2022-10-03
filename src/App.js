import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import s from "./components/NewExpense/NewExpense.module.css";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    setExpenses((prev) => [
      expense,
      ...prev
    ]);
  }

  return (
    <div>
      <div className={s.newExpense}>
        <NewExpense
          onAddExpense={handleAddExpense}
          expenses={expenses}
        />
      </div>
      <Expenses
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}

export default App;
