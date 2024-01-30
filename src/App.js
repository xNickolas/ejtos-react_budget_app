import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Currency from './components/Currency';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>

                <div className='row mt-3 align-items-center'>
                    <div className='col-sm-4'>
                        <Budget />
                    </div>
                    <div className='col-sm-2'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm-2'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm-3'>
                        <Currency />
                    </div>
                </div>

                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;