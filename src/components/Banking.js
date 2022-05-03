import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {deposit, withdraw, collectInterest, deleteAccount, toggleAccount } from '../actions'

const Banking = () => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleDeposit = () => {
        dispatch(deposit(+amount))
    }

  return (
    <div>
        <div className="field">
            <input type='number' className='input' placeholder='Enter amount' value={amount} onChange={handleChange}/>
        </div>
        <button className='button mr-2 is-success' onClick={handleDeposit}>Deposit</button>
        <button className='button mr-2 is-danger'>Withdraw</button>
        <button className='button mr-2 is-link'>Collect Interest</button>
        <button className='button mr-2 is-info'>Account Type</button>
        <button className='button mr-2 is-warning'>Deactivate Account</button>
    </div>
  )
}

export default Banking