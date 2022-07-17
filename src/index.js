import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 

// ------ BELOW -  THIS whole thing a a REDUCER -  holding a STATE ------
const currentFeedback = ( state = [], action) => {
    switch (action.type){
        case 'SET_FEEDBACK_LIST' :
    return action.payload;
    default:
        return state;
    }
}
// ---- FEELINGS -- PAGEONE ---- //
const feelings = ( state = [], action) => {
    switch (action.type){
        case 'SET_FEELINGS' :
    return action.payload;
    default:
        return state;
    }
}



// ------ BELOW - THIS is where you STORE the REDUX STATE'S values ------
const reduxStore = createStore(
    combineReducers({
        //new reducer here
        currentFeedback,
        feelings,
    }),
    applyMiddleware(logger)
);









ReactDOM.render(

    <Provider store={reduxStore}>
        <App />
    </Provider>,

document.getElementById('root'));
registerServiceWorker();
