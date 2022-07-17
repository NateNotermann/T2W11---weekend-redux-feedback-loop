
import { useSelector } from 'react-redux';

function FeedbackList() {
    const feedbackList = useSelector(store => store.feedbackList);
    console.log('FeedbackList STORE is:', feedbackList );
    return (
        <>
        <section>
            <h2>All Feedback</h2>
            <ul>
                {feedbackList.map((feedback, index) =>
                <li key={index}>{feedback}text</li>
                )}
            </ul>
        </section>
        </>
    );
}

export default FeedbackList;