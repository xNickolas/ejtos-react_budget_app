import React, { useContext } from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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
            payload: expense,
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button className="btn border-0" onClick={event => increaseAllocation(props.name)}><FaPlusCircle size='2.2em' color="green"></FaPlusCircle></button></td>
            <td><button className="btn border-0" onClick={event => decreaseAllocation(props.name)}><MdDoNotDisturbOn size='2.2em' color="red"></MdDoNotDisturbOn></button></td>
            <td><button className="btn border-0" onClick={handleDeleteExpense}><FaTimesCircle size='2.2em' color="black"></FaTimesCircle></button></td>
            {/* <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td> */}
        </tr>
    );
};

export default ExpenseItem;