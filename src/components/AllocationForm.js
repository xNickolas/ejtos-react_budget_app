import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        // Validate if cost is a valid number
        if (isNaN(cost) || cost <= 0) {
            alert("Please enter a valid positive number for allocation.");
            setCost("");
            return;
        }

        // Validate if cost does not exceed the remaining budget
        // if (action === "Add" && parseInt(cost) > remaining) {
        //     alert("The value cannot exceed remaining funds £" + remaining);
        //     setCost("");
        //     return;
        // }

        // if (cost > remaining) {
        //     alert("The value cannot exceed remaining funds  £" + remaining);
        //     setCost("");
        //     return;
        // }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            // Validate if cost does not exceed the remaining budget when adding an allocation
            if (action === "Add" && parseInt(cost) > remaining) {
                alert("The value cannot exceed remaining funds £" + remaining);
                setCost("");
                return;
            }

            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text rounded-0 rounded-start" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select rounded-end border border-1" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text rounded-0 rounded-start" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select rounded-end border border-1" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text rounded-0 rounded-start" htmlFor="inputGroupSelect02">{currency}</label>
                    </div>
                    <input
                        className='rounded-end border border-1'
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ size: 10 }}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>

                    <button className="btn btn-primary rounded" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;