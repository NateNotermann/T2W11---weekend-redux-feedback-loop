import axios from "axios";
import { useState } from  'react';

function PageOne () {

    
 const [feedback, setFeedback] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit (APP.jsx)', feedback)
    }

    return (
        <>
        <div>
        <h4>PageOne.jsx</h4>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Text Here"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>

        </div>
        </>
    )
}

export default PageOne;