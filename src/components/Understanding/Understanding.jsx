import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Understanding (){

    const [understandingRating, setUnderstandingRating] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();


    return( 
        <>
        <form>
            <h2>How well are you understanding the content?</h2>
            <p>Understanding?</p>
            <input 
                required
                type = "number"
                placeholder = "rating"
                value = {understandingRating}
                onChange = {(event) => setUnderstandingRating(event.target.value)}/>
            <button onClick = {() => {
                dispatch({
                type: "ADD_UNDERSTANDING",
                payload: {understandingRating}
                });
                history.push('/support');
                }}>Next</button>
        </form>
        </>
    )
};

export default Understanding;