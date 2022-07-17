import axios from "axios";
import { useState } from  'react';
import React from "react";


 // -----  ----- //

 // ----- FEELINGS PAGE ----- //

function Feelings ({fetchFeedback}) {



// ----- FEELINGS USESTATE ----- //
 const [feelings, setFeelings] = useState ('');

 // ----- CLICK FUNCTION ----- //
 const handleSubmit = (event) => {
     event.preventDefault();
     console.log('in handleSubmit (APP.jsx)', feelings)
 }






    return (
        <>
        <div>
        <h4>(PageOne.jsx)</h4>

        <form onSubmit={handleSubmit}>
            <input type="number" 
            placeholder="Text Here"
            value={feelings}
            onChange={(event) => setFeelings(event.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        

        </div>
        </>
    )
}

export default Feelings;