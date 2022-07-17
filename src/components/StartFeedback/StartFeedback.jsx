import { useState } from  'react';
import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function StartFeedback (){

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        alert('Starting Feedback!');
        history.push('/feelings')
    }

    return(
        <div>
        <h3>Hello! Please take a moment to let us know how you are doing this week</h3>
        <button onClick={handleClick}>Start Feedback!</button>
        </div>
    )
}

export default StartFeedback;