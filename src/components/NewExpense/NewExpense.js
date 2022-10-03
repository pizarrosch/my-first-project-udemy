import s from './NewExpense.module.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense({onAddExpense, expenses}) {

  function handleExpenseData(enteredExpensedData) {
    const expenseData = {
      ...enteredExpensedData,
      id: expenses.length - 1
    }
    onAddExpense(expenseData)
  }

  return (
    <div className={s.newExpense}>
      <ExpenseForm
        onSaveExpenseData={handleExpenseData}
      />
    </div>
  )
}

export default NewExpense;