
import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- UNDERSTANDING PAGE ----- //
function Supported (){

    const history = useHistory();
    const dispatch = useDispatch();

// ----- UNDERSTANDING USE-STATE ----- //  
    const [supported, setSupported] = useState('');

     // ----- CLICK FUNCTION ----- //
    const handleClick = () => {
        event.preventDefault();
        console.log('in handleSubmit (understanding.jsx)', supported)
        alert('Going to Comments!');
        history.push('/comments')
    }

    return(
        <>
        <div>
        <h3>Please how much you were Supported this week, from 1 to 5.</h3>
        <h4>You entered:{supported}</h4>
        <form onSubmit={handleClick}>
        <input type="number"
        id="supported"
        min="1" max="5" maxLength="1"
        placeholder="1 - 5"
            value={supported}
            onChange={(event) => setSupported(event.target.value)}>
            </input>
            <button type="submit">Submit Supported and go to Comments</button>
        </form>
        </div>
        </>
    )
}

export default Supported;