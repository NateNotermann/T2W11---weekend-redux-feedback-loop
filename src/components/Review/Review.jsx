
import React from "react";
import { useState } from  'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
function Review (){
    
// ---- POST ---- // 
// Only need post in the REVIEW page. 

const [review, setReview] = useState ('');

const history = useHistory();
const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit SUBMIT Feedback (Review.jsx)', review)
    alert('Thanks for submitting you Feedback!');
    // history.push('/feedbackList')
}
    
//     // ---- axios POST ---- //  ----- TURN ON LATER ------
// const postFeeback = (event) => {
//     axios.post('/feedback', {review})
//     .then(response => {
//     })
//     .catch(error => {
//         console.log('Error POSTING (Review.jsx)');
//         alert('Server error');
//     })
//    };
   

   // ---- Return/Render to DOM - Review page ---- //
   return(
    <>
          <h3>Please review your answers before final submission</h3>
        {/* <h4>You entered feelings as:{feelings}</h4>
        <h4>You entered understanding as:{understanding}</h4>
        <h4>You entered supported as:{supported}</h4>
        <h4>You entered comments as:{comments}</h4> */}
        <div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </>
)
};









export default Review;