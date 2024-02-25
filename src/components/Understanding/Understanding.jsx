import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Understanding (){

    const [understandingRating, setUnderstandingRating] = useState ("");
    const dispatch = useDispatch ();
    const history = useHistory();

    return( 
        <>
        <form>
            <h2>How well are you understanding the content?</h2>
            <p>Understanding?</p>
            <input
                type = "number" min="1" max="5"
                value = {understandingRating}
                onChange = {(event) => setUnderstandingRating(Number(event.target.value))}
                data-testid="input"
                />
            <button onClick = {() => {
                dispatch({
                    type: "ADD_UNDERSTANDING",
                    payload: {understandingRating}
                })
                history.push('/support');
            }} 
            data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Understanding;

