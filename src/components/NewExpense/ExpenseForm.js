import s from './ExpenseForm.module.css';

function ExpenseForm(
  {
    inputTitle,
    inputAmount,
    inputDate,
    handleInputTitle,
    handleInputAmount,
    handleInputDate,
    handleAddExpense
  }) {

  return (
    <form>
      <div className={s.newExpense__controls}>
        <div className={s.newExpense__control}>
          <label>Title</label>
          <input type='text' value={inputTitle} onChange={handleInputTitle}/>
        </div>
        <div className={s.newExpense__control}>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={inputAmount} onChange={handleInputAmount}/>
        </div>
        <div className={s.newExpense__control}>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={inputDate} onChange={handleInputDate}/>
        </div>
      </div>
      <div className={s.newExpense__actions}>
        <button type='button' onClick={handleAddExpense}>Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;