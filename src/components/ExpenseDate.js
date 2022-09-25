import s from './ExpenseDate.module.css';

function ExpenseDate({date}) {
  const month = date.toLocaleString('en-US', {month: 'long'});
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className={s.expenseDate}>
      <div className={s.expenseDate__month}>{month}</div>
      <div className={s.expenseDate__year}>{year}</div>
      <div className={s.expenseDate__day}>{day}</div>
    </div>
  )
}

export default ExpenseDate;