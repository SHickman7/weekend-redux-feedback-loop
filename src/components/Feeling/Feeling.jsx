import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Feeling (){

    const [feelingRating, setFeelingRating] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();


    return( 
        <>
        <form>
            <h2>How are you feeling today?</h2>
            <p>Feeling?</p>
            <input 
                required
                type = "number"
                placeholder = "rating"
                value = {feelingRating}
                onChange = {(event) => setFeelingRating(event.target.value)}/>
            <button onClick = {() => {
                dispatch({
                    type: "ADD_FEELING",
                    payload: {feelingRating}
                });
                history.push('/understanding');
                }}>Next</button>
        </form>
        </>
    )
};

export default Feeling;