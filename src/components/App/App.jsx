import React from 'react';
import axios from 'axios';
import { useState } from  'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
// ---- COMPONENTS IMPORT ----- //
import StartFeedback from '../StartFeedback/StartFeedback';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Thanks from '../Thanks/Thanks';

import Review from '../Review/Review';
import FeedbackList from '../feedbackList/feedbackList';

// import { response } from 'express';
// id; 1, feeling: 2, understanding: 3, support: 4,
  // comments: Great!, flagged: false, date:2022-07-15


// ---------- APP ---------- //
function App() {
  // ----- USE-DISPATCH ----- //
  const dispatch = useDispatch();

  // ---- HISTORY FUNCTION ---- // 
  const history = useHistory();    

  // ----- REDUX-STORE ------ // 
  // const reduxStore = useSelector(store => store);
  // const feelings = useSelector(store => store.feelings);
  // const understanding = useSelector(store => store.understanding);
  // const supported = useSelector(store => store.supported);
  // const comments = useSelector(store => store.comments);


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
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
        <div>
          <Route path="/" exact>
            <StartFeedback />
          </Route>
          
          <Route path="/feelings" exact>
            <Feelings />
          </Route>
          <Route path="/understanding" exact>
            <Understanding />
          </Route>

          <Route path="/supported" exact>
            <Supported />
          </Route>

          <Route path="/comments" exact>
            <Comments />
          </Route>

          <Route path="/review" exact>
            <Review fetchFeedback={fetchFeedback}/>
          </Route>

          <Route path="/thanks" exact>
            <Thanks />
          </Route>

          {/* <pre>whole reduxStore = {JSON.stringify(reduxStore)}</pre> */}
          {/* <pre>Feelings Store = {feelings}</pre>
          <pre>understanding Store = {understanding}</pre>
          <pre>supported Store = {supported}</pre>
          <pre>comments Store = {comments}</pre>
   */}

          {/* <FeedbackList /> // -- STRETCH GOAL --- // */}
        </div>
      </div>
    </Router>
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
