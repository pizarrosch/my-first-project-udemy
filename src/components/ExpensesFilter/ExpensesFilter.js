import React from 'react';
import s from './ExpensesFilter.module.css';

const ExpensesFilter = ({selectedYear, onFilterExpenses}) => {

  function handleFilteredExpenses(e) {
    onFilterExpenses(e.target.value)
  }

  return (
    <div className={s.expensesFilter}>
      <div className={s.expensesFilter__control}>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={handleFilteredExpenses}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;