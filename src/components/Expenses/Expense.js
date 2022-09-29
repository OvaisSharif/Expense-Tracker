import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from '../UI/ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
                <ExpenseChart expenses={filterExpenses}></ExpenseChart>
                <ExpenseList items={filterExpenses} />
            </Card >
        </div>
    )
}

export default Expense;