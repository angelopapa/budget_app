import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Currency } from './Currency';

const ExpenseTotal = () => {
    // Utilizziamo il hook useContext per accedere al contesto
    const { expenses } = useContext(AppContext);
    const {currency} = useContext(Currency)

    // Calcoliamo il totale delle spese
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
        <div className="col-3">
        <div className='alert alert-primary'>
            <span>Spent so far:{currency}{totalExpenses}</span>
        </div>
        </div>
    );
};


export default ExpenseTotal;

