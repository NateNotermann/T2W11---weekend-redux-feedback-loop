
import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- UNDERSTANDING PAGE ----- //
function Support (){

    const history = useHistory();
    const dispatch = useDispatch();

// ----- UNDERSTANDING USE-STATE ----- //  
    const [support, setSupport] = useState('');

     // ----- CLICK FUNCTION ----- //
    const handleClick = () => {
        event.preventDefault();
        if(document.getElementById("support").value  === '') {
            alert("You didn't enter anything!")
        }
        else {
        dispatch({
            type:'SET_SUPPORT',
            payload: support,
         })
        //  alert('Going to Comments!');
         history.push('/comments')
         }
        }
       


    const handleClickBack = () => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: support,
        })
        console.log('in handleSubmit (support.jsx)', support)
        // alert('Back to Understanding!');
        history.push('/understanding')
    }

    return(
        <>
        <div>
        <h3>Please how much you were support this week, from 1 to 5.</h3>
        <h4>You entered:{support}</h4>
        <form onSubmit={handleClick}>
        <input type="number"
        id="support"
        min="1" max="5" maxLength="1"
        placeholder="1 - 5"
            value={support}
            onChange={(event) => setSupport(event.target.value)}>
            </input>
            <button type="submit">Submit support and go to Comments</button>
        </form>
        <form onSubmit={handleClickBack}>
            <button type="submit" id="back">Go back to Understanding</button>
        </form>
        </div>
        </>
    )
}

export default Support;