
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
        console.log('in handleSubmit (understanding.jsx)', understanding)
        alert('Going to Supported!');
        history.push('/supported')
    }

    return(
        <>
        <div>
        <h3>Please how well you are understanding things, from 1 to 5.</h3>
        <h4>You entered:{understanding}</h4>
        <form onSubmit={handleClick}>
        <input type="number"
        id="understanding"
        min="1" max="5" maxLength="1"
        placeholder="1 - 5"
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}>
            </input>
            <button type="submit">Submit Understanding and go to Supported</button>
        </form>
        </div>
        </>
    )
}

export default Understanding;