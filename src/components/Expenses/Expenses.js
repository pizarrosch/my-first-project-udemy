import ExpenseItem from "./ExpenseItem";
import st from './Expenses.module.css';
import Card from '../UI/Card';
import {useState} from "react";

function Expenses({expenses}) {

  return (
    <Card className={st.expenses}>
      {expenses.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>)}
    </Card>
  )
}

export default Expenses;