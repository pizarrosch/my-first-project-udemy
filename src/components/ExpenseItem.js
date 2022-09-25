import s from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({title, amount, date}) {

  return (
    <div className={s.expenseItem}>
      <ExpenseDate date={date}/>
      <div className={s.expenseItem__description}>
        <h2>{title}</h2>
        <div className={s.expenseItem__price}>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;