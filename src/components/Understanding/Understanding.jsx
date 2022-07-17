
import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- UNDERSTANDING PAGE ----- //
function Understanding (){

    const history = useHistory();
    const dispatch = useDispatch();

// ----- UNDERSTANDING USE-STATE ----- //  
    const [understanding, setUnderstanding] = useState('');

     // ----- CLICK FUNCTION ----- //
    const handleClick = () => {
        event.preventDefault();
        console.log('in handleSubmit (understanding.jsx)', feelings)
        alert('Going to Supported!');
        history.push('/supported')
    }

    return(
        <>
        <div>
        <h3>Please how are feeling, from 1 to 5.</h3>
        <h4>You entered:{understanding}</h4>
        <button onClick={handleClick}>Submit Understanding</button>
        </div>
        </>
    )
}

export default Understanding;