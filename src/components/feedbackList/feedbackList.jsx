
import { useSelector } from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from  'react';



function FeedbackList() {
    const feedbackList = useSelector(store => store.feedbackList);
    console.log('FeedbackList STORE is:', feedbackList );
    return (
        <>
        <section>
            <h2>All Feedback</h2>
            {/* <h3>{feedbackList}</h3> */}
            <ul>
                {feedbackList.map((feedback) =>{
                    return(
                        <div className="feedbacklist" key={feedback.id}>
                        <table>
                            <tbody>
                            <tr>
                                <th>id</th>
                                <th>feeling</th>
                                <th>understanding</th>
                                <th>support</th>
                                <th>comments</th>
                                <th>flagged</th>
                                <th>date</th>
                            </tr>
                            <tr>
                        <td>id: {feedback.id}</td>
                        <td>feeling: {feedback.feeling}</td>
                        <td>understanding: {feedback.understanding}</td>
                        <td>support: {feedback.support}</td>
                        <td>comments: {feedback.comments}</td>
                        <td>flagged: {feedback.flagged}</td>
                        <td>date: {feedback.date}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                    )
                }
                )}
            </ul>
        </section>
        </>
    );
}

export default FeedbackList;

