import axios from 'react';
import {useState} from 'react';


function Review (){
    
// ---- POST ---- // 
// Only need post in the REVIEW page. 

const [review, setReview] = useState ('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit SUBMIT Feedback (Review.jsx)', review)
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
        <h3>(Review.jsx)</h3>
        <div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </>
)
};









export default Review;