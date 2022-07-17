
import { useSelector } from 'react-redux';

function feedbackList() {
    const feedbackList = useSelector(store => store.currentFeedback);

    return (
        <>
        <section>
            <h2>All Feedback</h2>
            <ul>
                {currentFeedback.map((feedback, index) =>
                <li key={index}>{feedback}text</li>
                )}
            </ul>
        </section>
        </>
    );
}

export default feedbackList;