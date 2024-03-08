import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    // Usiamo il hook useContext per accedere al contesto
    const { expenses, budget } = useContext(AppContext);

    // Calcoliamo il totale delle spese
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    // Determiniamo il tipo di avviso in base al budget rimanente
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;

