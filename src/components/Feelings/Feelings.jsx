
import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- FEELINGS PAGE ----- //
function Feelings () {

 const history = useHistory();
 const dispatch = useDispatch();

// ----- FEELINGS USE-STATE ----- //
 const [feelings, setFeelings] = useState('');

 // ----- CLICK FUNCTION ----- //
 const handleSubmit = (event) => {
     event.preventDefault();
     console.log('in handleSubmit (Feelings.jsx)', feelings)
     alert('Going to understanding!');
     history.push('/understanding')
    }



    return (
        <>
        <div>
        <h3>Please how are feeling, from 1 to 5.</h3>
        <h4>You entered:{feelings}</h4>
        <form onSubmit={handleSubmit}>
        <input type="number" 
        id="feelings" 
        min="1" max="5" maxLength="1"
        placeholder="1 - 5"
            value={feelings} 
            onChange={(event) => setFeelings(event.target.value)}></input>
            <button type="submit">Submit Feelings</button>
        </form>
        

        </div>
        </>
    )
}

export default Feelings;