import s from './NewExpense.module.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(
  { inputTitle,
    inputAmount,
    inputDate,
    handleInputTitle,
    handleInputAmount,
    handleInputDate,
    handleAddExpense
  }) {
  return (
    <div className={s.newExpense}>
      <ExpenseForm
        inputTitle={inputTitle}
        inputAmount={inputAmount}
        inputDate={inputDate}
        handleInputTitle={handleInputTitle}
        handleInputAmount={handleInputAmount}
        handleInputDate={handleInputDate}
        handleAddExpense={handleAddExpense}
      />
    </div>
  )
}

export default NewExpense;