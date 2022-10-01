import s from './NewExpense.module.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(
  // { inputTitle,
  //   inputAmount,
  //   inputDate,
  //   handleInputTitle,
  //   handleInputAmount,
  //   handleInputDate,
  // {handleAddExpense
  // }
  {onAddExpense}
  ) {

  function handleExpenseData(enteredExpensedData) {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random()
    }
    onAddExpense(expenseData)
  }

  return (
    <div className={s.newExpense}>
      <ExpenseForm
        // inputTitle={inputTitle}
        // inputAmount={inputAmount}
        // inputDate={inputDate}
        // handleInputTitle={handleInputTitle}
        // handleInputAmount={handleInputAmount}
        // handleInputDate={handleInputDate}
        onSaveExpenseData={handleExpenseData}
      />
    </div>
  )
}

export default NewExpense;