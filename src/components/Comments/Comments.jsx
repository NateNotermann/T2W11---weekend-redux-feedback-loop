
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
        if(document.getElementById("comments").value  === '')
        {
            alert("You didn't enter anything!")
        }
        else {
        dispatch({
            type:'SET_COMMENTS',
            payload: comments,
         })
        console.log('in handleSubmit (comments.jsx)', comments)
        // alert('Going to Review!');
        history.push('/review')
        }
    }
    
    const handleClickBack = () => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments,
        })
        console.log('in handleSubmit (comments.jsx)', comments)
        alert('Back to Supported!');
        history.push('/supported')
    
    }

    return(
        <>
        <div>
        <h3>Please let us know if you have any additional comments</h3>
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
        <form onSubmit={handleClickBack}>
            <button type="submit">Go back to Supported</button>

        </form>
        </div>
        </>
    )
}

export default Comments;