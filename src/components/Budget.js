import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleBudgetUpdate = () => {
        const updatedBudget = parseInt(newBudget);

        if (isNaN(updatedBudget) || updatedBudget < 0) {
            alert("Please enter a valid positive number for the budget.");
            return;
        }

        if (updatedBudget < expenses.reduce((total, item) => total + item.cost, 0)) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }

        if (updatedBudget > 20000) {
            alert("Budget cannot exceed £20,000.");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <div className='row align-items-center'>
                <div className="input-group">
                    {/* <span>Budget: £{budget}</span>
                    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
                    <button onClick={handleBudgetUpdate}>save</button> */}

                    <div className="input-group-prepend">
                        <label className="input-group-text rounded-0 rounded-start" htmlFor="inputGroupSelect02">Budget: {currency}</label>
                    </div>
                    <input
                        className='border border-1'
                        type='number'
                        step="10"
                        value={newBudget}
                        onChange={handleBudgetChange}>
                    </input>

                    <button className="btn btn-primary rounded-end" onClick={handleBudgetUpdate}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Budget;