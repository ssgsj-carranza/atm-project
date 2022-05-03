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

    const handleWithdraw = () => {
        dispatch(withdraw(+amount))
    }

    const handleCollectInterest = () => {
        dispatch(collectInterest())
    }

    const handleDeleteAccount = () => {
        dispatch(deleteAccount())
    }

    const handleToggleAccount = () => {
        dispatch(toggleAccount())
    }

  return (
    <div>
        <div className="field">
            <input type='number' className='input' placeholder='Enter amount' value={amount} onChange={handleChange}/>
        </div>
        <button className='button mr-2 is-success' onClick={handleDeposit}>Deposit</button>
        <button className='button mr-2 is-danger' onClick={handleWithdraw}>Withdraw</button>
        <button className='button mr-2 is-link' onClick={handleCollectInterest}>Collect Interest</button>
        <button className='button mr-2 is-info' onClick={handleToggleAccount}>Account Type</button>
        <button className='button mr-2 is-warning' onClick={handleDeleteAccount}>Deactivate Account</button>
    </div>
  )
}

export default Banking