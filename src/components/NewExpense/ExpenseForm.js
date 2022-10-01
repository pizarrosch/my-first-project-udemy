import s from './ExpenseForm.module.css';
import {useState} from "react";
import {parseISO} from "date-fns";

function ExpenseForm(
  {
    onSaveExpenseData,
    expenses
  }) {

  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  function handleAddExpense(e) {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: parseISO(inputDate),
      id: expenses.length - 1
      }

    onSaveExpenseData(expenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  }


  function handleInputTitle(e) {
    setInputTitle(e.target.value);
  }
  function handleInputAmount(e) {
    setInputAmount(e.target.value);
  }
  function handleInputDate(e) {
    setInputDate(e.target.value);
  }


  return (
    <form onSubmit={handleAddExpense}>
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
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;