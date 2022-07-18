
import React from "react";
import { useState } from  'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import axios from 'axios';
import FeedbackList from '../FeedbackList/FeedbackList'

function Review (){
    
//  console.log('Your feedback is:',feelings, understanding, support, comments)
  // ----- REDUX-STORE ------ // 
const feelings = useSelector(store => store.feelings);
const understanding = useSelector(store => store.understanding);
const support = useSelector(store => store.support);
const comments = useSelector(store => store.comments);
// const review = useSelector(store => store.review);




// console.log(currentDate);

// console.log('Your feedback is:',feelings, understanding, support, comments)
// ----- REVIEW USE-STATE ----- //
// const [reviewFeedback, setReviewFeedback] = useState ('');


 // ----- CLICK FUNCTION ----- //
const history = useHistory();
const dispatch = useDispatch();

const handleSubmit = () => {
    event.preventDefault();
    console.log('Your feedback is:',feelings, understanding, support, comments)
    postFeedback();
    // alert('Thanks for submitting you Feedback!');
    // history.push('/thanks')
    
}

const handleSubmitFeelings= () => {
    event.preventDefault();
    history.push('/feelings')
}

const handleSubmitUnderstanding= () => {
    event.preventDefault();
    history.push('/understanding')
}

const handleSubmitSupport = () => {
    event.preventDefault();
    history.push('/support')
}

const handleSubmitComments = () => {
    event.preventDefault();
    history.push('/comments')
}
const handleSubmitRestart = () => {
    event.preventDefault();
    history.push('/')
}

// ---- POST ---- //     
    // ---- axios POST ---- //  ----- TURN ON LATER ------
const postFeedback = () => {
    axios.post('/feedback', {
        feelings: feelings,
        understanding:  understanding,
        support: support,
        comments: comments,
    })
    .then(response => {
        FeedbackList();
        console.log('response is:', response);
    })
    .catch(error => {
        console.log('Error POSTING (Review.jsx)');
        alert('Server error');
    })
   };
   

   // ---- Return/Render to DOM - Review page ---- //
   return(
    <>
          <h3>Please review your answers before final submission</h3>
        {/* <h4>You entered feelings as:{feelings}</h4>
        <h4>You entered understanding as:{understanding}</h4>
        <h4>You entered support as:{support}</h4>
        <h4>You entered comments as:{comments}</h4> */}
        <div>
        <pre>You entered Feelings as: {feelings}<span>
            <form onSubmit={handleSubmitFeelings}> 
                <button type="submit">Edit Feelings</button>
                </form></span></pre>
        <pre>You entered Understanding as: {understanding}<span>
            <form onSubmit={handleSubmitUnderstanding}> 
                <button type="submit">Edit Understanding</button>
                </form></span></pre>
        <pre>You entered support as: {support}<span>
            <form onSubmit={handleSubmitSupport}> 
                <button type="submit">Edit support</button>
                </form></span></pre>
        <pre>You entered Comments as: {comments}<span>
            <form onSubmit={handleSubmitComments}> 
                <button type="submit">Edit Comments</button>
                </form></span></pre>
       
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <form onSubmit={handleSubmitRestart}> 
                <button type="submit">Restart Feedback</button>
        </form>
        </div>
    </>
)
};









export default Review;