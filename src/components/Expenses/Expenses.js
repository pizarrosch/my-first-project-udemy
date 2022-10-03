import ExpenseItem from "./ExpenseItem";
import st from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function Expenses({expenses}) {

  const [filteredYear, setFilteredYear] = useState('2019');

  function handleFilteredExpenses(pickedYear) {
    setFilteredYear(pickedYear);
  }

  const filteredExpenses = expenses.filter((item) => {
    const stringItem = item.date.getFullYear().toString()
    return stringItem === filteredYear;
  })

  return (
    <div>
      <Card className={st.expenses}>
        <ExpensesFilter expenses={expenses} selectedYear={filteredYear} onFilterExpenses={handleFilteredExpenses}/>
        {filteredExpenses.length === 0 ? <p className={st.noExpenses}>No expenses found.</p> : filteredExpenses.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>)}
      </Card>
    </div>
  )
}

export default Expenses;