import s from './ExpenseDate.module.css';
import {format} from "date-fns";

function ExpenseDate({date}) {
  const month = format(date, 'MMMM');
  const year = date.getFullYear();
  const day = format(date, 'dd');

  return (
    <div className={s.expenseDate}>
      <div className={s.expenseDate__month}>{month}</div>
      <div className={s.expenseDate__year}>{year}</div>
      <div className={s.expenseDate__day}>{day}</div>
    </div>
  )
}

export default ExpenseDate;