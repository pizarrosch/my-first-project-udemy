import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
import {parseISO} from "date-fns";

function App() {

  const [expenses, setExpenses] = useState([]);
  // const [inputTitle, setInputTitle] = useState('');
  // const [inputAmount, setInputAmount] = useState('');
  // const [inputDate, setInputDate] = useState('');
  //
  // function handleAddExpense(e) {
  //   e.preventDefault();
  //   setExpenses((prevState) => [
  //     ...prevState,
  //     {title: inputTitle,
  //     amount: inputAmount,
  //     date: parseISO(inputDate)
  //   }
  //   ])
  //   setInputTitle('');
  //   setInputAmount('');
  //   setInputDate('');
  // }
  //
  // function handleInputTitle(e) {
  //   setInputTitle(e.target.value);
  // }
  // function handleInputAmount(e) {
  //   setInputAmount(e.target.value);
  // }
  // function handleInputDate(e) {
  //   setInputDate(e.target.value);
  // }

  function handleAddExpense(expense) {
    setExpenses((prev) => [
      ...prev,
      expense]);
  }

  return (
    <div>
      <NewExpense
        // inputTitle={inputTitle}
        // inputAmount={inputAmount}
        // inputDate={inputDate}
        // handleInputTitle={handleInputTitle}
        // handleInputAmount={handleInputAmount}
        // handleInputDate={handleInputDate}
        onAddExpense={handleAddExpense}
      />
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
