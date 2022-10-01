import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import s from "./components/NewExpense/NewExpense.module.css";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

function App() {

  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    setExpenses((prev) => [
      ...prev,
      expense
    ]);
  }

  return (
    <div>
      <div className={s.newExpense}>
        <ExpenseForm
          onSaveExpenseData={handleAddExpense}
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
