import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import { Currency } from './Currency';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        const calculateTotalExpenses = () => {
            let total = 0;
            expenses.forEach(expense => {
                total += expense.amount;
            });
            return total;
        };

        setTotalExpenses(calculateTotalExpenses());
    }, [expenses]);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if (updatedBudget > 20000) {
            alert("Non abbiamo tutti quei soldi!");
        } else if (updatedBudget < totalExpenses) {
            alert("Il budget non può essere inferiore alla spesa totale!");
        } else {
            setNewBudget(updatedBudget);
        }
    }

    return (
        <div className="row">
            <div className="col-3">
                <div className='alert alert-secondary' id="budget" style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px' }}>Budget€</span>
                    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
                </div>
            </div>
            <Remaining />
            <ExpenseTotal />
            <Currency />
        </div>
    );
};

export default Budget;

