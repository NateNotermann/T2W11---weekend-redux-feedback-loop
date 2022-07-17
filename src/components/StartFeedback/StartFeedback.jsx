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
        <button onClick={handleClick}>Start Feedback!</button>
    )
}

export default StartFeedback;