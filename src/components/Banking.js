import React, { useState } from 'react'

const Banking = () => {
    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

  return (
    <div>
        <div className="field">
            <input type='number' className='input' placeholder='Enter amount' value={amount} onChange={handleChange}/>
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