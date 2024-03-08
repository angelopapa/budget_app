import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    
    return (
        <tr>
            <td>{props.name}</td>
            <td>€ {props.cost}</td>
            <td>
                <button class="igreen" onClick={(event) => increaseAllocation(props.name)}><i class="bi text-success bi-plus-square-fill"></i></button>
            </td>
            <td>
                <button class="ired" onClick={handleDeleteExpense}><i class="bi text-danger bi-x-circle-fill"></i></button> 
            </td>
        </tr>
    );
};

export default ExpenseItem;

