import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings'
import { useState } from  'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Review from '../Review/Review';
import { useHistory } from 'react-router-dom';

// import { response } from 'express';


// ---- APP ---- //
function App() {
  const dispatch = useDispatch();
// id; 1, feeling: 2, understanding: 3, support: 4,
  // comments: Great!, flagged: false, date:2022-07-15

  // ---- HISTORY FUNCTION ---- // 
  const history = useHistory();    



// ---- Fetch's the FEEDBACK from DB  using AXIOS GET ---- //
const fetchFeedback = () => {
  axios.get('/feedback')
  .then(response =>  {
    dispatch({type:'SET_FEEDBACK_LIST',
  payload: response.data })
  })
  .catch(error => {
    console.log('Error in Fetching Feedback(app.jsx)', error)
    alert('error in GET feedback')
  })
 };


useEffect(() => {
  fetchFeedback();
}, [])


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
      <div>
        <Feelings fetchFeedback={fetchFeedback}/>
        <Review />
        {/* <feedbackList /> */}
      </div>
    </div>
  );
}








export default App;


// GET in app
  // ROUTER.GET
  // ROUTER.POST


// - /feedback/feelings
  // 'SET_FEELINGS
// - /feedback/understanding
  // - 'SET_UNDERSTANDING'
// - /feedback/supported
// - 'SET_SUPPORTED'
// - /feedback/comments
// - 'SET_COMMENTS'
// - /feedback/review
  // - 'SET_REVIEW'

// - /feedback/
  // - 'SET'
