import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 

// ------ BELOW -  THIS whole thing a a REDUCER -  holding a STATE ------
const feedbackList = ( state = [], action) => {
    switch (action.type){
        case 'GET_FEEDBACK_LIST' :
    return action.payload;
    default:
        return state;
    }
}


// ---- FEELINGS -- PAGE-ONE ---- //
const feelings = ( state = [], action) => {
    switch (action.type){
        case 'SET_FEELINGS' :
    return action.payload;
    default:
        return state;
    }
}

// ---- FEELINGS -- PAGE-ONE ---- //
const understanding = ( state = [], action) => {
    switch (action.type){
        case 'SET_UNDERSTANDING' :
    return action.payload;
    default:
        return state;
    }
}

const support = ( state = [], action) => {
    switch (action.type){
        case 'SET_SUPPORT' :
    return action.payload;
    default:
        return state;
    }
}

const comments = ( state = [], action) => {
    switch (action.type){
        case 'SET_COMMENTS' :
    return action.payload;
    default:
        return state;
    }
}

const review = ( state = [], action) => {
    switch (action.type){
        case 'SET_REVIEW' :
    return action.payload;
    default:
        return state;
    }
}




// ------ BELOW - THIS is where you STORE the REDUX STATE'S values ------
const reduxStore = createStore(
    combineReducers({
        feedbackList, // -- STRETCH GOAL --- //
        feelings,
        understanding,
        support,
        comments,
        // review,
    }),
    applyMiddleware(logger)
);









ReactDOM.render(

    <Provider store={reduxStore}>
        <App />
    </Provider>,

document.getElementById('root'));
registerServiceWorker();



// - /feedback/feelings
  // 'SET_FEELINGS
// - /feedback/understanding
  // - 'SET_UNDERSTANDING'
// - /feedback/support
// - 'SET_support'
// - /feedback/comments
// - 'SET_COMMENTS'
// - /feedback/review
  // - 'SET_REVIEW'

