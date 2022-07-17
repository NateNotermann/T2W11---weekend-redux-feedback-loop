
import React from "react";
import { useState } from  'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

 // ----- UNDERSTANDING PAGE ----- //
function Comments (){

    const history = useHistory();
    const dispatch = useDispatch();

// ----- UNDERSTANDING USE-STATE ----- //  
    const [comments, setComments] = useState('');

     // ----- CLICK FUNCTION ----- //
    const handleClick = () => {
        event.preventDefault();
        // dispatch({type: 'SET_COMMENTS'})
        console.log('in handleSubmit (understanding.jsx)', comments)
        alert('Going to Review!');
        history.push('/review')
    }

    return(
        <>
        <div>
        <h3>Please how much you were Supported this week, from 1 to 5.</h3>
        <h4>You entered:{comments}</h4>
        <form onSubmit={handleClick}>
        <input type="text"
        id="comments"
        placeholder="Enter comments here"
            value={comments}
            onChange={(event) => setComments(event.target.value)}>
            </input>
            <button type="submit">Submit Comments and go to final feedback Review</button>
        </form>
        </div>
        </>
    )
}

export default Comments;