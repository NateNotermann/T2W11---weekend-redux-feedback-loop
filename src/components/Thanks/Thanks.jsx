
import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- UNDERSTANDING PAGE ----- //
function Thanks (){

    const history = useHistory();


     // ----- CLICK FUNCTION ----- //
    const handleClick = () => {
        event.preventDefault();
        alert('Starting new Feedback!');
        history.push('/')
        }
    
    

    return(
        <>
        <div>
        <h3>Thanks for your feedback!</h3>
        <form onSubmit={handleClick}>
            <button type="submit">Start new Feedback</button>
        </form>
        </div>
        </>
    )
}

export default Thanks;