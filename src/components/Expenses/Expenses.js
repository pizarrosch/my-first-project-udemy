import ExpenseItem from "./ExpenseItem";
import st from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function Expenses({expenses}) {

  const [filterYear, setFilterYear] = useState(2019);

  function handleFilteredExpenses(pickedYear) {
    setFilterYear(Number(pickedYear));
  }

  const filteredExpenses = expenses.filter(item => item.date.getFullYear() === filterYear);

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
        <ExpensesFilter expenses={expenses} selectedYear={filterYear} onFilterExpenses={handleFilteredExpenses}/>
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses;