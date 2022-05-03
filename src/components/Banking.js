import React from 'react'

const Banking = () => {
  return (
    <div>
        <div className="field">
            <input type='number' className='input' placeholder='Enter amount'/>
        </div>
        <button className='button mr-2 is-success'>Deposit</button>
        <button className='button mr-2 is-danger'>Withdraw</button>
        <button className='button mr-2 is-link'>Collect Interest</button>
        <button className='button mr-2 is-info'>Account Type</button>
        <button className='button mr-2 is-warning'>Deactivate Account</button>
    </div>
  )
}

export default Banking