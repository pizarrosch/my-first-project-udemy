
import s from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem({title, amount, date}) {

  return (
    <Card className={s.expenseItem}>
      <ExpenseDate date={date}/>
      <div className={s.expenseItem__description}>
        <h2>{title}</h2>
        <div className={s.expenseItem__price}>${amount}</div>
      </div>

    </Card>
  )
}

export default ExpenseItem;