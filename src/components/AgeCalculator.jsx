import React, { useState } from 'react'
import './AgeCalculator.css'

const AgeCalculator = () => {

  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }
    setAge(age);
  }

  const resetCalculator = () => {
    setBirthdate('');
    setAge(0);
  }



  return (
    <div className='main'>
      <h2>Age Calculator</h2>
      <p>The age calculator can determine the age or interval between two dates . The calculated age will be displayed in years.</p>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <h4>Date of Birth</h4>
              <input type="date" className='date' value={birthdate} onChange={e => setBirthdate(e.target.value)} />
              <div className="buttons">
                <button className='Clt_btn' onClick={calculateAge}>Calculate Age</button>
                <button className='rst_btn' onClick={resetCalculator}>Reset</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <h4>Your Age is</h4>
              <h5>{age > 0 ? `${age}` : ''}</h5>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AgeCalculator