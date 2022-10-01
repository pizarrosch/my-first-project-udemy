import {useState} from "react";
import s from './ExpenseItem.module.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem({title, amount, date}) {

  const [itemTitle, setItemTitle] = useState(title)

  function handleClick() {
    // if(itemTitle === 'Carrots') {
    //   setItemTitle('Tomatoes')
    // } else {
    //   setItemTitle('Carrots');
    // }
    setItemTitle(itemTitle === 'Carrots' ? 'Tomatoes' : 'Carrots')
  }

  return (
    <Card className={s.expenseItem}>
      <ExpenseDate date={date}/>
      <div className={s.expenseItem__description}>
        <h2>{itemTitle}</h2>
        <div className={s.expenseItem__price}>${amount}</div>
      </div>
      {/*<button onClick={handleClick}>Change title</button>*/}
    </Card>
  )
}

export default ExpenseItem;