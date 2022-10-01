import ExpenseItem from "./ExpenseItem";
import st from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function Expenses({expenses, setExpenses}) {

  const [filteredYear, setFilteredYear] = useState('2019');

  function handleFilteredExpenses(pickedYear) {
    setFilteredYear(pickedYear);
  }

  return (
    <div>
      <Card className={st.expenses}>
        <ExpensesFilter selectedYear={filteredYear} onFilterExpenses={handleFilteredExpenses}/>
        {expenses.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>)}
      </Card>
    </div>
  )
}

export default Expenses;