import s from './NewExpense.module.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense({onAddExpense, expenses}) {

  const [buttonClicked, setButtonClicked] = useState(false);

  function handleExpenseData(enteredExpensedData) {
    const expenseData = {
      ...enteredExpensedData,
      id: expenses.length - 1
    }
    onAddExpense(expenseData)
  }

  function handleAddNewExpense() {
    setButtonClicked(true)
  }

  return (
    <div className={buttonClicked ? s.newExpense : s.hiddenShadow}>
      <button
        type='button'
        onClick={handleAddNewExpense}
        className={buttonClicked === true ? s.hidden : null}
      >
        Add new expense
      </button>
      {buttonClicked === true ?
        <ExpenseForm
          onSaveExpenseData={handleExpenseData}
          buttonClicked={setButtonClicked}
        /> : null}
    </div>
  )
}

export default NewExpense;