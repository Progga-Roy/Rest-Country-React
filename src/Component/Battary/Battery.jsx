import React, { useState } from 'react';
import './Battery.css'

const Battery = () => {
    const [charge, setCharge] = useState(100);

    const decreaseCharge = () => {
        if(charge >10) {
            const newCharge = charge - 10;
            setCharge(newCharge);

            if (newCharge === 10) {
                setTimeout(() => {
                    setCharge(100);
                }, 3000); 
            }
        }
      else {
        setCharge(100);
      }
       
    };

    return (
        <div>
            <p className='battery'>{charge}%</p>
            <button onClick={decreaseCharge}>Battery</button>
        </div>
    );
};

export default Battery;