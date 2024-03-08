import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-4 '>Company's Budget Allocation</h1>
                <div className='row mt-5'>
                    <Budget />
                    <ExpenseList />
                    <ExpenseItem />
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
