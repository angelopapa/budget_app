import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import { Currency } from './Currency';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className="row">
            <div className="col-3">
            <div className='alert alert-secondary' id="budget" style={{display: 'flex', alignItems: 'center'}}>
    <span style={{marginRight: '10px'}}>Budget:</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
</div>

        </div>
        <Remaining/>
        <ExpenseTotal/>
        <Currency/>
        </div>
    );
};

export default Budget;

