import React from 'react';
import {useSelector} from 'react-redux';

const Balance = () => {
    const state = useSelector(state => {
        return {
            balance: state.balance,
            interest: state.interest,
        }
    });

  return (
    <div>
        <h1 className="is-size-2">Balance: <strong>${state.balance}</strong></h1>
        <h1 className="is-size-3">Interest: <strong>${state.interest}</strong></h1>
    </div>
  )
}

export default Balance