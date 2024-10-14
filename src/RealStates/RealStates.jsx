import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RealState from '../RealState/RealState';

const RealStates = () => {
      const[realStates, setRealStates] = useState([]);

      useEffect(()=>{
        fetch('realStates.json')
        .then(res => res.json())
        .then(data => setRealStates(data));
      })

    return (
       <div className='grid grid-cols-3'>
       
        {
            realStates.map(realState => <RealState key={realState} realState={realState}></RealState>)
        }
       </div>
    );
};

export default RealStates;