import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    // Utilizziamo il hook useContext per accedere al contesto
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col" className='text-center text-uppercase'>Department</th>
                    <th scope="col" className='text-center text-uppercase'>Allocated Budget</th>
                    <th scope="col" className='text-center text-uppercase'>Increase</th>
                    <th scope="col" className='text-center text-uppercase'>Delete</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;

