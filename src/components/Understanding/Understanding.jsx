
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
        if(document.getElementById("understanding").value  === '')
        {
            alert("You didn't enter anything!")
        }
        else {
        dispatch({
            type:'SET_UNDERSTANDING',
            payload: understanding,
         })
        console.log('in handleSubmit (understanding.jsx)', understanding)
        // alert('Going to support!');
        history.push('/support')
        }
    }

    const handleClickBack = () => {
        event.preventDefault();
        dispatch({
            type:'SET_UNDERSTANDING',
            payload: understanding,
         })
        // alert('Back to Feelings!');
        history.push('/feelings')
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
            <button type="submit">Submit Understanding and go to support</button>
        </form>

        <form onSubmit={handleClickBack}>
            <button type="submit">Go back to Feelings</button>
        </form>
        </div>
        </>
    )
}

export default Understanding;