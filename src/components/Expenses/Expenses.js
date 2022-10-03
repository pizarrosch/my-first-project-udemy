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

  let expensesContent = <p className={st.noExpenses}>No expenses found.</p>

  if (filteredExpenses.length > 0) {
     expensesContent = filteredExpenses.map((item) => (
       <ExpenseItem
         title={item.title}
         amount={item.amount}
         date={item.date}
         key={item.id}
       />))
  }

  return (
    <div>
      <Card className={st.expenses}>
        <ExpensesFilter expenses={expenses} selectedYear={filteredYear} onFilterExpenses={handleFilteredExpenses}/>
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses;